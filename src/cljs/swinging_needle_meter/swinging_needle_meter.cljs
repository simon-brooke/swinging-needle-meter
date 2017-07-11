(ns swinging-needle-meter.swinging-needle-meter
  (:require [clojure.string :as string]
            [re-com.core     :refer [h-box v-box box gap line label title slider checkbox p]]
            [re-com.box      :refer [flex-child-style]]
            [re-com.util     :refer [deref-or-value]]
            [re-com.validate :refer [number-or-string? css-style? html-attr? validate-args-macro]]
            [reagent.core    :as    reagent]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;
;;;; swinging-needle-meter: an experiment in animating SVG from re-frame.
;;;; Draws heavily on re-com..
;;;;
;;;; This program is free software; you can redistribute it and/or
;;;; modify it under the terms of the GNU General Public License
;;;; as published by the Free Software Foundation; either version 2
;;;; of the License, or (at your option) any later version.
;;;;
;;;; This program is distributed in the hope that it will be useful,
;;;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;;;; GNU General Public License for more details.
;;;;
;;;; You should have received a copy of the GNU General Public License
;;;; along with this program; if not, write to the Free Software
;;;; Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301,
;;;; USA.
;;;;
;;;; Copyright (C) 2014 Simon Brooke
;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ------------------------------------------------------------------------------------
;;  Component: swinging-needle-meter
;; ------------------------------------------------------------------------------------

;;; It seems the defaults given here are just documentation; the defaults
;;; that are actually used are those given in the :or clause of the argument map.
(def swinging-needle-args-desc
  [{:name :model         :required true  :type "double | atom"
    :validate-fn number-or-string? :description "current value of the variable being watched. A number between 0 and 100"}
   {:name :setpoint      :required false :type "double | atom"
    :validate-fn number-or-string? :description "current setpoint for the variable being watched, if any. A number between 0 and 100"}
   {:name :width         :required false :type "integer"                 :default "300"
    :validate-fn integer?          :description "a CSS width"}
   {:name :height        :required false :type "integer"                 :default "200"
    :validate-fn integer?          :description "a CSS height"}
   {:name :min-value     :required false :type "double"                 :default 0
    :validate-fn number?           :description "the minimum value model can take"}
   {:name :max-value     :required false :type "double"                 :default 100
    :validate-fn number?           :description "the maximum value model can take"}
   {:name :warn-value    :required false :type "double"                 :default 80
    :validate-fn number?           :description "the maximum safe value model can take"}
   {:name :tolerance     :required false :type "double"                 :default 3
    :validate-fn number?           :description "the amount by which model can differ from setpoint and still be considered acceptable"}
   {:name :class         :required false :type "string"
    :validate-fn string?           :description "CSS class names, space separated, for the top-level SVG element"}
   {:name :alarm-class  :required false :type "string"                  :default "snm-warning"
    :validate-fn string?           :description "CSS class names, space separated, applied to the frame in an alarm condition"}
   {:name :cursor-class  :required false :type "string"                 :default "snm-cursor"
    :validate-fn string?           :description "CSS class names, space separated, for the cursor"}
   {:name :frame-class   :required false :type "string"                 :default "snm-frame"
    :validate-fn string?           :description "CSS class names, space separated, for the frame"}
   {:name :hub-class     :required false :type "string"                 :default "snm-hub"
    :validate-fn string?           :description "CSS class names, space separated, for the hub"}
   {:name :needle-class  :required false :type "string"                 :default "snm-needle"
    :validate-fn string?           :description "CSS class names, space separated, for the needle"}
   {:name :scale-class   :required false :type "string"                 :default "snm-scale"
    :validate-fn string?           :description "CSS class names, space separated, for the scale"}
   {:name :redzone-class :required false :type "string"                 :default "snm-redzone"
    :validate-fn string?           :description "CSS class names, space separated, for the redzone"}
   {:name :target-class :required false :type "string"                 :default "snm-target"
    :validate-fn string?           :description "CSS class names, space separated, , applied to the frame in an on-target condition"}
   {:name :unit          :required false :type "string"
    :validate-fn string?           :description "Unit to show after the value"}
   {:name :id            :required false :type "string"                 :default "meter"
    :validate-fn string?           :description "Element id for this instance of the meter"}
   {:name :gradations    :reduired false :type "integer"                :default 5
    :validate-fn integer?          :description "Number of gradations to show on the scale, not counting the point."}
   {:name :style         :required false :type "CSS style map"
    :validate-fn css-style?        :description "CSS styles to add or override"}
   {:name :attr          :required false :type "HTML attr map"
    :validate-fn html-attr?        :description [:span "HTML attributes, like " [:code ":on-mouse-move"] [:br] "No " [:code ":class"] " or " [:code ":style"] "allowed"]}])


(defn abs
  "Return the absolute value of the (numeric) argument."
  [n] (max n (- n)))

;; the constant 140 represents the full sweep of the needle
;; from the left end of the scale to right end, in degrees.
(def full-scale-deflection 140)


(defn deflection
  "Return the linear deflection of a needle given this `value` on the
  range `min-value`...`max-value`."
  [value min-value max-value]
  (let [range (- max-value min-value)
        zero-offset (/ (- 0 min-value) range)
        limited (min (max (+ zero-offset (/ value range)) 0) 1)]
    (* (- limited 0.5) full-scale-deflection)))


(defn polar-to-cartesian
  "Return, as a map with keys :x. :y, the cartesian coordinates at the point
   `radius` distance at `theta` (degrees) angle from a point at
   cartesian coordinates `cx`, `cy`."
  [cx cy radius theta]
  (let
    [in-radians (/ (* (- theta 90) (aget js/Math "PI")) 180.0)]
    {:x (+ cx (* radius (.cos js/Math in-radians)))
     :y (+ cy (* radius (.sin js/Math in-radians)))}))


(defn describe-arc
  "Return as a string an SVG path definition describing an arc centred
   at `cx`, cy` starting at `start-angle` and ending at `end-angle` (both
   angles in degrees)."
  [cx cy radius start-angle end-angle]
  (let
    [start (polar-to-cartesian cx cy radius start-angle)
     end (polar-to-cartesian cx cy radius end-angle)
     large-arc? (if (<= (- end-angle start-angle) 180) 0 1)
     sweep (if (> end-angle start-angle) 1 0)]
    (string/join " " ["M" (:x start) (:y start) "A" radius radius 0 large-arc? sweep (:x end) (:y end)])))


(defn as-label
  "If this arg is a floating point number, format it to a reasonable width; else return it."
  [arg]
  (if
    (and (number? arg) (not (integer? arg)))
    (.toFixed arg 2)
    arg))


(defn gradation
  "Return as a string an SVG path definition describing a radial stroke from a center
  at `cx`, cy` starting at `min-radius` and extending to `max-radius`."
  [cx cy min-radius max-radius angle label]
  [:g {:class "snm-gradation"
       :transform (string/join " " ["rotate(" angle cx cy ")"])}
   [:path {:d (string/join
                " "
                ["M"
                 cx
                 (- cy
                    (+ min-radius
                       (* (- max-radius min-radius) 0.333)))
                 "L"
                 cx
                 (- cy max-radius)])}]
   [:text {:text-anchor "middle"
           :x cx
           :y (- cy min-radius)} (as-label label)]])


(defn swinging-needle-meter
  "Render an SVG swinging needle meter"
  [& {:keys [model setpoint width height min-value max-value warn-value tolerance class gradations alarm-class cursor-class frame-class hub-class needle-class redzone-class scale-class target-class unit id style attr]
      :or   {width          300
             height         200
             min-value      0
             max-value      100
             warn-value     80
             tolerance      3
             gradations     5
             alarm-class    "snm-warning"
             cursor-class   "snm-cursor"
             frame-class    "snm-frame"
             hub-class      "snm-hub"
             needle-class   "snm-needle"
             scale-class    "snm-scale"
             redzone-class  "snm-redzone"
             target-class   "snm-target"
             id "meter"}
      :as   args}]
  {:pre [(validate-args-macro swinging-needle-args-desc args "swinging-needle")]}
  (let [model (deref-or-value model)
        setpoint (deref-or-value setpoint)
        mid-point-deflection (/ full-scale-deflection 2)
        cx (/ width 2)
        cy (* height 0.90)
        needle-length (* height 0.75)
        scale-radius (* height 0.7)
        gradation-inner (* height 0.55)]
    [box
     :align :start
     :child [:div
             (merge
               {:class (str "swinging-needle  " class " " (str
                        (if (< min-value model warn-value) ""
                          (str " " alarm-class))
                        (if (and (> setpoint min-value)(< (abs (- model setpoint)) tolerance))
                          (str " " target-class) "")))
                :style (merge (flex-child-style "none")
                              {:width width :height height}
                              style)}
               attr)
             [:svg {:xmlSpace "preserve"
                    :overflow "visible"
                    :viewBox (string/join " " [0 0 width height])
                    :y "0px"
                    :x "0px"
                    :version "1.1"
                    :id id
                    :class (str "snm-meter " class)}

              [:text
               {:text-anchor "middle"
                :x (/ width 2)
                :y (/ height 2)
                :width "100"
                :id (str id "-current-value")
                :class "snm-value"}[:tspan (str (as-label model) (if unit " ") unit)]]
              [:path {:class scale-class
                      :id (str id "-scale")
                      :d (describe-arc cx cy scale-radius
                                       (deflection min-value min-value max-value)
                                       (deflection max-value min-value max-value))}]
              [:path {:class redzone-class
                      :id (str id "-redzone")
                      :d (describe-arc cx cy scale-radius
                                       (deflection warn-value min-value max-value)
                                       (deflection max-value min-value max-value))}]
              [:path {:class cursor-class
                      :id (str id "-cursor")
                      :d (str "M " cx  "," (- cy needle-length) " " cx "," cy) ;; "M cx,20 cx,100"
                      :visibility (if (and (number? setpoint) (> setpoint min-value)) "visible" "hidden")
                      :transform (str "rotate( " (deflection setpoint min-value max-value) "," cx "," cy ")")}]
              [:path {:class needle-class
                      :id (str id "-needle")
                      :d (str "M " cx "," (- cy needle-length) " " cx "," cy) ;; "M cx,20 cx,100"
                      :transform (str "rotate( " (deflection model min-value max-value) "," cx "," cy ")") }]
              (apply vector (cons :g (map #(let
                                             [value (+ min-value
                                                       (*
                                                         (/
                                                           (- max-value min-value)
                                                           gradations) %))]
                                             (gradation cx cy gradation-inner needle-length
                                                        (deflection value min-value max-value)
                                                        value))
                                          (range 0 (+ gradations 1)))))
              [:rect {:class frame-class
                      :id (str id "-frame")
                      :x (* width 0.05) :y (* height .05) :height cy :width (* width 0.9)}]
              [:circle {:class hub-class
                        :id (str id "-hub")
                        :r (/ height 10) :cx cx :cy cy}]]
             ]]))

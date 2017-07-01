(ns swinging-needle-meter.swinging-needle-meter
  (:require [re-com.core     :refer [h-box v-box box gap line label title slider checkbox p]]
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
;;  Component: swinging-needle
;; ------------------------------------------------------------------------------------

;;; It seems the defaults given here are just documentation; the defaults
;;; that are actually used are those given in the :or clause of the argument map.
(def swinging-needle-args-desc
  [{:name :model         :required true  :type "double | atom"
    :validate-fn number-or-string? :description "current value of the variable being watched. A number between 0 and 100"}
   {:name :setpoint      :required false :type "double | atom"
    :validate-fn number-or-string? :description "current setpoint for the variable being watched, if any. A number between 0 and 100"}
   {:name :width         :required false :type "string"                 :default "100%"
    :validate-fn string?           :description "a CSS width"}
   {:name :height        :required false :type "string"                 :default "100%"
    :validate-fn string?           :description "a CSS height"}
   {:name :min-value     :required false :type "double"                 :default 0
    :validate-fn number?           :description "the minimum value model can take"}
   {:name :max-value     :required false :type "double"                 :default 100
    :validate-fn number?           :description "the maximum value model can take"}
   {:name :class         :required false :type "string"
    :validate-fn string?           :description "CSS class names, space separated"}
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
  "Return the deflection of a needle given this `value` on the
  range `min-value`...`max-value`."
  [value min-value max-value]
  (let [range (- max-value min-value)
        deflection (/ value range)
        zero-offset (/ (- 0 min-value) range)
        limited (min (max (+ zero-offset deflection) 0) 1)]
    (* (- limited 0.5) full-scale-deflection)))


(defn swinging-needle-meter
  "Render an SVG swinging needle meter"
  [& {:keys [model setpoint width height min-value max-value class cursor-class frame-class hub-class needle-class scale-class redzone-class style attr]
      :or   {width "100%"
             height "100%"
             min-value 0
             max-value 100
             cursor-class "snm-cursor"
             frame-class "snm-frame"
             hub-class "snm-hub"
             needle-class "snm-needle"
             scale-class "snm-scale"
             redzone-class "snm-redzone"}
      :as   args}]
  {:pre [(validate-args-macro swinging-needle-args-desc args "swinging-needle")]}
  (let [model (deref-or-value model)
        setpoint (deref-or-value setpoint)]
    [box
     :align :start
     :child [:div
             (merge
               {:class (str "rc-swinging-needle  " class)
                :style (merge (flex-child-style "none")
                              {:width width :height height}
                              style)}
               attr)
             [:div
              {:class (str "swinging-needle ")
               :role  "swinging-needle"}
              [:svg {:xmlns:svg "http://www.w3.org/2000/svg"
                     :xmlns "http://www.w3.org/2000/svg"
                     :xml:space "preserve"
                     :overflow "visible"
                     :viewBox "0 0 180 120"
                     :y "0px"
                     :x "0px"
                     :version "1.1"
                     :class (str "snm-meter " class)}
                [:path {:class scale-class
                       :d "m 11.85914,76.864488 c 0,0 14.34545,-53.795412 68.140856,-53.795412 53.795424,0 68.140864,53.795412 68.140864,53.795412"}]
                [:path {:class redzone-class :d "m 137.74738,54.878869 c 0,0 3.02675,3.620416 6.3911,11.14347 3.36435,7.523055 4.20612,11.198095 4.20612,11.198095"}]
                [:rect {:class frame-class :x "5" :y "5" :height "100" :width "150"}]
                [:path {:class cursor-class
                        :d "M 80,20 80,100"
                        :visibility (if (and (number? setpoint) (> setpoint min-value)) "visible" "hidden")
                        :transform (str "rotate( " (deflection setpoint min-value max-value) ", 80, 100)")}]
                [:path {:class needle-class
                        :d "M 80,20 80,100"
                        :transform (str "rotate( " (deflection model min-value max-value) ", 80, 100)") }]
                [:circle {:class hub-class :r "10" :cx "80" :cy "100"}]]
;;; Useful for debugging:
;;               (str "value: " model "; min: " min-value
;;                    "; max: " max-value
;;                    "; deflection: " (int (deflection model min-value max-value)))
              ]]]))

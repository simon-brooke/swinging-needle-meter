(ns swinging-needle-meter.swinging-needle-meter
  (:require [re-com.core     :refer [h-box v-box box gap line label title slider checkbox p]]
            [re-com.box      :refer [flex-child-style]]
            [re-com.util     :refer [deref-or-value]]
            [re-com.validate :refer [number-or-string? css-style? html-attr? validate-args-macro]]
            [reagent.core    :as    reagent]))

;; ------------------------------------------------------------------------------------
;;  Component: swinging-needle
;; ------------------------------------------------------------------------------------

(def swinging-needle-args-desc
  [{:name :model         :required true  :type "double | atom"
    :validate-fn number-or-string? :description "current value of the variable being watched. A number between 0 and 100"}
   {:name :setpoint      :required false :type "double | atom"
    :validate-fn number-or-string? :description "current setpoint for the variable being watched, if any. A number between 0 and 100"}
   {:name :width         :required false :type "string"                 :default "100%"
    :validate-fn string?           :description "a CSS width"}
   {:name :height        :required false :type "string"                 :default "100%"
    :validate-fn string?           :description "a CSS height"}
   {:name :class         :required false :type "string"
    :validate-fn string?           :description "CSS class names, space separated"}
;;    {:name :cursor-class  :required false :type "string"                 :default "snm-cursor"
;;     :validate-fn string?           :description "CSS class names, space separated, for the cursor"}
;;    {:name :frame-class   :required false :type "string"                 :default "snm-frame"
;;     :validate-fn string?           :description "CSS class names, space separated, for the frame"}
;;    {:name :hub-class     :required false :type "string"                 :default "snm-hub"
;;     :validate-fn string?           :description "CSS class names, space separated, for the hub"}
;;    {:name :needle-class  :required false :type "string"                 :default "snm-needle"
;;     :validate-fn string?           :description "CSS class names, space separated, for the needle"}
;;    {:name :scale-class   :required false :type "string"                 :default "snm-scale"
;;     :validate-fn string?           :description "CSS class names, space separated, for the scale"}
;;    {:name :redzone-class :required false :type "string"                 :default "snm-redzone"
;;     :validate-fn string?           :description "CSS class names, space separated, for the redzone"}
   {:name :style         :required false :type "CSS style map"
    :validate-fn css-style?        :description "CSS styles to add or override"}
   {:name :attr          :required false :type "HTML attr map"
    :validate-fn html-attr?        :description [:span "HTML attributes, like " [:code ":on-mouse-move"] [:br] "No " [:code ":class"] " or " [:code ":style"] "allowed"]}])

(defn swinging-needle-meter
  "Render an SVG swinging needle meter"
  [& {:keys [model setpoint width height class cursor-class frame-class hub-class needle-class scale-class redzone-class style attr]
      :or   {width "100%" height "100%"}
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
                [:path {:class "snm-scale"
                       :d "m 11.85914,76.864488 c 0,0 14.34545,-53.795412 68.140856,-53.795412 53.795424,0 68.140864,53.795412 68.140864,53.795412"}]
                [:path {:class "snm-redzone" :d "m 137.74738,54.878869 c 0,0 3.02675,3.620416 6.3911,11.14347 3.36435,7.523055 4.20612,11.198095 4.20612,11.198095"}]
                [:rect {:class "snm-frame" :x "5" :y "5" :height "100" :width "150"}]
                [:path {:class "snm-cursor"
                        :d "M 80,20 80,100"
                        :visibility (if (and (number? setpoint) (> setpoint 0)) "visible" "hidden")
                        :transform (str "rotate( " (* (- setpoint 50) 1.4) ", 80, 100)")}]
                [:path {:class "snm-needle"
                        :d "M 80,20 80,100"
                        :transform (str "rotate( " (* (- model 50) 1.4) ", 80, 100)") }]
                [:circle {:class "snm-hub" :r "10" :cx "80" :cy "100"}]]
              (str model "%")]]]))

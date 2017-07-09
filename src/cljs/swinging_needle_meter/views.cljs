(ns swinging-needle-meter.views
  (:require [re-frame.core :as    re-frame]
            [re-com.core   :refer [h-box v-box box gap line label title progress-bar slider checkbox p]]
            [swinging-needle-meter.swinging-needle-meter :refer [swinging-needle-meter  swinging-needle-args-desc]]
            [swinging-needle-meter.utils   :refer [panel-title title2 args-table github-hyperlink status-text]]
            [reagent.core  :as    reagent]))

;; ------------------------------------------------------------------------------------
;;  Demo: swinging-needle-meter
;; ------------------------------------------------------------------------------------

(defn swinging-needle-demo
  []
  (let [value (reagent/atom 75)
        setpoint (reagent/atom 75)]
    (fn
      []
      [v-box
       :size     "auto"
       :gap      "10px"
       :children [[panel-title "Swinging needle meter"]
                  [h-box
                   :gap      "100px"
                   :children [[v-box
                               :gap      "10px"
                               :width    "450px"
                               :children [[title2 "Notes"]
                                          [status-text "Wildly experimental"]
                                          [p "An SVG swinging needle meter intended to be useful in dashboards."]
                                          [p "Note that the cursor will vanish if the setpoint is null or is less than or equal to min-value; this is intentional."]
                                          [p "Note that if the value of model is lower then min-value or greater than max-value,
                                           it will be limited as it would be on a mechanical meter."]
                                          [p "You can hide the redzone by setting its style to the style 'snm-scale', or by setting 'warn-value' equal to 'max-value'."]

                                          [title2 "Behaviour"]

                                          [p "min-value and max-value must be numbers; max-value must be greater than min-value.
                                           The default behaviour is of a swinging needle meter with the needle deflection proportional
                                           to the value of the model (also a number) expressed as a proportion of the difference between
                                           min-value and max-value."]

                                          [p "A red-zone can be introduced by setting a value for warn-value between min-value and max-value. Additionally, if
                                           the value of model exceeds warn-value the class alarm-class will be set on the meter indicating a warning state."]

                                          [p "A cursor can be shown by setting the value of set-point between min-value and max-value. A tolerance value can be specified
                                           by setting a value for tolerance. If the difference between the model value and the setpoint value is less than the tolerance
                                           value, the class target-class will be set on the meter to indicate an on-target status. The setpoint value, like the model value,
                                           may change dynamically at run-time."]

                                          [args-table swinging-needle-args-desc]]]
                              [v-box
                               :gap      "10px"
                               :children [[title2 "Demo"]
                                          [v-box
                                           :gap      "20px"
                                           :children [[swinging-needle-meter
                                                       :model     value
                                                       :setpoint  setpoint
                                                       :unit      "Mw"
;;                                                        :min-value 20
;;                                                        :warn-value 35
;;                                                        :max-value 40
;;                                                        :max-value (aget js/Math "PI")
                                                       :tolerance 2
                                                       :alarm-class "snm-warning"
                                                       :width     "350px"]
                                                      [title :level :level3 :label "Parameters"]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":model"]]
                                                                  [slider
                                                                   :model     value
                                                                   :min       0
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(reset! value %)]
                                                                  [label :label @value]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":setpoint"]]
                                                                  [slider
                                                                   :model     setpoint
                                                                   :min       0
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(reset! setpoint %)]
                                                                  [label :label @setpoint]]]
                                                      ]]]]]]]])))


;; core holds a reference to panel, so need one level of indirection to get figwheel updates
(defn panel
  []
  [swinging-needle-demo])


(defn main-panel []
  (fn []
    [v-box
     :height "100%"
     :children [[swinging-needle-demo]]]))

(ns swinging-needle-meter.views
  (:require [re-frame.core :as    re-frame]
            [re-com.core   :refer [h-box v-box box gap line label title progress-bar slider checkbox p]]
            [swinging-needle-meter.swinging-needle-meter :refer [swinging-needle-meter  swinging-needle-args-desc]]
            [swinging-needle-meter.utils   :refer [panel-title title2 args-table github-hyperlink status-text]]
            [reagent.core  :as    reagent]))

;; ------------------------------------------------------------------------------------
;;  Demo: swinging-needle
;; ------------------------------------------------------------------------------------

(defn swinging-needle-demo
  []
  (let [value (reagent/atom 75)
        setpoint (reagent/atom 75)
        striped? (reagent/atom false)]
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
                                          [p "An SVG swinging needle meter. Note that the cursor will vanish if the setpoint is null or zero; this is intentional."]
                                          [p
                                           "TODO: You can't adjust the position of the start of the red-zone; "
                                           "you can't override the classes for the different elements of the meter; "
                                           "you can't override the maximum and minimum values."]
                                          [args-table swinging-needle-args-desc]]]
                              [v-box
                               :gap      "10px"
                               :children [[title2 "Demo"]
                                          [v-box
                                           :gap      "20px"
                                           :children [[swinging-needle-meter
                                                       :model    value
                                                       :setpoint setpoint
                                                       :width    "350px"]
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

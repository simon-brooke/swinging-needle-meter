(ns swinging-needle-meter.views
  (:require [re-frame.core :as    rf]
            [re-com.core   :refer [h-box v-box box label title slider p single-dropdown]]
            [swinging-needle-meter.swinging-needle-meter :refer [swinging-needle-meter  swinging-needle-args-desc]]
            [swinging-needle-meter.utils   :refer [panel-title title2 args-table status-text]]))

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
;;;; Copyright (C) 2017 Simon Brooke
;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ------------------------------------------------------------------------------------
;;  Demo: swinging-needle-meter
;; ------------------------------------------------------------------------------------

(defn swinging-needle-demo
  []
  (let [size @(rf/subscribe [:size])]
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

                                          [:a {:name "parameters"}
                                           [args-table swinging-needle-args-desc]]]]
                              [v-box
                               :gap      "10px"
                               :children [[title2 "Demo"]
                                          [v-box
                                           :gap      "20px"
                                           :children [[swinging-needle-meter
                                                       :model     @(rf/subscribe [:old-value])
                                                       :setpoint  @(rf/subscribe [:setpoint])
                                                       :unit      @(rf/subscribe [:unit])
                                                       :min-value @(rf/subscribe [:min-val])
                                                       :warn-value @(rf/subscribe [:warn-val])
                                                       :max-value @(rf/subscribe [:max-val])
                                                       :tolerance 2
                                                       :alarm-class "snm-warning"
                                                       :gradations @(rf/subscribe [:gradations])
                                                       :height    (int (* @(rf/subscribe [:size]) 6))
                                                       :width     (int (* @(rf/subscribe [:size]) 10))]
                                                      [title :level :level3 :label "Parameters"]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":model"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:value])
                                                                   :min       -100
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-value %])]
                                                                  [label :label @(rf/subscribe [:value])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":setpoint"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:setpoint])
                                                                   :min       -100
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-setpoint %])]
                                                                  [label :label @(rf/subscribe [:setpoint])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":min-val"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:min-val])
                                                                   :min       -100
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-min-value %])]
                                                                  [label :label @(rf/subscribe [:min-val])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":max-val"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:max-val])
                                                                   :min       -100
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-max-value %])]
                                                                  [label :label @(rf/subscribe [:max-val])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":warn-val"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:warn-val])
                                                                   :min       -100
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-warning-value %])]
                                                                  [label :label @(rf/subscribe [:warn-val])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":gradations"]]
                                                                  [slider
                                                                   :model     @(rf/subscribe [:gradations])
                                                                   :min       0
                                                                   :max       10
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-gradations %])]
                                                                  [label :label @(rf/subscribe [:gradations])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":unit"]]
                                                                  [single-dropdown
                                                                   :model     @(rf/subscribe [:unit])
                                                                   :choices [{:id "Mw" :label "Megawatts" :group "Electrical"}
                                                                             {:id "M/s" :label "Metres per second" :group "Motion"}
                                                                             {:id "F/f" :label "Furlongs per fortnight" :group "Motion"}
                                                                             {:id "°C" :label "Degrees Celsius" :group "Temperature"}]
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-unit %])]]]
                                                      [h-box
                                                       :gap "10px"
                                                       :children [[box :align :start :child [:code ":size"]]
                                                                  [slider
                                                                   :model     size
                                                                   :min       25
                                                                   :max       100
                                                                   :width     "200px"
                                                                   :on-change #(rf/dispatch [:set-size %])]
                                                                  [label :label size]]]
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

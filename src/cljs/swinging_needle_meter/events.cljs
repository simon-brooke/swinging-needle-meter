(ns swinging-needle-meter.events
  (:require [re-frame.core :as re-frame]
            [swinging-needle-meter.state :as state]))

;; Reset.
(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   state/default-state))

;; The clock ticked.
(re-frame/reg-event-db
 :timer
 (fn [db _]
   db))

(re-frame/reg-event-db
 :set-value
 (fn [db [x value]]
   (js/console.log (str :set-value " " x " " value))
   (assoc db :value value)))

(re-frame/reg-event-db
 :set-setpoint
 (fn [db [_ value]]
   (assoc db :setpoint value)))

(re-frame/reg-event-db
 :set-gradations
 (fn [db [_ value]]
   (assoc db :gradations value)))

(re-frame/reg-event-db
 :set-size
 (fn [db [_ value]]
   (assoc db :size value)))

(re-frame/reg-event-db
 :set-min-value
 (fn [db [_ value]]
   (assoc db :min-val value)))

(re-frame/reg-event-db
 :set-max-value
 (fn [db [_ value]]
   (assoc db :max-val value)))

(re-frame/reg-event-db
 :set-warning-value
 (fn [db [_ value]]
   (assoc db :warn-val value)))

(re-frame/reg-event-db
 :set-unit
 (fn [db [_ value]]
   (assoc db :unit value)))


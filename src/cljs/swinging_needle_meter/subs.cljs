(ns swinging-needle-meter.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 :value
 (fn [db]
   (:value db)))

(re-frame/reg-sub
 :setpoint
 (fn [db]
   (:setpoint db)))

(re-frame/reg-sub
 :unit
 (fn [db]
   (:unit db)))

(re-frame/reg-sub
 :min-val
 (fn [db]
   (:min-val db)))

(re-frame/reg-sub
 :max-val
 (fn [db]
   (:max-val db)))

(re-frame/reg-sub
 :gradations
 (fn [db]
   (:gradations db)))

(re-frame/reg-sub
 :warn-val
 (fn [db]
   (:warn-val db)))

(re-frame/reg-sub
 :size
 (fn [db]
   (:size db)))

(re-frame/reg-sub
 :timer
 (fn [db]
   (:timer db)))


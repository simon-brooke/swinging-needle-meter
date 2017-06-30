(ns swinging-needle-meter.events
  (:require [re-frame.core :as re-frame]
            [swinging-needle-meter.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

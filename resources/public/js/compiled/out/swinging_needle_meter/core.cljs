(ns swinging-needle-meter.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [swinging-needle-meter.events]
            [swinging-needle-meter.subs]
            [swinging-needle-meter.views :as views]
            [swinging-needle-meter.config :as config]))

;;; This file is unchanged (except this line) from the leiningen recom template


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; call the dispatching function every tenth of a second
(defonce do-timer (js/setInterval dispatch-timer-event 100))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))

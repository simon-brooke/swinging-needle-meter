(ns swinging-needle-meter.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

;;; This file is unchanged (except this line) from the leiningen recom template

(re-frame/reg-sub
 :name
 (fn [db]
   (:name db)))

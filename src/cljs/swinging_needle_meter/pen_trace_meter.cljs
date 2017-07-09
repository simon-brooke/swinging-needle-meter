(ns swinging-needle-meter.pen-trace-meter
  (:require [re-com.core     :refer [h-box v-box box gap line label title slider checkbox p]]
            [re-com.box      :refer [flex-child-style]]
            [re-com.util     :refer [deref-or-value]]
            [re-com.validate :refer [number-or-string? css-style? html-attr? validate-args-macro]]
            [reagent.core    :as    reagent]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;
;;;; pen-trace-meter: an experiment in animating SVG from re-frame.
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
;;  Component: pen-trace-meter
;; ------------------------------------------------------------------------------------

(defn pen-trace-meter
  [& {:keys [model width height min-value max-value]
      :or {width          "100%"
             height         "100%"
             min-value      0
             max-value      100
             }}]
   )

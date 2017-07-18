(ns ^{:doc "Client state."
      :author "Simon Brooke"}
  swinging-needle-meter.state)

(def default-state
  {:timer (js/Date.)
   :value 60
   :setpoint 75
   :gradations 5
   :size 70
   :min-val 0
   :max-val 100
   :warn-val 80
   :unit "Mw"})

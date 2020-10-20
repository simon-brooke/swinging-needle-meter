(ns figwheel.connect.dev (:require [swinging-needle-meter.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/swinging-needle-meter.core.mount-root (apply js/swinging-needle-meter.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'swinging-needle-meter.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


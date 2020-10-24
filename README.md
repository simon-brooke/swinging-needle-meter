# swinging-needle-meter

A [re-frame](https://github.com/Day8/re-frame) application designed to display an example swinging needle meter, as an experiment in animating SVG from re-frame. Draws heavily on re-com.

Works well in Chrome and Firefox; not tested in Internet Exploder.

![what it should look like](resources/public/images/example.png)

## Demo site

There's a demo site [here](https://simon-brooke.github.io/swinging-needle-meter/resources/public/index.html).

## Intended uses

This is a component for a console, typically one controlling a technical or scientific instrument. It is
by design flexible and configurable. Minimum value, maximum value, warning value and number of gradations
shown are all configurable, as are (obviously) styles.

A cursor will be shown if the value of *setpoint* is between *min-value* and *max-value*; *setpoint* is a dynamic value which is watched during the run. While the *model* value is within +- *tolerance* of the *setpoint* value, a class *target-class* is set on the meter indicating an on-target status (by default the frame goes green).

A red-zone may be shown if a *warn-value* is set which is between *min-value* and *max-value*. If such a *warn-value* is set, then if the current value (*model*) exceeds *warn-value*, a class *warning-class* is set on the meter indicating a warning status (by default the frame goes maroon).

## Usage

In your cljs file, require the following:

```clojure
  (:require [re-frame.core :as rf]
            [swinging-needle-meter.swinging-needle-meter :refer [swinging-needle-meter]])
```

within a [re-com](https://github.com/day8/re-com) component, 

```clojure
    [swinging-needle-meter
        :model     @(rf/subscribe [:old-value])
        :setpoint  @(rf/subscribe [:setpoint])          ;; optional
        :unit      @(rf/subscribe [:unit])              ;; optional
        :min-value @(rf/subscribe [:min-val])           ;; optional; default 0
        :warn-value @(rf/subscribe [:warn-val])         ;; optional; default 80
        :max-value @(rf/subscribe [:max-val])           ;; optional; default 100
        :tolerance 2                                    ;; optional; default 3
        :alarm-class "snm-warning"                      ;; optional; default "snm-warning"
        :gradations @(rf/subscribe [:gradations])       ;; optional; default 5
        :height    (int (* @(rf/subscribe [:size]) 6))  ;; optional; default 200 (pixels) 
        :width     (int (* @(rf/subscribe [:size]) 10))];; optional; default 300 (pixels)
```

or, minimally, just 

```clojure
    [swinging-needle-meter
        :model     @(rf/subscribe [:old-value])]
```

There are further arguments which may be set which are documented 
[here](https://simon-brooke.github.io/swinging-needle-meter/resources/public/index.html#parameters).

Obviously, all the subscriptions above must be registered with `re-frame/reg-sub`. See [re-frame documentation](http://day8.github.io/re-frame/re-frame/).

The value subscribed to as the value to `:model` is expected to be a floating point number between that of `:min-value` and `:max-value`. 

### Simulation of a mechanical meter needle with inertia and damping

You don't need animated movement, you can simply jerk the needle to its new position; animation appeals to users who are used to mechanical meters and is easy on the eye, but obviously it means the needle lags a little behind changes in the underlying state.

If you want animation, this is how it works.

The event registered to be driven by `:timer` in `swinging-needle-meter/events.cljs` drives the animation of the movement of the needle. The value of `:timer` is initialised in the state to `(js/Date.)` in `swinging-needle-meter/state.js`. Thus, it's a clock that ticks.

The actual value in the state which is tracked by the meter is the value of, in the example, `:target`. The `:timer` event moves `:old-value` progressively towards `:target` until they coincide. So in a real deployment you'd poll the actual real world value that you were tracking using a repeated asynchronous JSON request, and, on a response to such a request, you would update the value of `:target` in the state.

Obviously, if you want to put multiple meters onto one page tracking different real world variables, you would minimally have to have a separate key in the state for

1. The `target` of each meter;
2. the `old-value` of each meter (if animation is desired);

You might also want a separate key for the `warn-value` of each meter, and possibly also the `set-point`. Values of other parameters may be subscribed to from values in the state but it will probably be more convenient to hard-wire them or allow them to default.

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```

## License
Copyright © 2017 Simon Brooke. Licensed under the GNU General Public License,
version 2.0 or (at your option) any later version. If you wish to incorporate
parts of this into another open source project which uses a less restrictive
license, please contact me; I'm open to dual licensing it.

# swinging-needle-meter

A [re-frame](https://github.com/Day8/re-frame) application designed to display an example swinging needle meter, as an experiment in animating SVG from re-frame. Draws heavily on re-com.

Works well in Chrome and Firefox; not tested in Internet Exploder.

![what it should look like](resources/public/images/example.png)

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
parts of Smeagol into another open source project which uses a less restrictive
license, please contact me; I'm open to dual licensing it.

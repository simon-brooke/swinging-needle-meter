// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('swinging_needle_meter.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27939__delegate = function (x){
if(cljs.core.truth_(swinging_needle_meter.core.mount_root)){
return cljs.core.apply.call(null,swinging_needle_meter.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'swinging-needle-meter.core/mount-root' is missing");
}
};
var G__27939 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27940__i = 0, G__27940__a = new Array(arguments.length -  0);
while (G__27940__i < G__27940__a.length) {G__27940__a[G__27940__i] = arguments[G__27940__i + 0]; ++G__27940__i;}
  x = new cljs.core.IndexedSeq(G__27940__a,0);
} 
return G__27939__delegate.call(this,x);};
G__27939.cljs$lang$maxFixedArity = 0;
G__27939.cljs$lang$applyTo = (function (arglist__27941){
var x = cljs.core.seq(arglist__27941);
return G__27939__delegate(x);
});
G__27939.cljs$core$IFn$_invoke$arity$variadic = G__27939__delegate;
return G__27939;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1603200848820
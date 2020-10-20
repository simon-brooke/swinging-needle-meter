// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26360__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26361__i = 0, G__26361__a = new Array(arguments.length -  0);
while (G__26361__i < G__26361__a.length) {G__26361__a[G__26361__i] = arguments[G__26361__i + 0]; ++G__26361__i;}
  args = new cljs.core.IndexedSeq(G__26361__a,0);
} 
return G__26360__delegate.call(this,args);};
G__26360.cljs$lang$maxFixedArity = 0;
G__26360.cljs$lang$applyTo = (function (arglist__26362){
var args = cljs.core.seq(arglist__26362);
return G__26360__delegate(args);
});
G__26360.cljs$core$IFn$_invoke$arity$variadic = G__26360__delegate;
return G__26360;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26363__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26364__i = 0, G__26364__a = new Array(arguments.length -  0);
while (G__26364__i < G__26364__a.length) {G__26364__a[G__26364__i] = arguments[G__26364__i + 0]; ++G__26364__i;}
  args = new cljs.core.IndexedSeq(G__26364__a,0);
} 
return G__26363__delegate.call(this,args);};
G__26363.cljs$lang$maxFixedArity = 0;
G__26363.cljs$lang$applyTo = (function (arglist__26365){
var args = cljs.core.seq(arglist__26365);
return G__26363__delegate(args);
});
G__26363.cljs$core$IFn$_invoke$arity$variadic = G__26363__delegate;
return G__26363;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1603199186726
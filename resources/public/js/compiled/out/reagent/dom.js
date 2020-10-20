// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25130__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26906 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26906){
return (function (){
var _STAR_always_update_STAR_26907 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26907;
}});})(_STAR_always_update_STAR_26906))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26906;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26908 = [];
var len__26205__auto___26911 = arguments.length;
var i__26206__auto___26912 = (0);
while(true){
if((i__26206__auto___26912 < len__26205__auto___26911)){
args26908.push((arguments[i__26206__auto___26912]));

var G__26913 = (i__26206__auto___26912 + (1));
i__26206__auto___26912 = G__26913;
continue;
} else {
}
break;
}

var G__26910 = args26908.length;
switch (G__26910) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26908.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26919_26923 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26920_26924 = null;
var count__26921_26925 = (0);
var i__26922_26926 = (0);
while(true){
if((i__26922_26926 < count__26921_26925)){
var v_26927 = cljs.core._nth.call(null,chunk__26920_26924,i__26922_26926);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26927);

var G__26928 = seq__26919_26923;
var G__26929 = chunk__26920_26924;
var G__26930 = count__26921_26925;
var G__26931 = (i__26922_26926 + (1));
seq__26919_26923 = G__26928;
chunk__26920_26924 = G__26929;
count__26921_26925 = G__26930;
i__26922_26926 = G__26931;
continue;
} else {
var temp__4657__auto___26932 = cljs.core.seq.call(null,seq__26919_26923);
if(temp__4657__auto___26932){
var seq__26919_26933__$1 = temp__4657__auto___26932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26919_26933__$1)){
var c__25941__auto___26934 = cljs.core.chunk_first.call(null,seq__26919_26933__$1);
var G__26935 = cljs.core.chunk_rest.call(null,seq__26919_26933__$1);
var G__26936 = c__25941__auto___26934;
var G__26937 = cljs.core.count.call(null,c__25941__auto___26934);
var G__26938 = (0);
seq__26919_26923 = G__26935;
chunk__26920_26924 = G__26936;
count__26921_26925 = G__26937;
i__26922_26926 = G__26938;
continue;
} else {
var v_26939 = cljs.core.first.call(null,seq__26919_26933__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26939);

var G__26940 = cljs.core.next.call(null,seq__26919_26933__$1);
var G__26941 = null;
var G__26942 = (0);
var G__26943 = (0);
seq__26919_26923 = G__26940;
chunk__26920_26924 = G__26941;
count__26921_26925 = G__26942;
i__26922_26926 = G__26943;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1603199188899
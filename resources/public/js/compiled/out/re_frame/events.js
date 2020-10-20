// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__32773_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__32773_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___32774 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___32774)){
var not_i_32775 = temp__4657__auto___32774;
if(cljs.core.fn_QMARK_.call(null,not_i_32775)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_32775);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_32775);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_32790 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_32791 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32708__auto___32804 = re_frame.interop.now.call(null);
var duration__32709__auto___32805 = (end__32708__auto___32804 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__32792_32806 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__32793_32807 = null;
var count__32794_32808 = (0);
var i__32795_32809 = (0);
while(true){
if((i__32795_32809 < count__32794_32808)){
var vec__32796_32810 = cljs.core._nth.call(null,chunk__32793_32807,i__32795_32809);
var k__32710__auto___32811 = cljs.core.nth.call(null,vec__32796_32810,(0),null);
var cb__32711__auto___32812 = cljs.core.nth.call(null,vec__32796_32810,(1),null);
try{cb__32711__auto___32812.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32709__auto___32805,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32799){if((e32799 instanceof java.lang.Exception)){
var e__32712__auto___32813 = e32799;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32710__auto___32811,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32712__auto___32813);
} else {
throw e32799;

}
}
var G__32814 = seq__32792_32806;
var G__32815 = chunk__32793_32807;
var G__32816 = count__32794_32808;
var G__32817 = (i__32795_32809 + (1));
seq__32792_32806 = G__32814;
chunk__32793_32807 = G__32815;
count__32794_32808 = G__32816;
i__32795_32809 = G__32817;
continue;
} else {
var temp__4657__auto___32818 = cljs.core.seq.call(null,seq__32792_32806);
if(temp__4657__auto___32818){
var seq__32792_32819__$1 = temp__4657__auto___32818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32792_32819__$1)){
var c__25941__auto___32820 = cljs.core.chunk_first.call(null,seq__32792_32819__$1);
var G__32821 = cljs.core.chunk_rest.call(null,seq__32792_32819__$1);
var G__32822 = c__25941__auto___32820;
var G__32823 = cljs.core.count.call(null,c__25941__auto___32820);
var G__32824 = (0);
seq__32792_32806 = G__32821;
chunk__32793_32807 = G__32822;
count__32794_32808 = G__32823;
i__32795_32809 = G__32824;
continue;
} else {
var vec__32800_32825 = cljs.core.first.call(null,seq__32792_32819__$1);
var k__32710__auto___32826 = cljs.core.nth.call(null,vec__32800_32825,(0),null);
var cb__32711__auto___32827 = cljs.core.nth.call(null,vec__32800_32825,(1),null);
try{cb__32711__auto___32827.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32709__auto___32805,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32803){if((e32803 instanceof java.lang.Exception)){
var e__32712__auto___32828 = e32803;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32710__auto___32826,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32712__auto___32828);
} else {
throw e32803;

}
}
var G__32829 = cljs.core.next.call(null,seq__32792_32819__$1);
var G__32830 = null;
var G__32831 = (0);
var G__32832 = (0);
seq__32792_32806 = G__32829;
chunk__32793_32807 = G__32830;
count__32794_32808 = G__32831;
i__32795_32809 = G__32832;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32791;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_32790;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1603199197772
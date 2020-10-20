// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__32917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32918 = null;
var count__32919 = (0);
var i__32920 = (0);
while(true){
if((i__32920 < count__32919)){
var vec__32921 = cljs.core._nth.call(null,chunk__32918,i__32920);
var effect_k = cljs.core.nth.call(null,vec__32921,(0),null);
var value = cljs.core.nth.call(null,vec__32921,(1),null);
var temp__4655__auto___32927 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___32927)){
var effect_fn_32928 = temp__4655__auto___32927;
effect_fn_32928.call(null,value);
} else {
}

var G__32929 = seq__32917;
var G__32930 = chunk__32918;
var G__32931 = count__32919;
var G__32932 = (i__32920 + (1));
seq__32917 = G__32929;
chunk__32918 = G__32930;
count__32919 = G__32931;
i__32920 = G__32932;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32917);
if(temp__4657__auto__){
var seq__32917__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32917__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__32917__$1);
var G__32933 = cljs.core.chunk_rest.call(null,seq__32917__$1);
var G__32934 = c__25941__auto__;
var G__32935 = cljs.core.count.call(null,c__25941__auto__);
var G__32936 = (0);
seq__32917 = G__32933;
chunk__32918 = G__32934;
count__32919 = G__32935;
i__32920 = G__32936;
continue;
} else {
var vec__32924 = cljs.core.first.call(null,seq__32917__$1);
var effect_k = cljs.core.nth.call(null,vec__32924,(0),null);
var value = cljs.core.nth.call(null,vec__32924,(1),null);
var temp__4655__auto___32937 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___32937)){
var effect_fn_32938 = temp__4655__auto___32937;
effect_fn_32938.call(null,value);
} else {
}

var G__32939 = cljs.core.next.call(null,seq__32917__$1);
var G__32940 = null;
var G__32941 = (0);
var G__32942 = (0);
seq__32917 = G__32939;
chunk__32918 = G__32940;
count__32919 = G__32941;
i__32920 = G__32942;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__32943 = cljs.core.seq.call(null,value);
var chunk__32944 = null;
var count__32945 = (0);
var i__32946 = (0);
while(true){
if((i__32946 < count__32945)){
var map__32947 = cljs.core._nth.call(null,chunk__32944,i__32946);
var map__32947__$1 = ((((!((map__32947 == null)))?((((map__32947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32947):map__32947);
var effect = map__32947__$1;
var ms = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32943,chunk__32944,count__32945,i__32946,map__32947,map__32947__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32943,chunk__32944,count__32945,i__32946,map__32947,map__32947__$1,effect,ms,dispatch))
,ms);
}

var G__32951 = seq__32943;
var G__32952 = chunk__32944;
var G__32953 = count__32945;
var G__32954 = (i__32946 + (1));
seq__32943 = G__32951;
chunk__32944 = G__32952;
count__32945 = G__32953;
i__32946 = G__32954;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32943);
if(temp__4657__auto__){
var seq__32943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32943__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__32943__$1);
var G__32955 = cljs.core.chunk_rest.call(null,seq__32943__$1);
var G__32956 = c__25941__auto__;
var G__32957 = cljs.core.count.call(null,c__25941__auto__);
var G__32958 = (0);
seq__32943 = G__32955;
chunk__32944 = G__32956;
count__32945 = G__32957;
i__32946 = G__32958;
continue;
} else {
var map__32949 = cljs.core.first.call(null,seq__32943__$1);
var map__32949__$1 = ((((!((map__32949 == null)))?((((map__32949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);
var effect = map__32949__$1;
var ms = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32943,chunk__32944,count__32945,i__32946,map__32949,map__32949__$1,effect,ms,dispatch,seq__32943__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32943,chunk__32944,count__32945,i__32946,map__32949,map__32949__$1,effect,ms,dispatch,seq__32943__$1,temp__4657__auto__))
,ms);
}

var G__32959 = cljs.core.next.call(null,seq__32943__$1);
var G__32960 = null;
var G__32961 = (0);
var G__32962 = (0);
seq__32943 = G__32959;
chunk__32944 = G__32960;
count__32945 = G__32961;
i__32946 = G__32962;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__32963 = cljs.core.seq.call(null,value);
var chunk__32964 = null;
var count__32965 = (0);
var i__32966 = (0);
while(true){
if((i__32966 < count__32965)){
var event = cljs.core._nth.call(null,chunk__32964,i__32966);
re_frame.router.dispatch.call(null,event);

var G__32967 = seq__32963;
var G__32968 = chunk__32964;
var G__32969 = count__32965;
var G__32970 = (i__32966 + (1));
seq__32963 = G__32967;
chunk__32964 = G__32968;
count__32965 = G__32969;
i__32966 = G__32970;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32963);
if(temp__4657__auto__){
var seq__32963__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32963__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__32963__$1);
var G__32971 = cljs.core.chunk_rest.call(null,seq__32963__$1);
var G__32972 = c__25941__auto__;
var G__32973 = cljs.core.count.call(null,c__25941__auto__);
var G__32974 = (0);
seq__32963 = G__32971;
chunk__32964 = G__32972;
count__32965 = G__32973;
i__32966 = G__32974;
continue;
} else {
var event = cljs.core.first.call(null,seq__32963__$1);
re_frame.router.dispatch.call(null,event);

var G__32975 = cljs.core.next.call(null,seq__32963__$1);
var G__32976 = null;
var G__32977 = (0);
var G__32978 = (0);
seq__32963 = G__32975;
chunk__32964 = G__32976;
count__32965 = G__32977;
i__32966 = G__32978;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__32979 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__32980 = null;
var count__32981 = (0);
var i__32982 = (0);
while(true){
if((i__32982 < count__32981)){
var event = cljs.core._nth.call(null,chunk__32980,i__32982);
clear_event.call(null,event);

var G__32983 = seq__32979;
var G__32984 = chunk__32980;
var G__32985 = count__32981;
var G__32986 = (i__32982 + (1));
seq__32979 = G__32983;
chunk__32980 = G__32984;
count__32981 = G__32985;
i__32982 = G__32986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32979);
if(temp__4657__auto__){
var seq__32979__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32979__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__32979__$1);
var G__32987 = cljs.core.chunk_rest.call(null,seq__32979__$1);
var G__32988 = c__25941__auto__;
var G__32989 = cljs.core.count.call(null,c__25941__auto__);
var G__32990 = (0);
seq__32979 = G__32987;
chunk__32980 = G__32988;
count__32981 = G__32989;
i__32982 = G__32990;
continue;
} else {
var event = cljs.core.first.call(null,seq__32979__$1);
clear_event.call(null,event);

var G__32991 = cljs.core.next.call(null,seq__32979__$1);
var G__32992 = null;
var G__32993 = (0);
var G__32994 = (0);
seq__32979 = G__32991;
chunk__32980 = G__32992;
count__32981 = G__32993;
i__32982 = G__32994;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1603199198148
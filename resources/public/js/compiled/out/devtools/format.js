// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25793__auto__ = (((value == null))?null:value);
var m__25794__auto__ = (devtools.format._header[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,value);
} else {
var m__25794__auto____$1 = (devtools.format._header["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25793__auto__ = (((value == null))?null:value);
var m__25794__auto__ = (devtools.format._has_body[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,value);
} else {
var m__25794__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25793__auto__ = (((value == null))?null:value);
var m__25794__auto__ = (devtools.format._body[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,value);
} else {
var m__25794__auto____$1 = (devtools.format._body["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__41062__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__41062__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__41062__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__41062__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__41061__auto__ = temp__4657__auto____$2;
return goog.object.get(o__41061__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41315 = arguments.length;
var i__26206__auto___41316 = (0);
while(true){
if((i__26206__auto___41316 < len__26205__auto___41315)){
args__26212__auto__.push((arguments[i__26206__auto___41316]));

var G__41317 = (i__26206__auto___41316 + (1));
i__26206__auto___41316 = G__41317;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq41314){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41314));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41319 = arguments.length;
var i__26206__auto___41320 = (0);
while(true){
if((i__26206__auto___41320 < len__26205__auto___41319)){
args__26212__auto__.push((arguments[i__26206__auto___41320]));

var G__41321 = (i__26206__auto___41320 + (1));
i__26206__auto___41320 = G__41321;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq41318){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41318));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41323 = arguments.length;
var i__26206__auto___41324 = (0);
while(true){
if((i__26206__auto___41324 < len__26205__auto___41323)){
args__26212__auto__.push((arguments[i__26206__auto___41324]));

var G__41325 = (i__26206__auto___41324 + (1));
i__26206__auto___41324 = G__41325;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq41322){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41322));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41327 = arguments.length;
var i__26206__auto___41328 = (0);
while(true){
if((i__26206__auto___41328 < len__26205__auto___41327)){
args__26212__auto__.push((arguments[i__26206__auto___41328]));

var G__41329 = (i__26206__auto___41328 + (1));
i__26206__auto___41328 = G__41329;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41326){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41326));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41331 = arguments.length;
var i__26206__auto___41332 = (0);
while(true){
if((i__26206__auto___41332 < len__26205__auto___41331)){
args__26212__auto__.push((arguments[i__26206__auto___41332]));

var G__41333 = (i__26206__auto___41332 + (1));
i__26206__auto___41332 = G__41333;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq41330){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41330));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41335 = arguments.length;
var i__26206__auto___41336 = (0);
while(true){
if((i__26206__auto___41336 < len__26205__auto___41335)){
args__26212__auto__.push((arguments[i__26206__auto___41336]));

var G__41337 = (i__26206__auto___41336 + (1));
i__26206__auto___41336 = G__41337;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq41334){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41334));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41339 = arguments.length;
var i__26206__auto___41340 = (0);
while(true){
if((i__26206__auto___41340 < len__26205__auto___41339)){
args__26212__auto__.push((arguments[i__26206__auto___41340]));

var G__41341 = (i__26206__auto___41340 + (1));
i__26206__auto___41340 = G__41341;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq41338){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41338));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41349 = arguments.length;
var i__26206__auto___41350 = (0);
while(true){
if((i__26206__auto___41350 < len__26205__auto___41349)){
args__26212__auto__.push((arguments[i__26206__auto___41350]));

var G__41351 = (i__26206__auto___41350 + (1));
i__26206__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41345){
var vec__41346 = p__41345;
var state_override = cljs.core.nth.call(null,vec__41346,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41346,state_override){
return (function (p1__41342_SHARP_){
return cljs.core.merge.call(null,p1__41342_SHARP_,state_override);
});})(vec__41346,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq41343){
var G__41344 = cljs.core.first.call(null,seq41343);
var seq41343__$1 = cljs.core.next.call(null,seq41343);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__41344,seq41343__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41353 = arguments.length;
var i__26206__auto___41354 = (0);
while(true){
if((i__26206__auto___41354 < len__26205__auto___41353)){
args__26212__auto__.push((arguments[i__26206__auto___41354]));

var G__41355 = (i__26206__auto___41354 + (1));
i__26206__auto___41354 = G__41355;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq41352){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41352));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41358 = arguments.length;
var i__26206__auto___41359 = (0);
while(true){
if((i__26206__auto___41359 < len__26205__auto___41358)){
args__26212__auto__.push((arguments[i__26206__auto___41359]));

var G__41360 = (i__26206__auto___41359 + (1));
i__26206__auto___41359 = G__41360;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41356){
var G__41357 = cljs.core.first.call(null,seq41356);
var seq41356__$1 = cljs.core.next.call(null,seq41356);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__41357,seq41356__$1);
});


//# sourceMappingURL=format.js.map?rel=1603199212051
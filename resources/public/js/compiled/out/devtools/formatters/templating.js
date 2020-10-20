// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41457_41458 = value;
x41457_41458.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41462_41463 = value;
x41462_41463.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41467_41468 = value;
x41467_41468.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25118__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25118__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25118__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41476 = arguments.length;
var i__26206__auto___41477 = (0);
while(true){
if((i__26206__auto___41477 < len__26205__auto___41476)){
args__26212__auto__.push((arguments[i__26206__auto___41477]));

var G__41478 = (i__26206__auto___41477 + (1));
i__26206__auto___41477 = G__41478;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41472_41479 = cljs.core.seq.call(null,items);
var chunk__41473_41480 = null;
var count__41474_41481 = (0);
var i__41475_41482 = (0);
while(true){
if((i__41475_41482 < count__41474_41481)){
var item_41483 = cljs.core._nth.call(null,chunk__41473_41480,i__41475_41482);
if(cljs.core.some_QMARK_.call(null,item_41483)){
if(cljs.core.coll_QMARK_.call(null,item_41483)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41483)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41483));
}
} else {
}

var G__41484 = seq__41472_41479;
var G__41485 = chunk__41473_41480;
var G__41486 = count__41474_41481;
var G__41487 = (i__41475_41482 + (1));
seq__41472_41479 = G__41484;
chunk__41473_41480 = G__41485;
count__41474_41481 = G__41486;
i__41475_41482 = G__41487;
continue;
} else {
var temp__4657__auto___41488 = cljs.core.seq.call(null,seq__41472_41479);
if(temp__4657__auto___41488){
var seq__41472_41489__$1 = temp__4657__auto___41488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41472_41489__$1)){
var c__25941__auto___41490 = cljs.core.chunk_first.call(null,seq__41472_41489__$1);
var G__41491 = cljs.core.chunk_rest.call(null,seq__41472_41489__$1);
var G__41492 = c__25941__auto___41490;
var G__41493 = cljs.core.count.call(null,c__25941__auto___41490);
var G__41494 = (0);
seq__41472_41479 = G__41491;
chunk__41473_41480 = G__41492;
count__41474_41481 = G__41493;
i__41475_41482 = G__41494;
continue;
} else {
var item_41495 = cljs.core.first.call(null,seq__41472_41489__$1);
if(cljs.core.some_QMARK_.call(null,item_41495)){
if(cljs.core.coll_QMARK_.call(null,item_41495)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41495)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41495));
}
} else {
}

var G__41496 = cljs.core.next.call(null,seq__41472_41489__$1);
var G__41497 = null;
var G__41498 = (0);
var G__41499 = (0);
seq__41472_41479 = G__41496;
chunk__41473_41480 = G__41497;
count__41474_41481 = G__41498;
i__41475_41482 = G__41499;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41471){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41471));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41507 = arguments.length;
var i__26206__auto___41508 = (0);
while(true){
if((i__26206__auto___41508 < len__26205__auto___41507)){
args__26212__auto__.push((arguments[i__26206__auto___41508]));

var G__41509 = (i__26206__auto___41508 + (1));
i__26206__auto___41508 = G__41509;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((2) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26213__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41503_41510 = cljs.core.seq.call(null,children);
var chunk__41504_41511 = null;
var count__41505_41512 = (0);
var i__41506_41513 = (0);
while(true){
if((i__41506_41513 < count__41505_41512)){
var child_41514 = cljs.core._nth.call(null,chunk__41504_41511,i__41506_41513);
if(cljs.core.some_QMARK_.call(null,child_41514)){
if(cljs.core.coll_QMARK_.call(null,child_41514)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41514))));
} else {
var temp__4655__auto___41515 = devtools.formatters.helpers.pref.call(null,child_41514);
if(cljs.core.truth_(temp__4655__auto___41515)){
var child_value_41516 = temp__4655__auto___41515;
template.push(child_value_41516);
} else {
}
}
} else {
}

var G__41517 = seq__41503_41510;
var G__41518 = chunk__41504_41511;
var G__41519 = count__41505_41512;
var G__41520 = (i__41506_41513 + (1));
seq__41503_41510 = G__41517;
chunk__41504_41511 = G__41518;
count__41505_41512 = G__41519;
i__41506_41513 = G__41520;
continue;
} else {
var temp__4657__auto___41521 = cljs.core.seq.call(null,seq__41503_41510);
if(temp__4657__auto___41521){
var seq__41503_41522__$1 = temp__4657__auto___41521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41503_41522__$1)){
var c__25941__auto___41523 = cljs.core.chunk_first.call(null,seq__41503_41522__$1);
var G__41524 = cljs.core.chunk_rest.call(null,seq__41503_41522__$1);
var G__41525 = c__25941__auto___41523;
var G__41526 = cljs.core.count.call(null,c__25941__auto___41523);
var G__41527 = (0);
seq__41503_41510 = G__41524;
chunk__41504_41511 = G__41525;
count__41505_41512 = G__41526;
i__41506_41513 = G__41527;
continue;
} else {
var child_41528 = cljs.core.first.call(null,seq__41503_41522__$1);
if(cljs.core.some_QMARK_.call(null,child_41528)){
if(cljs.core.coll_QMARK_.call(null,child_41528)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41528))));
} else {
var temp__4655__auto___41529 = devtools.formatters.helpers.pref.call(null,child_41528);
if(cljs.core.truth_(temp__4655__auto___41529)){
var child_value_41530 = temp__4655__auto___41529;
template.push(child_value_41530);
} else {
}
}
} else {
}

var G__41531 = cljs.core.next.call(null,seq__41503_41522__$1);
var G__41532 = null;
var G__41533 = (0);
var G__41534 = (0);
seq__41503_41510 = G__41531;
chunk__41504_41511 = G__41532;
count__41505_41512 = G__41533;
i__41506_41513 = G__41534;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41500){
var G__41501 = cljs.core.first.call(null,seq41500);
var seq41500__$1 = cljs.core.next.call(null,seq41500);
var G__41502 = cljs.core.first.call(null,seq41500__$1);
var seq41500__$2 = cljs.core.next.call(null,seq41500__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41501,G__41502,seq41500__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41537 = arguments.length;
var i__26206__auto___41538 = (0);
while(true){
if((i__26206__auto___41538 < len__26205__auto___41537)){
args__26212__auto__.push((arguments[i__26206__auto___41538]));

var G__41539 = (i__26206__auto___41538 + (1));
i__26206__auto___41538 = G__41539;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41535){
var G__41536 = cljs.core.first.call(null,seq41535);
var seq41535__$1 = cljs.core.next.call(null,seq41535);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41536,seq41535__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41542 = arguments.length;
var i__26206__auto___41543 = (0);
while(true){
if((i__26206__auto___41543 < len__26205__auto___41542)){
args__26212__auto__.push((arguments[i__26206__auto___41543]));

var G__41544 = (i__26206__auto___41543 + (1));
i__26206__auto___41543 = G__41544;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41540){
var G__41541 = cljs.core.first.call(null,seq41540);
var seq41540__$1 = cljs.core.next.call(null,seq41540);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41541,seq41540__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args41545 = [];
var len__26205__auto___41550 = arguments.length;
var i__26206__auto___41551 = (0);
while(true){
if((i__26206__auto___41551 < len__26205__auto___41550)){
args41545.push((arguments[i__26206__auto___41551]));

var G__41552 = (i__26206__auto___41551 + (1));
i__26206__auto___41551 = G__41552;
continue;
} else {
}
break;
}

var G__41547 = args41545.length;
switch (G__41547) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41545.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41549 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25130__auto__ = start_index;
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return (0);
}
})()};
return obj41549;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26212__auto__ = [];
var len__26205__auto___41560 = arguments.length;
var i__26206__auto___41561 = (0);
while(true){
if((i__26206__auto___41561 < len__26205__auto___41560)){
args__26212__auto__.push((arguments[i__26206__auto___41561]));

var G__41562 = (i__26206__auto___41561 + (1));
i__26206__auto___41561 = G__41562;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41556){
var vec__41557 = p__41556;
var state_override_fn = cljs.core.nth.call(null,vec__41557,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41554){
var G__41555 = cljs.core.first.call(null,seq41554);
var seq41554__$1 = cljs.core.next.call(null,seq41554);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41555,seq41554__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26116__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41566_41569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41567_41570 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41566_41569,_STAR_print_fn_STAR_41567_41570,sb__26116__auto__){
return (function (x__26117__auto__){
return sb__26116__auto__.append(x__26117__auto__);
});})(_STAR_print_newline_STAR_41566_41569,_STAR_print_fn_STAR_41567_41570,sb__26116__auto__))
;

try{var _STAR_print_level_STAR_41568_41571 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41568_41571;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41567_41570;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41566_41569;
}
return [cljs.core.str(sb__26116__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41573 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41573;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41575 = name;
switch (G__41575) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41580 = tag;
var html_tag = cljs.core.nth.call(null,vec__41580,(0),null);
var style = cljs.core.nth.call(null,vec__41580,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41584 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41584;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41587 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41588 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41588;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41587;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41589 = initial_value;
var G__41590 = value.call(null);
initial_value = G__41589;
value = G__41590;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41591 = initial_value;
var G__41592 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41591;
value = G__41592;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41593 = initial_value;
var G__41594 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41593;
value = G__41594;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1603199212660
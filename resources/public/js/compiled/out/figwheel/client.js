// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38088 = [];
var len__26205__auto___38091 = arguments.length;
var i__26206__auto___38092 = (0);
while(true){
if((i__26206__auto___38092 < len__26205__auto___38091)){
args38088.push((arguments[i__26206__auto___38092]));

var G__38093 = (i__26206__auto___38092 + (1));
i__26206__auto___38092 = G__38093;
continue;
} else {
}
break;
}

var G__38090 = args38088.length;
switch (G__38090) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38088.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26212__auto__ = [];
var len__26205__auto___38096 = arguments.length;
var i__26206__auto___38097 = (0);
while(true){
if((i__26206__auto___38097 < len__26205__auto___38096)){
args__26212__auto__.push((arguments[i__26206__auto___38097]));

var G__38098 = (i__26206__auto___38097 + (1));
i__26206__auto___38097 = G__38098;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38095){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38095));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26212__auto__ = [];
var len__26205__auto___38100 = arguments.length;
var i__26206__auto___38101 = (0);
while(true){
if((i__26206__auto___38101 < len__26205__auto___38100)){
args__26212__auto__.push((arguments[i__26206__auto___38101]));

var G__38102 = (i__26206__auto___38101 + (1));
i__26206__auto___38101 = G__38102;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38099){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38099));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38103){
var map__38106 = p__38103;
var map__38106__$1 = ((((!((map__38106 == null)))?((((map__38106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38106):map__38106);
var message = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25130__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25118__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25118__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25118__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28364__auto___38268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___38268,ch){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___38268,ch){
return (function (state_38237){
var state_val_38238 = (state_38237[(1)]);
if((state_val_38238 === (7))){
var inst_38233 = (state_38237[(2)]);
var state_38237__$1 = state_38237;
var statearr_38239_38269 = state_38237__$1;
(statearr_38239_38269[(2)] = inst_38233);

(statearr_38239_38269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (1))){
var state_38237__$1 = state_38237;
var statearr_38240_38270 = state_38237__$1;
(statearr_38240_38270[(2)] = null);

(statearr_38240_38270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (4))){
var inst_38190 = (state_38237[(7)]);
var inst_38190__$1 = (state_38237[(2)]);
var state_38237__$1 = (function (){var statearr_38241 = state_38237;
(statearr_38241[(7)] = inst_38190__$1);

return statearr_38241;
})();
if(cljs.core.truth_(inst_38190__$1)){
var statearr_38242_38271 = state_38237__$1;
(statearr_38242_38271[(1)] = (5));

} else {
var statearr_38243_38272 = state_38237__$1;
(statearr_38243_38272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (15))){
var inst_38197 = (state_38237[(8)]);
var inst_38212 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38197);
var inst_38213 = cljs.core.first.call(null,inst_38212);
var inst_38214 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38213);
var inst_38215 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38214)].join('');
var inst_38216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38215);
var state_38237__$1 = state_38237;
var statearr_38244_38273 = state_38237__$1;
(statearr_38244_38273[(2)] = inst_38216);

(statearr_38244_38273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (13))){
var inst_38221 = (state_38237[(2)]);
var state_38237__$1 = state_38237;
var statearr_38245_38274 = state_38237__$1;
(statearr_38245_38274[(2)] = inst_38221);

(statearr_38245_38274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (6))){
var state_38237__$1 = state_38237;
var statearr_38246_38275 = state_38237__$1;
(statearr_38246_38275[(2)] = null);

(statearr_38246_38275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (17))){
var inst_38219 = (state_38237[(2)]);
var state_38237__$1 = state_38237;
var statearr_38247_38276 = state_38237__$1;
(statearr_38247_38276[(2)] = inst_38219);

(statearr_38247_38276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (3))){
var inst_38235 = (state_38237[(2)]);
var state_38237__$1 = state_38237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38237__$1,inst_38235);
} else {
if((state_val_38238 === (12))){
var inst_38196 = (state_38237[(9)]);
var inst_38210 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38196,opts);
var state_38237__$1 = state_38237;
if(cljs.core.truth_(inst_38210)){
var statearr_38248_38277 = state_38237__$1;
(statearr_38248_38277[(1)] = (15));

} else {
var statearr_38249_38278 = state_38237__$1;
(statearr_38249_38278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (2))){
var state_38237__$1 = state_38237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38237__$1,(4),ch);
} else {
if((state_val_38238 === (11))){
var inst_38197 = (state_38237[(8)]);
var inst_38202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38203 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38197);
var inst_38204 = cljs.core.async.timeout.call(null,(1000));
var inst_38205 = [inst_38203,inst_38204];
var inst_38206 = (new cljs.core.PersistentVector(null,2,(5),inst_38202,inst_38205,null));
var state_38237__$1 = state_38237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38237__$1,(14),inst_38206);
} else {
if((state_val_38238 === (9))){
var inst_38197 = (state_38237[(8)]);
var inst_38223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38224 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38197);
var inst_38225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38224);
var inst_38226 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38225)].join('');
var inst_38227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38226);
var state_38237__$1 = (function (){var statearr_38250 = state_38237;
(statearr_38250[(10)] = inst_38223);

return statearr_38250;
})();
var statearr_38251_38279 = state_38237__$1;
(statearr_38251_38279[(2)] = inst_38227);

(statearr_38251_38279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (5))){
var inst_38190 = (state_38237[(7)]);
var inst_38192 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38193 = (new cljs.core.PersistentArrayMap(null,2,inst_38192,null));
var inst_38194 = (new cljs.core.PersistentHashSet(null,inst_38193,null));
var inst_38195 = figwheel.client.focus_msgs.call(null,inst_38194,inst_38190);
var inst_38196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38195);
var inst_38197 = cljs.core.first.call(null,inst_38195);
var inst_38198 = figwheel.client.autoload_QMARK_.call(null);
var state_38237__$1 = (function (){var statearr_38252 = state_38237;
(statearr_38252[(8)] = inst_38197);

(statearr_38252[(9)] = inst_38196);

return statearr_38252;
})();
if(cljs.core.truth_(inst_38198)){
var statearr_38253_38280 = state_38237__$1;
(statearr_38253_38280[(1)] = (8));

} else {
var statearr_38254_38281 = state_38237__$1;
(statearr_38254_38281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (14))){
var inst_38208 = (state_38237[(2)]);
var state_38237__$1 = state_38237;
var statearr_38255_38282 = state_38237__$1;
(statearr_38255_38282[(2)] = inst_38208);

(statearr_38255_38282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (16))){
var state_38237__$1 = state_38237;
var statearr_38256_38283 = state_38237__$1;
(statearr_38256_38283[(2)] = null);

(statearr_38256_38283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (10))){
var inst_38229 = (state_38237[(2)]);
var state_38237__$1 = (function (){var statearr_38257 = state_38237;
(statearr_38257[(11)] = inst_38229);

return statearr_38257;
})();
var statearr_38258_38284 = state_38237__$1;
(statearr_38258_38284[(2)] = null);

(statearr_38258_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38238 === (8))){
var inst_38196 = (state_38237[(9)]);
var inst_38200 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38196,opts);
var state_38237__$1 = state_38237;
if(cljs.core.truth_(inst_38200)){
var statearr_38259_38285 = state_38237__$1;
(statearr_38259_38285[(1)] = (11));

} else {
var statearr_38260_38286 = state_38237__$1;
(statearr_38260_38286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28364__auto___38268,ch))
;
return ((function (switch__28252__auto__,c__28364__auto___38268,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____0 = (function (){
var statearr_38264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38264[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__);

(statearr_38264[(1)] = (1));

return statearr_38264;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____1 = (function (state_38237){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_38237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e38265){if((e38265 instanceof Object)){
var ex__28256__auto__ = e38265;
var statearr_38266_38287 = state_38237;
(statearr_38266_38287[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38288 = state_38237;
state_38237 = G__38288;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__ = function(state_38237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____1.call(this,state_38237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28253__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___38268,ch))
})();
var state__28366__auto__ = (function (){var statearr_38267 = f__28365__auto__.call(null);
(statearr_38267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___38268);

return statearr_38267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___38268,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38289_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38289_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38292 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38292){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38291){if((e38291 instanceof Error)){
var e = e38291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38292], null));
} else {
var e = e38291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38292))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38293){
var map__38302 = p__38293;
var map__38302__$1 = ((((!((map__38302 == null)))?((((map__38302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38302):map__38302);
var opts = map__38302__$1;
var build_id = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38302,map__38302__$1,opts,build_id){
return (function (p__38304){
var vec__38305 = p__38304;
var seq__38306 = cljs.core.seq.call(null,vec__38305);
var first__38307 = cljs.core.first.call(null,seq__38306);
var seq__38306__$1 = cljs.core.next.call(null,seq__38306);
var map__38308 = first__38307;
var map__38308__$1 = ((((!((map__38308 == null)))?((((map__38308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38308):map__38308);
var msg = map__38308__$1;
var msg_name = cljs.core.get.call(null,map__38308__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38306__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38305,seq__38306,first__38307,seq__38306__$1,map__38308,map__38308__$1,msg,msg_name,_,map__38302,map__38302__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38305,seq__38306,first__38307,seq__38306__$1,map__38308,map__38308__$1,msg,msg_name,_,map__38302,map__38302__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38302,map__38302__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38316){
var vec__38317 = p__38316;
var seq__38318 = cljs.core.seq.call(null,vec__38317);
var first__38319 = cljs.core.first.call(null,seq__38318);
var seq__38318__$1 = cljs.core.next.call(null,seq__38318);
var map__38320 = first__38319;
var map__38320__$1 = ((((!((map__38320 == null)))?((((map__38320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38320):map__38320);
var msg = map__38320__$1;
var msg_name = cljs.core.get.call(null,map__38320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38318__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38322){
var map__38334 = p__38322;
var map__38334__$1 = ((((!((map__38334 == null)))?((((map__38334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38334):map__38334);
var on_compile_warning = cljs.core.get.call(null,map__38334__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38334__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38334,map__38334__$1,on_compile_warning,on_compile_fail){
return (function (p__38336){
var vec__38337 = p__38336;
var seq__38338 = cljs.core.seq.call(null,vec__38337);
var first__38339 = cljs.core.first.call(null,seq__38338);
var seq__38338__$1 = cljs.core.next.call(null,seq__38338);
var map__38340 = first__38339;
var map__38340__$1 = ((((!((map__38340 == null)))?((((map__38340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38340):map__38340);
var msg = map__38340__$1;
var msg_name = cljs.core.get.call(null,map__38340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38338__$1;
var pred__38342 = cljs.core._EQ_;
var expr__38343 = msg_name;
if(cljs.core.truth_(pred__38342.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38343))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38342.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38343))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38334,map__38334__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__,msg_hist,msg_names,msg){
return (function (state_38571){
var state_val_38572 = (state_38571[(1)]);
if((state_val_38572 === (7))){
var inst_38491 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38491)){
var statearr_38573_38623 = state_38571__$1;
(statearr_38573_38623[(1)] = (8));

} else {
var statearr_38574_38624 = state_38571__$1;
(statearr_38574_38624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (20))){
var inst_38565 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38575_38625 = state_38571__$1;
(statearr_38575_38625[(2)] = inst_38565);

(statearr_38575_38625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (27))){
var inst_38561 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38576_38626 = state_38571__$1;
(statearr_38576_38626[(2)] = inst_38561);

(statearr_38576_38626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (1))){
var inst_38484 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38484)){
var statearr_38577_38627 = state_38571__$1;
(statearr_38577_38627[(1)] = (2));

} else {
var statearr_38578_38628 = state_38571__$1;
(statearr_38578_38628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (24))){
var inst_38563 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38579_38629 = state_38571__$1;
(statearr_38579_38629[(2)] = inst_38563);

(statearr_38579_38629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (4))){
var inst_38569 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38571__$1,inst_38569);
} else {
if((state_val_38572 === (15))){
var inst_38567 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38580_38630 = state_38571__$1;
(statearr_38580_38630[(2)] = inst_38567);

(statearr_38580_38630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (21))){
var inst_38520 = (state_38571[(2)]);
var inst_38521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38522 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38521);
var state_38571__$1 = (function (){var statearr_38581 = state_38571;
(statearr_38581[(7)] = inst_38520);

return statearr_38581;
})();
var statearr_38582_38631 = state_38571__$1;
(statearr_38582_38631[(2)] = inst_38522);

(statearr_38582_38631[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (31))){
var inst_38550 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38550)){
var statearr_38583_38632 = state_38571__$1;
(statearr_38583_38632[(1)] = (34));

} else {
var statearr_38584_38633 = state_38571__$1;
(statearr_38584_38633[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (32))){
var inst_38559 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38585_38634 = state_38571__$1;
(statearr_38585_38634[(2)] = inst_38559);

(statearr_38585_38634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (33))){
var inst_38546 = (state_38571[(2)]);
var inst_38547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38548 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38547);
var state_38571__$1 = (function (){var statearr_38586 = state_38571;
(statearr_38586[(8)] = inst_38546);

return statearr_38586;
})();
var statearr_38587_38635 = state_38571__$1;
(statearr_38587_38635[(2)] = inst_38548);

(statearr_38587_38635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (13))){
var inst_38505 = figwheel.client.heads_up.clear.call(null);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(16),inst_38505);
} else {
if((state_val_38572 === (22))){
var inst_38526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38527 = figwheel.client.heads_up.append_warning_message.call(null,inst_38526);
var state_38571__$1 = state_38571;
var statearr_38588_38636 = state_38571__$1;
(statearr_38588_38636[(2)] = inst_38527);

(statearr_38588_38636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (36))){
var inst_38557 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38589_38637 = state_38571__$1;
(statearr_38589_38637[(2)] = inst_38557);

(statearr_38589_38637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (29))){
var inst_38537 = (state_38571[(2)]);
var inst_38538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38538);
var state_38571__$1 = (function (){var statearr_38590 = state_38571;
(statearr_38590[(9)] = inst_38537);

return statearr_38590;
})();
var statearr_38591_38638 = state_38571__$1;
(statearr_38591_38638[(2)] = inst_38539);

(statearr_38591_38638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (6))){
var inst_38486 = (state_38571[(10)]);
var state_38571__$1 = state_38571;
var statearr_38592_38639 = state_38571__$1;
(statearr_38592_38639[(2)] = inst_38486);

(statearr_38592_38639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (28))){
var inst_38533 = (state_38571[(2)]);
var inst_38534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38535 = figwheel.client.heads_up.display_warning.call(null,inst_38534);
var state_38571__$1 = (function (){var statearr_38593 = state_38571;
(statearr_38593[(11)] = inst_38533);

return statearr_38593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(29),inst_38535);
} else {
if((state_val_38572 === (25))){
var inst_38531 = figwheel.client.heads_up.clear.call(null);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(28),inst_38531);
} else {
if((state_val_38572 === (34))){
var inst_38552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(37),inst_38552);
} else {
if((state_val_38572 === (17))){
var inst_38511 = (state_38571[(2)]);
var inst_38512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38512);
var state_38571__$1 = (function (){var statearr_38594 = state_38571;
(statearr_38594[(12)] = inst_38511);

return statearr_38594;
})();
var statearr_38595_38640 = state_38571__$1;
(statearr_38595_38640[(2)] = inst_38513);

(statearr_38595_38640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (3))){
var inst_38503 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38503)){
var statearr_38596_38641 = state_38571__$1;
(statearr_38596_38641[(1)] = (13));

} else {
var statearr_38597_38642 = state_38571__$1;
(statearr_38597_38642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (12))){
var inst_38499 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38598_38643 = state_38571__$1;
(statearr_38598_38643[(2)] = inst_38499);

(statearr_38598_38643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (2))){
var inst_38486 = (state_38571[(10)]);
var inst_38486__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38571__$1 = (function (){var statearr_38599 = state_38571;
(statearr_38599[(10)] = inst_38486__$1);

return statearr_38599;
})();
if(cljs.core.truth_(inst_38486__$1)){
var statearr_38600_38644 = state_38571__$1;
(statearr_38600_38644[(1)] = (5));

} else {
var statearr_38601_38645 = state_38571__$1;
(statearr_38601_38645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (23))){
var inst_38529 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38529)){
var statearr_38602_38646 = state_38571__$1;
(statearr_38602_38646[(1)] = (25));

} else {
var statearr_38603_38647 = state_38571__$1;
(statearr_38603_38647[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (35))){
var state_38571__$1 = state_38571;
var statearr_38604_38648 = state_38571__$1;
(statearr_38604_38648[(2)] = null);

(statearr_38604_38648[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (19))){
var inst_38524 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38524)){
var statearr_38605_38649 = state_38571__$1;
(statearr_38605_38649[(1)] = (22));

} else {
var statearr_38606_38650 = state_38571__$1;
(statearr_38606_38650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (11))){
var inst_38495 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38607_38651 = state_38571__$1;
(statearr_38607_38651[(2)] = inst_38495);

(statearr_38607_38651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (9))){
var inst_38497 = figwheel.client.heads_up.clear.call(null);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(12),inst_38497);
} else {
if((state_val_38572 === (5))){
var inst_38488 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38571__$1 = state_38571;
var statearr_38608_38652 = state_38571__$1;
(statearr_38608_38652[(2)] = inst_38488);

(statearr_38608_38652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (14))){
var inst_38515 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38515)){
var statearr_38609_38653 = state_38571__$1;
(statearr_38609_38653[(1)] = (18));

} else {
var statearr_38610_38654 = state_38571__$1;
(statearr_38610_38654[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (26))){
var inst_38541 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38541)){
var statearr_38611_38655 = state_38571__$1;
(statearr_38611_38655[(1)] = (30));

} else {
var statearr_38612_38656 = state_38571__$1;
(statearr_38612_38656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (16))){
var inst_38507 = (state_38571[(2)]);
var inst_38508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38509 = figwheel.client.heads_up.display_exception.call(null,inst_38508);
var state_38571__$1 = (function (){var statearr_38613 = state_38571;
(statearr_38613[(13)] = inst_38507);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(17),inst_38509);
} else {
if((state_val_38572 === (30))){
var inst_38543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38544 = figwheel.client.heads_up.display_warning.call(null,inst_38543);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(33),inst_38544);
} else {
if((state_val_38572 === (10))){
var inst_38501 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38614_38657 = state_38571__$1;
(statearr_38614_38657[(2)] = inst_38501);

(statearr_38614_38657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (18))){
var inst_38517 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38518 = figwheel.client.heads_up.display_exception.call(null,inst_38517);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(21),inst_38518);
} else {
if((state_val_38572 === (37))){
var inst_38554 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38615_38658 = state_38571__$1;
(statearr_38615_38658[(2)] = inst_38554);

(statearr_38615_38658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (8))){
var inst_38493 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38571__$1,(11),inst_38493);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28364__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28252__auto__,c__28364__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____0 = (function (){
var statearr_38619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38619[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__);

(statearr_38619[(1)] = (1));

return statearr_38619;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____1 = (function (state_38571){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_38571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e38620){if((e38620 instanceof Object)){
var ex__28256__auto__ = e38620;
var statearr_38621_38659 = state_38571;
(statearr_38621_38659[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38660 = state_38571;
state_38571 = G__38660;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__ = function(state_38571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____1.call(this,state_38571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__,msg_hist,msg_names,msg))
})();
var state__28366__auto__ = (function (){var statearr_38622 = f__28365__auto__.call(null);
(statearr_38622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_38622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__,msg_hist,msg_names,msg))
);

return c__28364__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28364__auto___38723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___38723,ch){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___38723,ch){
return (function (state_38706){
var state_val_38707 = (state_38706[(1)]);
if((state_val_38707 === (1))){
var state_38706__$1 = state_38706;
var statearr_38708_38724 = state_38706__$1;
(statearr_38708_38724[(2)] = null);

(statearr_38708_38724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (2))){
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38706__$1,(4),ch);
} else {
if((state_val_38707 === (3))){
var inst_38704 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38706__$1,inst_38704);
} else {
if((state_val_38707 === (4))){
var inst_38694 = (state_38706[(7)]);
var inst_38694__$1 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38709 = state_38706;
(statearr_38709[(7)] = inst_38694__$1);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38694__$1)){
var statearr_38710_38725 = state_38706__$1;
(statearr_38710_38725[(1)] = (5));

} else {
var statearr_38711_38726 = state_38706__$1;
(statearr_38711_38726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (5))){
var inst_38694 = (state_38706[(7)]);
var inst_38696 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38694);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38706__$1,(8),inst_38696);
} else {
if((state_val_38707 === (6))){
var state_38706__$1 = state_38706;
var statearr_38712_38727 = state_38706__$1;
(statearr_38712_38727[(2)] = null);

(statearr_38712_38727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (7))){
var inst_38702 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
var statearr_38713_38728 = state_38706__$1;
(statearr_38713_38728[(2)] = inst_38702);

(statearr_38713_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (8))){
var inst_38698 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38714 = state_38706;
(statearr_38714[(8)] = inst_38698);

return statearr_38714;
})();
var statearr_38715_38729 = state_38706__$1;
(statearr_38715_38729[(2)] = null);

(statearr_38715_38729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28364__auto___38723,ch))
;
return ((function (switch__28252__auto__,c__28364__auto___38723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28253__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28253__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null,null,null];
(statearr_38719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28253__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var figwheel$client$heads_up_plugin_$_state_machine__28253__auto____1 = (function (state_38706){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_38706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e38720){if((e38720 instanceof Object)){
var ex__28256__auto__ = e38720;
var statearr_38721_38730 = state_38706;
(statearr_38721_38730[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38731 = state_38706;
state_38706 = G__38731;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28253__auto__ = function(state_38706){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28253__auto____1.call(this,state_38706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28253__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28253__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___38723,ch))
})();
var state__28366__auto__ = (function (){var statearr_38722 = f__28365__auto__.call(null);
(statearr_38722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___38723);

return statearr_38722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___38723,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__){
return (function (state_38752){
var state_val_38753 = (state_38752[(1)]);
if((state_val_38753 === (1))){
var inst_38747 = cljs.core.async.timeout.call(null,(3000));
var state_38752__$1 = state_38752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38752__$1,(2),inst_38747);
} else {
if((state_val_38753 === (2))){
var inst_38749 = (state_38752[(2)]);
var inst_38750 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38752__$1 = (function (){var statearr_38754 = state_38752;
(statearr_38754[(7)] = inst_38749);

return statearr_38754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38752__$1,inst_38750);
} else {
return null;
}
}
});})(c__28364__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____0 = (function (){
var statearr_38758 = [null,null,null,null,null,null,null,null];
(statearr_38758[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__);

(statearr_38758[(1)] = (1));

return statearr_38758;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____1 = (function (state_38752){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_38752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e38759){if((e38759 instanceof Object)){
var ex__28256__auto__ = e38759;
var statearr_38760_38762 = state_38752;
(statearr_38760_38762[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38763 = state_38752;
state_38752 = G__38763;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__ = function(state_38752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____1.call(this,state_38752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28253__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__))
})();
var state__28366__auto__ = (function (){var statearr_38761 = f__28365__auto__.call(null);
(statearr_38761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_38761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__))
);

return c__28364__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38786){
var state_val_38787 = (state_38786[(1)]);
if((state_val_38787 === (1))){
var inst_38780 = cljs.core.async.timeout.call(null,(2000));
var state_38786__$1 = state_38786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38786__$1,(2),inst_38780);
} else {
if((state_val_38787 === (2))){
var inst_38782 = (state_38786[(2)]);
var inst_38783 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38784 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38783);
var state_38786__$1 = (function (){var statearr_38788 = state_38786;
(statearr_38788[(7)] = inst_38782);

return statearr_38788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38786__$1,inst_38784);
} else {
return null;
}
}
});})(c__28364__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____0 = (function (){
var statearr_38792 = [null,null,null,null,null,null,null,null];
(statearr_38792[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__);

(statearr_38792[(1)] = (1));

return statearr_38792;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____1 = (function (state_38786){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_38786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e38793){if((e38793 instanceof Object)){
var ex__28256__auto__ = e38793;
var statearr_38794_38796 = state_38786;
(statearr_38794_38796[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38797 = state_38786;
state_38786 = G__38797;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__ = function(state_38786){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____1.call(this,state_38786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28366__auto__ = (function (){var statearr_38795 = f__28365__auto__.call(null);
(statearr_38795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__,figwheel_version,temp__4657__auto__))
);

return c__28364__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38798){
var map__38802 = p__38798;
var map__38802__$1 = ((((!((map__38802 == null)))?((((map__38802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38802):map__38802);
var file = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38804 = "";
var G__38804__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38804),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38804);
var G__38804__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38804__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38804__$1);
if(cljs.core.truth_((function (){var and__25118__auto__ = line;
if(cljs.core.truth_(and__25118__auto__)){
return column;
} else {
return and__25118__auto__;
}
})())){
return [cljs.core.str(G__38804__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38804__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38805){
var map__38812 = p__38805;
var map__38812__$1 = ((((!((map__38812 == null)))?((((map__38812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38812):map__38812);
var ed = map__38812__$1;
var formatted_exception = cljs.core.get.call(null,map__38812__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38812__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38812__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38814_38818 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38815_38819 = null;
var count__38816_38820 = (0);
var i__38817_38821 = (0);
while(true){
if((i__38817_38821 < count__38816_38820)){
var msg_38822 = cljs.core._nth.call(null,chunk__38815_38819,i__38817_38821);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38822);

var G__38823 = seq__38814_38818;
var G__38824 = chunk__38815_38819;
var G__38825 = count__38816_38820;
var G__38826 = (i__38817_38821 + (1));
seq__38814_38818 = G__38823;
chunk__38815_38819 = G__38824;
count__38816_38820 = G__38825;
i__38817_38821 = G__38826;
continue;
} else {
var temp__4657__auto___38827 = cljs.core.seq.call(null,seq__38814_38818);
if(temp__4657__auto___38827){
var seq__38814_38828__$1 = temp__4657__auto___38827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38814_38828__$1)){
var c__25941__auto___38829 = cljs.core.chunk_first.call(null,seq__38814_38828__$1);
var G__38830 = cljs.core.chunk_rest.call(null,seq__38814_38828__$1);
var G__38831 = c__25941__auto___38829;
var G__38832 = cljs.core.count.call(null,c__25941__auto___38829);
var G__38833 = (0);
seq__38814_38818 = G__38830;
chunk__38815_38819 = G__38831;
count__38816_38820 = G__38832;
i__38817_38821 = G__38833;
continue;
} else {
var msg_38834 = cljs.core.first.call(null,seq__38814_38828__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38834);

var G__38835 = cljs.core.next.call(null,seq__38814_38828__$1);
var G__38836 = null;
var G__38837 = (0);
var G__38838 = (0);
seq__38814_38818 = G__38835;
chunk__38815_38819 = G__38836;
count__38816_38820 = G__38837;
i__38817_38821 = G__38838;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38839){
var map__38842 = p__38839;
var map__38842__$1 = ((((!((map__38842 == null)))?((((map__38842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38842):map__38842);
var w = map__38842__$1;
var message = cljs.core.get.call(null,map__38842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"docs/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"docs/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25118__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25118__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25118__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38854 = cljs.core.seq.call(null,plugins);
var chunk__38855 = null;
var count__38856 = (0);
var i__38857 = (0);
while(true){
if((i__38857 < count__38856)){
var vec__38858 = cljs.core._nth.call(null,chunk__38855,i__38857);
var k = cljs.core.nth.call(null,vec__38858,(0),null);
var plugin = cljs.core.nth.call(null,vec__38858,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38864 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38854,chunk__38855,count__38856,i__38857,pl_38864,vec__38858,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38864.call(null,msg_hist);
});})(seq__38854,chunk__38855,count__38856,i__38857,pl_38864,vec__38858,k,plugin))
);
} else {
}

var G__38865 = seq__38854;
var G__38866 = chunk__38855;
var G__38867 = count__38856;
var G__38868 = (i__38857 + (1));
seq__38854 = G__38865;
chunk__38855 = G__38866;
count__38856 = G__38867;
i__38857 = G__38868;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38854);
if(temp__4657__auto__){
var seq__38854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38854__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__38854__$1);
var G__38869 = cljs.core.chunk_rest.call(null,seq__38854__$1);
var G__38870 = c__25941__auto__;
var G__38871 = cljs.core.count.call(null,c__25941__auto__);
var G__38872 = (0);
seq__38854 = G__38869;
chunk__38855 = G__38870;
count__38856 = G__38871;
i__38857 = G__38872;
continue;
} else {
var vec__38861 = cljs.core.first.call(null,seq__38854__$1);
var k = cljs.core.nth.call(null,vec__38861,(0),null);
var plugin = cljs.core.nth.call(null,vec__38861,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38873 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38854,chunk__38855,count__38856,i__38857,pl_38873,vec__38861,k,plugin,seq__38854__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38873.call(null,msg_hist);
});})(seq__38854,chunk__38855,count__38856,i__38857,pl_38873,vec__38861,k,plugin,seq__38854__$1,temp__4657__auto__))
);
} else {
}

var G__38874 = cljs.core.next.call(null,seq__38854__$1);
var G__38875 = null;
var G__38876 = (0);
var G__38877 = (0);
seq__38854 = G__38874;
chunk__38855 = G__38875;
count__38856 = G__38876;
i__38857 = G__38877;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38878 = [];
var len__26205__auto___38885 = arguments.length;
var i__26206__auto___38886 = (0);
while(true){
if((i__26206__auto___38886 < len__26205__auto___38885)){
args38878.push((arguments[i__26206__auto___38886]));

var G__38887 = (i__26206__auto___38886 + (1));
i__26206__auto___38886 = G__38887;
continue;
} else {
}
break;
}

var G__38880 = args38878.length;
switch (G__38880) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38878.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38881_38889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38882_38890 = null;
var count__38883_38891 = (0);
var i__38884_38892 = (0);
while(true){
if((i__38884_38892 < count__38883_38891)){
var msg_38893 = cljs.core._nth.call(null,chunk__38882_38890,i__38884_38892);
figwheel.client.socket.handle_incoming_message.call(null,msg_38893);

var G__38894 = seq__38881_38889;
var G__38895 = chunk__38882_38890;
var G__38896 = count__38883_38891;
var G__38897 = (i__38884_38892 + (1));
seq__38881_38889 = G__38894;
chunk__38882_38890 = G__38895;
count__38883_38891 = G__38896;
i__38884_38892 = G__38897;
continue;
} else {
var temp__4657__auto___38898 = cljs.core.seq.call(null,seq__38881_38889);
if(temp__4657__auto___38898){
var seq__38881_38899__$1 = temp__4657__auto___38898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38881_38899__$1)){
var c__25941__auto___38900 = cljs.core.chunk_first.call(null,seq__38881_38899__$1);
var G__38901 = cljs.core.chunk_rest.call(null,seq__38881_38899__$1);
var G__38902 = c__25941__auto___38900;
var G__38903 = cljs.core.count.call(null,c__25941__auto___38900);
var G__38904 = (0);
seq__38881_38889 = G__38901;
chunk__38882_38890 = G__38902;
count__38883_38891 = G__38903;
i__38884_38892 = G__38904;
continue;
} else {
var msg_38905 = cljs.core.first.call(null,seq__38881_38899__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38905);

var G__38906 = cljs.core.next.call(null,seq__38881_38899__$1);
var G__38907 = null;
var G__38908 = (0);
var G__38909 = (0);
seq__38881_38889 = G__38906;
chunk__38882_38890 = G__38907;
count__38883_38891 = G__38908;
i__38884_38892 = G__38909;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26212__auto__ = [];
var len__26205__auto___38914 = arguments.length;
var i__26206__auto___38915 = (0);
while(true){
if((i__26206__auto___38915 < len__26205__auto___38914)){
args__26212__auto__.push((arguments[i__26206__auto___38915]));

var G__38916 = (i__26206__auto___38915 + (1));
i__26206__auto___38915 = G__38916;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38911){
var map__38912 = p__38911;
var map__38912__$1 = ((((!((map__38912 == null)))?((((map__38912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38912):map__38912);
var opts = map__38912__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38910){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38910));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38918){if((e38918 instanceof Error)){
var e = e38918;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38918;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38922){
var map__38923 = p__38922;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var msg_name = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1603199206903
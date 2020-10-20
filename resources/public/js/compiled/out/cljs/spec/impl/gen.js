// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36403 = arguments.length;
var i__26206__auto___36404 = (0);
while(true){
if((i__26206__auto___36404 < len__26205__auto___36403)){
args__26212__auto__.push((arguments[i__26206__auto___36404]));

var G__36405 = (i__26206__auto___36404 + (1));
i__26206__auto___36404 = G__36405;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36402){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36402));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36407 = arguments.length;
var i__26206__auto___36408 = (0);
while(true){
if((i__26206__auto___36408 < len__26205__auto___36407)){
args__26212__auto__.push((arguments[i__26206__auto___36408]));

var G__36409 = (i__26206__auto___36408 + (1));
i__26206__auto___36408 = G__36409;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36406){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36406));
});

var g_QMARK__36410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36411 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36410){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36410))
,null));
var mkg_36412 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36410,g_36411){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36410,g_36411))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36410,g_36411,mkg_36412){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36410).call(null,x);
});})(g_QMARK__36410,g_36411,mkg_36412))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36410,g_36411,mkg_36412){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36412).call(null,gfn);
});})(g_QMARK__36410,g_36411,mkg_36412))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36410,g_36411,mkg_36412){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36411).call(null,generator);
});})(g_QMARK__36410,g_36411,mkg_36412))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36374__auto___36431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__36374__auto___36431){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36432 = arguments.length;
var i__26206__auto___36433 = (0);
while(true){
if((i__26206__auto___36433 < len__26205__auto___36432)){
args__26212__auto__.push((arguments[i__26206__auto___36433]));

var G__36434 = (i__26206__auto___36433 + (1));
i__26206__auto___36433 = G__36434;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36431))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36431){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36431),args);
});})(g__36374__auto___36431))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__36374__auto___36431){
return (function (seq36413){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36413));
});})(g__36374__auto___36431))
;


var g__36374__auto___36435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__36374__auto___36435){
return (function cljs$spec$impl$gen$list(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36436 = arguments.length;
var i__26206__auto___36437 = (0);
while(true){
if((i__26206__auto___36437 < len__26205__auto___36436)){
args__26212__auto__.push((arguments[i__26206__auto___36437]));

var G__36438 = (i__26206__auto___36437 + (1));
i__26206__auto___36437 = G__36438;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36435))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36435){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36435),args);
});})(g__36374__auto___36435))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__36374__auto___36435){
return (function (seq36414){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36414));
});})(g__36374__auto___36435))
;


var g__36374__auto___36439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__36374__auto___36439){
return (function cljs$spec$impl$gen$map(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36440 = arguments.length;
var i__26206__auto___36441 = (0);
while(true){
if((i__26206__auto___36441 < len__26205__auto___36440)){
args__26212__auto__.push((arguments[i__26206__auto___36441]));

var G__36442 = (i__26206__auto___36441 + (1));
i__26206__auto___36441 = G__36442;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36439))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36439){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36439),args);
});})(g__36374__auto___36439))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__36374__auto___36439){
return (function (seq36415){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36415));
});})(g__36374__auto___36439))
;


var g__36374__auto___36443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__36374__auto___36443){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36444 = arguments.length;
var i__26206__auto___36445 = (0);
while(true){
if((i__26206__auto___36445 < len__26205__auto___36444)){
args__26212__auto__.push((arguments[i__26206__auto___36445]));

var G__36446 = (i__26206__auto___36445 + (1));
i__26206__auto___36445 = G__36446;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36443))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36443){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36443),args);
});})(g__36374__auto___36443))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__36374__auto___36443){
return (function (seq36416){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36416));
});})(g__36374__auto___36443))
;


var g__36374__auto___36447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__36374__auto___36447){
return (function cljs$spec$impl$gen$set(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36448 = arguments.length;
var i__26206__auto___36449 = (0);
while(true){
if((i__26206__auto___36449 < len__26205__auto___36448)){
args__26212__auto__.push((arguments[i__26206__auto___36449]));

var G__36450 = (i__26206__auto___36449 + (1));
i__26206__auto___36449 = G__36450;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36447))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36447){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36447),args);
});})(g__36374__auto___36447))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__36374__auto___36447){
return (function (seq36417){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36417));
});})(g__36374__auto___36447))
;


var g__36374__auto___36451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__36374__auto___36451){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36452 = arguments.length;
var i__26206__auto___36453 = (0);
while(true){
if((i__26206__auto___36453 < len__26205__auto___36452)){
args__26212__auto__.push((arguments[i__26206__auto___36453]));

var G__36454 = (i__26206__auto___36453 + (1));
i__26206__auto___36453 = G__36454;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36451))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36451){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36451),args);
});})(g__36374__auto___36451))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__36374__auto___36451){
return (function (seq36418){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36418));
});})(g__36374__auto___36451))
;


var g__36374__auto___36455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__36374__auto___36455){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36456 = arguments.length;
var i__26206__auto___36457 = (0);
while(true){
if((i__26206__auto___36457 < len__26205__auto___36456)){
args__26212__auto__.push((arguments[i__26206__auto___36457]));

var G__36458 = (i__26206__auto___36457 + (1));
i__26206__auto___36457 = G__36458;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36455))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36455),args);
});})(g__36374__auto___36455))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__36374__auto___36455){
return (function (seq36419){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36419));
});})(g__36374__auto___36455))
;


var g__36374__auto___36459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__36374__auto___36459){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36460 = arguments.length;
var i__26206__auto___36461 = (0);
while(true){
if((i__26206__auto___36461 < len__26205__auto___36460)){
args__26212__auto__.push((arguments[i__26206__auto___36461]));

var G__36462 = (i__26206__auto___36461 + (1));
i__26206__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36459))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36459),args);
});})(g__36374__auto___36459))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__36374__auto___36459){
return (function (seq36420){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36420));
});})(g__36374__auto___36459))
;


var g__36374__auto___36463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__36374__auto___36463){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36464 = arguments.length;
var i__26206__auto___36465 = (0);
while(true){
if((i__26206__auto___36465 < len__26205__auto___36464)){
args__26212__auto__.push((arguments[i__26206__auto___36465]));

var G__36466 = (i__26206__auto___36465 + (1));
i__26206__auto___36465 = G__36466;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36463))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36463),args);
});})(g__36374__auto___36463))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__36374__auto___36463){
return (function (seq36421){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36421));
});})(g__36374__auto___36463))
;


var g__36374__auto___36467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__36374__auto___36467){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36468 = arguments.length;
var i__26206__auto___36469 = (0);
while(true){
if((i__26206__auto___36469 < len__26205__auto___36468)){
args__26212__auto__.push((arguments[i__26206__auto___36469]));

var G__36470 = (i__26206__auto___36469 + (1));
i__26206__auto___36469 = G__36470;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36467))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36467),args);
});})(g__36374__auto___36467))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__36374__auto___36467){
return (function (seq36422){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36422));
});})(g__36374__auto___36467))
;


var g__36374__auto___36471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__36374__auto___36471){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36472 = arguments.length;
var i__26206__auto___36473 = (0);
while(true){
if((i__26206__auto___36473 < len__26205__auto___36472)){
args__26212__auto__.push((arguments[i__26206__auto___36473]));

var G__36474 = (i__26206__auto___36473 + (1));
i__26206__auto___36473 = G__36474;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36471))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36471),args);
});})(g__36374__auto___36471))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__36374__auto___36471){
return (function (seq36423){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36423));
});})(g__36374__auto___36471))
;


var g__36374__auto___36475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__36374__auto___36475){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36476 = arguments.length;
var i__26206__auto___36477 = (0);
while(true){
if((i__26206__auto___36477 < len__26205__auto___36476)){
args__26212__auto__.push((arguments[i__26206__auto___36477]));

var G__36478 = (i__26206__auto___36477 + (1));
i__26206__auto___36477 = G__36478;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36475))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36475),args);
});})(g__36374__auto___36475))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__36374__auto___36475){
return (function (seq36424){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36424));
});})(g__36374__auto___36475))
;


var g__36374__auto___36479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__36374__auto___36479){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36480 = arguments.length;
var i__26206__auto___36481 = (0);
while(true){
if((i__26206__auto___36481 < len__26205__auto___36480)){
args__26212__auto__.push((arguments[i__26206__auto___36481]));

var G__36482 = (i__26206__auto___36481 + (1));
i__26206__auto___36481 = G__36482;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36479))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36479),args);
});})(g__36374__auto___36479))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__36374__auto___36479){
return (function (seq36425){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36425));
});})(g__36374__auto___36479))
;


var g__36374__auto___36483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__36374__auto___36483){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36484 = arguments.length;
var i__26206__auto___36485 = (0);
while(true){
if((i__26206__auto___36485 < len__26205__auto___36484)){
args__26212__auto__.push((arguments[i__26206__auto___36485]));

var G__36486 = (i__26206__auto___36485 + (1));
i__26206__auto___36485 = G__36486;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36483))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36483),args);
});})(g__36374__auto___36483))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__36374__auto___36483){
return (function (seq36426){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36426));
});})(g__36374__auto___36483))
;


var g__36374__auto___36487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__36374__auto___36487){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36488 = arguments.length;
var i__26206__auto___36489 = (0);
while(true){
if((i__26206__auto___36489 < len__26205__auto___36488)){
args__26212__auto__.push((arguments[i__26206__auto___36489]));

var G__36490 = (i__26206__auto___36489 + (1));
i__26206__auto___36489 = G__36490;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36487))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36487),args);
});})(g__36374__auto___36487))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__36374__auto___36487){
return (function (seq36427){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36427));
});})(g__36374__auto___36487))
;


var g__36374__auto___36491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__36374__auto___36491){
return (function cljs$spec$impl$gen$return(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36492 = arguments.length;
var i__26206__auto___36493 = (0);
while(true){
if((i__26206__auto___36493 < len__26205__auto___36492)){
args__26212__auto__.push((arguments[i__26206__auto___36493]));

var G__36494 = (i__26206__auto___36493 + (1));
i__26206__auto___36493 = G__36494;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36491))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36491),args);
});})(g__36374__auto___36491))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__36374__auto___36491){
return (function (seq36428){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36428));
});})(g__36374__auto___36491))
;


var g__36374__auto___36495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__36374__auto___36495){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36496 = arguments.length;
var i__26206__auto___36497 = (0);
while(true){
if((i__26206__auto___36497 < len__26205__auto___36496)){
args__26212__auto__.push((arguments[i__26206__auto___36497]));

var G__36498 = (i__26206__auto___36497 + (1));
i__26206__auto___36497 = G__36498;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36495))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36495),args);
});})(g__36374__auto___36495))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36374__auto___36495){
return (function (seq36429){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36429));
});})(g__36374__auto___36495))
;


var g__36374__auto___36499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__36374__auto___36499){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36500 = arguments.length;
var i__26206__auto___36501 = (0);
while(true){
if((i__26206__auto___36501 < len__26205__auto___36500)){
args__26212__auto__.push((arguments[i__26206__auto___36501]));

var G__36502 = (i__26206__auto___36501 + (1));
i__26206__auto___36501 = G__36502;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36374__auto___36499))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36374__auto___36499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36374__auto___36499),args);
});})(g__36374__auto___36499))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__36374__auto___36499){
return (function (seq36430){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36430));
});})(g__36374__auto___36499))
;

var g__36387__auto___36524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__36387__auto___36524){
return (function cljs$spec$impl$gen$any(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36525 = arguments.length;
var i__26206__auto___36526 = (0);
while(true){
if((i__26206__auto___36526 < len__26205__auto___36525)){
args__26212__auto__.push((arguments[i__26206__auto___36526]));

var G__36527 = (i__26206__auto___36526 + (1));
i__26206__auto___36526 = G__36527;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36524))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36524){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36524);
});})(g__36387__auto___36524))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__36387__auto___36524){
return (function (seq36503){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36503));
});})(g__36387__auto___36524))
;


var g__36387__auto___36528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__36387__auto___36528){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36529 = arguments.length;
var i__26206__auto___36530 = (0);
while(true){
if((i__26206__auto___36530 < len__26205__auto___36529)){
args__26212__auto__.push((arguments[i__26206__auto___36530]));

var G__36531 = (i__26206__auto___36530 + (1));
i__26206__auto___36530 = G__36531;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36528))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36528){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36528);
});})(g__36387__auto___36528))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__36387__auto___36528){
return (function (seq36504){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36504));
});})(g__36387__auto___36528))
;


var g__36387__auto___36532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__36387__auto___36532){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36533 = arguments.length;
var i__26206__auto___36534 = (0);
while(true){
if((i__26206__auto___36534 < len__26205__auto___36533)){
args__26212__auto__.push((arguments[i__26206__auto___36534]));

var G__36535 = (i__26206__auto___36534 + (1));
i__26206__auto___36534 = G__36535;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36532))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36532){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36532);
});})(g__36387__auto___36532))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__36387__auto___36532){
return (function (seq36505){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36505));
});})(g__36387__auto___36532))
;


var g__36387__auto___36536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__36387__auto___36536){
return (function cljs$spec$impl$gen$char(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36537 = arguments.length;
var i__26206__auto___36538 = (0);
while(true){
if((i__26206__auto___36538 < len__26205__auto___36537)){
args__26212__auto__.push((arguments[i__26206__auto___36538]));

var G__36539 = (i__26206__auto___36538 + (1));
i__26206__auto___36538 = G__36539;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36536))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36536){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36536);
});})(g__36387__auto___36536))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__36387__auto___36536){
return (function (seq36506){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36506));
});})(g__36387__auto___36536))
;


var g__36387__auto___36540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__36387__auto___36540){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36541 = arguments.length;
var i__26206__auto___36542 = (0);
while(true){
if((i__26206__auto___36542 < len__26205__auto___36541)){
args__26212__auto__.push((arguments[i__26206__auto___36542]));

var G__36543 = (i__26206__auto___36542 + (1));
i__26206__auto___36542 = G__36543;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36540))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36540){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36540);
});})(g__36387__auto___36540))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__36387__auto___36540){
return (function (seq36507){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36507));
});})(g__36387__auto___36540))
;


var g__36387__auto___36544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__36387__auto___36544){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36545 = arguments.length;
var i__26206__auto___36546 = (0);
while(true){
if((i__26206__auto___36546 < len__26205__auto___36545)){
args__26212__auto__.push((arguments[i__26206__auto___36546]));

var G__36547 = (i__26206__auto___36546 + (1));
i__26206__auto___36546 = G__36547;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36544))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36544){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36544);
});})(g__36387__auto___36544))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__36387__auto___36544){
return (function (seq36508){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36508));
});})(g__36387__auto___36544))
;


var g__36387__auto___36548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__36387__auto___36548){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36549 = arguments.length;
var i__26206__auto___36550 = (0);
while(true){
if((i__26206__auto___36550 < len__26205__auto___36549)){
args__26212__auto__.push((arguments[i__26206__auto___36550]));

var G__36551 = (i__26206__auto___36550 + (1));
i__26206__auto___36550 = G__36551;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36548))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36548){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36548);
});})(g__36387__auto___36548))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__36387__auto___36548){
return (function (seq36509){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36509));
});})(g__36387__auto___36548))
;


var g__36387__auto___36552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__36387__auto___36552){
return (function cljs$spec$impl$gen$double(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36553 = arguments.length;
var i__26206__auto___36554 = (0);
while(true){
if((i__26206__auto___36554 < len__26205__auto___36553)){
args__26212__auto__.push((arguments[i__26206__auto___36554]));

var G__36555 = (i__26206__auto___36554 + (1));
i__26206__auto___36554 = G__36555;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36552))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36552){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36552);
});})(g__36387__auto___36552))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__36387__auto___36552){
return (function (seq36510){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36510));
});})(g__36387__auto___36552))
;


var g__36387__auto___36556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__36387__auto___36556){
return (function cljs$spec$impl$gen$int(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36557 = arguments.length;
var i__26206__auto___36558 = (0);
while(true){
if((i__26206__auto___36558 < len__26205__auto___36557)){
args__26212__auto__.push((arguments[i__26206__auto___36558]));

var G__36559 = (i__26206__auto___36558 + (1));
i__26206__auto___36558 = G__36559;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36556))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36556){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36556);
});})(g__36387__auto___36556))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__36387__auto___36556){
return (function (seq36511){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36511));
});})(g__36387__auto___36556))
;


var g__36387__auto___36560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__36387__auto___36560){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36561 = arguments.length;
var i__26206__auto___36562 = (0);
while(true){
if((i__26206__auto___36562 < len__26205__auto___36561)){
args__26212__auto__.push((arguments[i__26206__auto___36562]));

var G__36563 = (i__26206__auto___36562 + (1));
i__26206__auto___36562 = G__36563;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36560))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36560){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36560);
});})(g__36387__auto___36560))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__36387__auto___36560){
return (function (seq36512){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36512));
});})(g__36387__auto___36560))
;


var g__36387__auto___36564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__36387__auto___36564){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36565 = arguments.length;
var i__26206__auto___36566 = (0);
while(true){
if((i__26206__auto___36566 < len__26205__auto___36565)){
args__26212__auto__.push((arguments[i__26206__auto___36566]));

var G__36567 = (i__26206__auto___36566 + (1));
i__26206__auto___36566 = G__36567;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36564))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36564){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36564);
});})(g__36387__auto___36564))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__36387__auto___36564){
return (function (seq36513){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36513));
});})(g__36387__auto___36564))
;


var g__36387__auto___36568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__36387__auto___36568){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36569 = arguments.length;
var i__26206__auto___36570 = (0);
while(true){
if((i__26206__auto___36570 < len__26205__auto___36569)){
args__26212__auto__.push((arguments[i__26206__auto___36570]));

var G__36571 = (i__26206__auto___36570 + (1));
i__26206__auto___36570 = G__36571;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36568))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36568){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36568);
});})(g__36387__auto___36568))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__36387__auto___36568){
return (function (seq36514){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36514));
});})(g__36387__auto___36568))
;


var g__36387__auto___36572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__36387__auto___36572){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36573 = arguments.length;
var i__26206__auto___36574 = (0);
while(true){
if((i__26206__auto___36574 < len__26205__auto___36573)){
args__26212__auto__.push((arguments[i__26206__auto___36574]));

var G__36575 = (i__26206__auto___36574 + (1));
i__26206__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36572))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36572){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36572);
});})(g__36387__auto___36572))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__36387__auto___36572){
return (function (seq36515){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36515));
});})(g__36387__auto___36572))
;


var g__36387__auto___36576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__36387__auto___36576){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36577 = arguments.length;
var i__26206__auto___36578 = (0);
while(true){
if((i__26206__auto___36578 < len__26205__auto___36577)){
args__26212__auto__.push((arguments[i__26206__auto___36578]));

var G__36579 = (i__26206__auto___36578 + (1));
i__26206__auto___36578 = G__36579;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36576))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36576){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36576);
});})(g__36387__auto___36576))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__36387__auto___36576){
return (function (seq36516){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36516));
});})(g__36387__auto___36576))
;


var g__36387__auto___36580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__36387__auto___36580){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36581 = arguments.length;
var i__26206__auto___36582 = (0);
while(true){
if((i__26206__auto___36582 < len__26205__auto___36581)){
args__26212__auto__.push((arguments[i__26206__auto___36582]));

var G__36583 = (i__26206__auto___36582 + (1));
i__26206__auto___36582 = G__36583;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36580))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36580){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36580);
});})(g__36387__auto___36580))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__36387__auto___36580){
return (function (seq36517){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36517));
});})(g__36387__auto___36580))
;


var g__36387__auto___36584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__36387__auto___36584){
return (function cljs$spec$impl$gen$string(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36585 = arguments.length;
var i__26206__auto___36586 = (0);
while(true){
if((i__26206__auto___36586 < len__26205__auto___36585)){
args__26212__auto__.push((arguments[i__26206__auto___36586]));

var G__36587 = (i__26206__auto___36586 + (1));
i__26206__auto___36586 = G__36587;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36584))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36584){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36584);
});})(g__36387__auto___36584))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__36387__auto___36584){
return (function (seq36518){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36518));
});})(g__36387__auto___36584))
;


var g__36387__auto___36588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__36387__auto___36588){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36589 = arguments.length;
var i__26206__auto___36590 = (0);
while(true){
if((i__26206__auto___36590 < len__26205__auto___36589)){
args__26212__auto__.push((arguments[i__26206__auto___36590]));

var G__36591 = (i__26206__auto___36590 + (1));
i__26206__auto___36590 = G__36591;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36588))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36588){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36588);
});})(g__36387__auto___36588))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__36387__auto___36588){
return (function (seq36519){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36519));
});})(g__36387__auto___36588))
;


var g__36387__auto___36592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__36387__auto___36592){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36593 = arguments.length;
var i__26206__auto___36594 = (0);
while(true){
if((i__26206__auto___36594 < len__26205__auto___36593)){
args__26212__auto__.push((arguments[i__26206__auto___36594]));

var G__36595 = (i__26206__auto___36594 + (1));
i__26206__auto___36594 = G__36595;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36592))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36592){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36592);
});})(g__36387__auto___36592))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__36387__auto___36592){
return (function (seq36520){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36520));
});})(g__36387__auto___36592))
;


var g__36387__auto___36596 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__36387__auto___36596){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36597 = arguments.length;
var i__26206__auto___36598 = (0);
while(true){
if((i__26206__auto___36598 < len__26205__auto___36597)){
args__26212__auto__.push((arguments[i__26206__auto___36598]));

var G__36599 = (i__26206__auto___36598 + (1));
i__26206__auto___36598 = G__36599;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36596))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36596){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36596);
});})(g__36387__auto___36596))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__36387__auto___36596){
return (function (seq36521){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36521));
});})(g__36387__auto___36596))
;


var g__36387__auto___36600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__36387__auto___36600){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36601 = arguments.length;
var i__26206__auto___36602 = (0);
while(true){
if((i__26206__auto___36602 < len__26205__auto___36601)){
args__26212__auto__.push((arguments[i__26206__auto___36602]));

var G__36603 = (i__26206__auto___36602 + (1));
i__26206__auto___36602 = G__36603;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36600))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36600){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36600);
});})(g__36387__auto___36600))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__36387__auto___36600){
return (function (seq36522){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36522));
});})(g__36387__auto___36600))
;


var g__36387__auto___36604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__36387__auto___36604){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36605 = arguments.length;
var i__26206__auto___36606 = (0);
while(true){
if((i__26206__auto___36606 < len__26205__auto___36605)){
args__26212__auto__.push((arguments[i__26206__auto___36606]));

var G__36607 = (i__26206__auto___36606 + (1));
i__26206__auto___36606 = G__36607;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});})(g__36387__auto___36604))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36387__auto___36604){
return (function (args){
return cljs.core.deref.call(null,g__36387__auto___36604);
});})(g__36387__auto___36604))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__36387__auto___36604){
return (function (seq36523){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36523));
});})(g__36387__auto___36604))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26212__auto__ = [];
var len__26205__auto___36610 = arguments.length;
var i__26206__auto___36611 = (0);
while(true){
if((i__26206__auto___36611 < len__26205__auto___36610)){
args__26212__auto__.push((arguments[i__26206__auto___36611]));

var G__36612 = (i__26206__auto___36611 + (1));
i__26206__auto___36611 = G__36612;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((0) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26213__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36608_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36608_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36609){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36609));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36613_SHARP_){
return (new Date(p1__36613_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1603199203804
// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28409 = [];
var len__26205__auto___28415 = arguments.length;
var i__26206__auto___28416 = (0);
while(true){
if((i__26206__auto___28416 < len__26205__auto___28415)){
args28409.push((arguments[i__26206__auto___28416]));

var G__28417 = (i__26206__auto___28416 + (1));
i__26206__auto___28416 = G__28417;
continue;
} else {
}
break;
}

var G__28411 = args28409.length;
switch (G__28411) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28409.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28412 = (function (f,blockable,meta28413){
this.f = f;
this.blockable = blockable;
this.meta28413 = meta28413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28414,meta28413__$1){
var self__ = this;
var _28414__$1 = this;
return (new cljs.core.async.t_cljs$core$async28412(self__.f,self__.blockable,meta28413__$1));
});

cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28414){
var self__ = this;
var _28414__$1 = this;
return self__.meta28413;
});

cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28413","meta28413",1296679206,null)], null);
});

cljs.core.async.t_cljs$core$async28412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28412";

cljs.core.async.t_cljs$core$async28412.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async28412");
});

cljs.core.async.__GT_t_cljs$core$async28412 = (function cljs$core$async$__GT_t_cljs$core$async28412(f__$1,blockable__$1,meta28413){
return (new cljs.core.async.t_cljs$core$async28412(f__$1,blockable__$1,meta28413));
});

}

return (new cljs.core.async.t_cljs$core$async28412(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28421 = [];
var len__26205__auto___28424 = arguments.length;
var i__26206__auto___28425 = (0);
while(true){
if((i__26206__auto___28425 < len__26205__auto___28424)){
args28421.push((arguments[i__26206__auto___28425]));

var G__28426 = (i__26206__auto___28425 + (1));
i__26206__auto___28425 = G__28426;
continue;
} else {
}
break;
}

var G__28423 = args28421.length;
switch (G__28423) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28421.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28428 = [];
var len__26205__auto___28431 = arguments.length;
var i__26206__auto___28432 = (0);
while(true){
if((i__26206__auto___28432 < len__26205__auto___28431)){
args28428.push((arguments[i__26206__auto___28432]));

var G__28433 = (i__26206__auto___28432 + (1));
i__26206__auto___28432 = G__28433;
continue;
} else {
}
break;
}

var G__28430 = args28428.length;
switch (G__28430) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28428.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28435 = [];
var len__26205__auto___28438 = arguments.length;
var i__26206__auto___28439 = (0);
while(true){
if((i__26206__auto___28439 < len__26205__auto___28438)){
args28435.push((arguments[i__26206__auto___28439]));

var G__28440 = (i__26206__auto___28439 + (1));
i__26206__auto___28439 = G__28440;
continue;
} else {
}
break;
}

var G__28437 = args28435.length;
switch (G__28437) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28435.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28442,ret){
return (function (){
return fn1.call(null,val_28442);
});})(val_28442,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28443 = [];
var len__26205__auto___28446 = arguments.length;
var i__26206__auto___28447 = (0);
while(true){
if((i__26206__auto___28447 < len__26205__auto___28446)){
args28443.push((arguments[i__26206__auto___28447]));

var G__28448 = (i__26206__auto___28447 + (1));
i__26206__auto___28447 = G__28448;
continue;
} else {
}
break;
}

var G__28445 = args28443.length;
switch (G__28445) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28443.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26045__auto___28450 = n;
var x_28451 = (0);
while(true){
if((x_28451 < n__26045__auto___28450)){
(a[x_28451] = (0));

var G__28452 = (x_28451 + (1));
x_28451 = G__28452;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28453 = (i + (1));
i = G__28453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28457 = (function (alt_flag,flag,meta28458){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28458 = meta28458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28459,meta28458__$1){
var self__ = this;
var _28459__$1 = this;
return (new cljs.core.async.t_cljs$core$async28457(self__.alt_flag,self__.flag,meta28458__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28459){
var self__ = this;
var _28459__$1 = this;
return self__.meta28458;
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28458","meta28458",-225386618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28457";

cljs.core.async.t_cljs$core$async28457.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async28457");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28457 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28457(alt_flag__$1,flag__$1,meta28458){
return (new cljs.core.async.t_cljs$core$async28457(alt_flag__$1,flag__$1,meta28458));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28457(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28463 = (function (alt_handler,flag,cb,meta28464){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28464 = meta28464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28465,meta28464__$1){
var self__ = this;
var _28465__$1 = this;
return (new cljs.core.async.t_cljs$core$async28463(self__.alt_handler,self__.flag,self__.cb,meta28464__$1));
});

cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28465){
var self__ = this;
var _28465__$1 = this;
return self__.meta28464;
});

cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28464","meta28464",830195362,null)], null);
});

cljs.core.async.t_cljs$core$async28463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28463";

cljs.core.async.t_cljs$core$async28463.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async28463");
});

cljs.core.async.__GT_t_cljs$core$async28463 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28463(alt_handler__$1,flag__$1,cb__$1,meta28464){
return (new cljs.core.async.t_cljs$core$async28463(alt_handler__$1,flag__$1,cb__$1,meta28464));
});

}

return (new cljs.core.async.t_cljs$core$async28463(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28466_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28466_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28467_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25130__auto__ = wport;
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28468 = (i + (1));
i = G__28468;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25130__auto__ = ret;
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25118__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25118__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25118__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___28474 = arguments.length;
var i__26206__auto___28475 = (0);
while(true){
if((i__26206__auto___28475 < len__26205__auto___28474)){
args__26212__auto__.push((arguments[i__26206__auto___28475]));

var G__28476 = (i__26206__auto___28475 + (1));
i__26206__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((1) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26213__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28471){
var map__28472 = p__28471;
var map__28472__$1 = ((((!((map__28472 == null)))?((((map__28472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);
var opts = map__28472__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28469){
var G__28470 = cljs.core.first.call(null,seq28469);
var seq28469__$1 = cljs.core.next.call(null,seq28469);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28470,seq28469__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28477 = [];
var len__26205__auto___28527 = arguments.length;
var i__26206__auto___28528 = (0);
while(true){
if((i__26206__auto___28528 < len__26205__auto___28527)){
args28477.push((arguments[i__26206__auto___28528]));

var G__28529 = (i__26206__auto___28528 + (1));
i__26206__auto___28528 = G__28529;
continue;
} else {
}
break;
}

var G__28479 = args28477.length;
switch (G__28479) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28477.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28364__auto___28531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___28531){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___28531){
return (function (state_28503){
var state_val_28504 = (state_28503[(1)]);
if((state_val_28504 === (7))){
var inst_28499 = (state_28503[(2)]);
var state_28503__$1 = state_28503;
var statearr_28505_28532 = state_28503__$1;
(statearr_28505_28532[(2)] = inst_28499);

(statearr_28505_28532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (1))){
var state_28503__$1 = state_28503;
var statearr_28506_28533 = state_28503__$1;
(statearr_28506_28533[(2)] = null);

(statearr_28506_28533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (4))){
var inst_28482 = (state_28503[(7)]);
var inst_28482__$1 = (state_28503[(2)]);
var inst_28483 = (inst_28482__$1 == null);
var state_28503__$1 = (function (){var statearr_28507 = state_28503;
(statearr_28507[(7)] = inst_28482__$1);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28483)){
var statearr_28508_28534 = state_28503__$1;
(statearr_28508_28534[(1)] = (5));

} else {
var statearr_28509_28535 = state_28503__$1;
(statearr_28509_28535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (13))){
var state_28503__$1 = state_28503;
var statearr_28510_28536 = state_28503__$1;
(statearr_28510_28536[(2)] = null);

(statearr_28510_28536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (6))){
var inst_28482 = (state_28503[(7)]);
var state_28503__$1 = state_28503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28503__$1,(11),to,inst_28482);
} else {
if((state_val_28504 === (3))){
var inst_28501 = (state_28503[(2)]);
var state_28503__$1 = state_28503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28503__$1,inst_28501);
} else {
if((state_val_28504 === (12))){
var state_28503__$1 = state_28503;
var statearr_28511_28537 = state_28503__$1;
(statearr_28511_28537[(2)] = null);

(statearr_28511_28537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (2))){
var state_28503__$1 = state_28503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28503__$1,(4),from);
} else {
if((state_val_28504 === (11))){
var inst_28492 = (state_28503[(2)]);
var state_28503__$1 = state_28503;
if(cljs.core.truth_(inst_28492)){
var statearr_28512_28538 = state_28503__$1;
(statearr_28512_28538[(1)] = (12));

} else {
var statearr_28513_28539 = state_28503__$1;
(statearr_28513_28539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (9))){
var state_28503__$1 = state_28503;
var statearr_28514_28540 = state_28503__$1;
(statearr_28514_28540[(2)] = null);

(statearr_28514_28540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (5))){
var state_28503__$1 = state_28503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28515_28541 = state_28503__$1;
(statearr_28515_28541[(1)] = (8));

} else {
var statearr_28516_28542 = state_28503__$1;
(statearr_28516_28542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (14))){
var inst_28497 = (state_28503[(2)]);
var state_28503__$1 = state_28503;
var statearr_28517_28543 = state_28503__$1;
(statearr_28517_28543[(2)] = inst_28497);

(statearr_28517_28543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (10))){
var inst_28489 = (state_28503[(2)]);
var state_28503__$1 = state_28503;
var statearr_28518_28544 = state_28503__$1;
(statearr_28518_28544[(2)] = inst_28489);

(statearr_28518_28544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28504 === (8))){
var inst_28486 = cljs.core.async.close_BANG_.call(null,to);
var state_28503__$1 = state_28503;
var statearr_28519_28545 = state_28503__$1;
(statearr_28519_28545[(2)] = inst_28486);

(statearr_28519_28545[(1)] = (10));


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
});})(c__28364__auto___28531))
;
return ((function (switch__28252__auto__,c__28364__auto___28531){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_28523 = [null,null,null,null,null,null,null,null];
(statearr_28523[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_28523[(1)] = (1));

return statearr_28523;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_28503){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28524){if((e28524 instanceof Object)){
var ex__28256__auto__ = e28524;
var statearr_28525_28546 = state_28503;
(statearr_28525_28546[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28547 = state_28503;
state_28503 = G__28547;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_28503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_28503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___28531))
})();
var state__28366__auto__ = (function (){var statearr_28526 = f__28365__auto__.call(null);
(statearr_28526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___28531);

return statearr_28526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___28531))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28735){
var vec__28736 = p__28735;
var v = cljs.core.nth.call(null,vec__28736,(0),null);
var p = cljs.core.nth.call(null,vec__28736,(1),null);
var job = vec__28736;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28364__auto___28922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results){
return (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (1))){
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28743__$1,(2),res,v);
} else {
if((state_val_28744 === (2))){
var inst_28740 = (state_28743[(2)]);
var inst_28741 = cljs.core.async.close_BANG_.call(null,res);
var state_28743__$1 = (function (){var statearr_28745 = state_28743;
(statearr_28745[(7)] = inst_28740);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28743__$1,inst_28741);
} else {
return null;
}
}
});})(c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results))
;
return ((function (switch__28252__auto__,c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_28749 = [null,null,null,null,null,null,null,null];
(statearr_28749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__);

(statearr_28749[(1)] = (1));

return statearr_28749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1 = (function (state_28743){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28750){if((e28750 instanceof Object)){
var ex__28256__auto__ = e28750;
var statearr_28751_28923 = state_28743;
(statearr_28751_28923[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28924 = state_28743;
state_28743 = G__28924;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results))
})();
var state__28366__auto__ = (function (){var statearr_28752 = f__28365__auto__.call(null);
(statearr_28752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___28922);

return statearr_28752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___28922,res,vec__28736,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28753){
var vec__28754 = p__28753;
var v = cljs.core.nth.call(null,vec__28754,(0),null);
var p = cljs.core.nth.call(null,vec__28754,(1),null);
var job = vec__28754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26045__auto___28925 = n;
var __28926 = (0);
while(true){
if((__28926 < n__26045__auto___28925)){
var G__28757_28927 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28757_28927) {
case "compute":
var c__28364__auto___28929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28926,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (__28926,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function (state_28770){
var state_val_28771 = (state_28770[(1)]);
if((state_val_28771 === (1))){
var state_28770__$1 = state_28770;
var statearr_28772_28930 = state_28770__$1;
(statearr_28772_28930[(2)] = null);

(statearr_28772_28930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (2))){
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28770__$1,(4),jobs);
} else {
if((state_val_28771 === (3))){
var inst_28768 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28770__$1,inst_28768);
} else {
if((state_val_28771 === (4))){
var inst_28760 = (state_28770[(2)]);
var inst_28761 = process.call(null,inst_28760);
var state_28770__$1 = state_28770;
if(cljs.core.truth_(inst_28761)){
var statearr_28773_28931 = state_28770__$1;
(statearr_28773_28931[(1)] = (5));

} else {
var statearr_28774_28932 = state_28770__$1;
(statearr_28774_28932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (5))){
var state_28770__$1 = state_28770;
var statearr_28775_28933 = state_28770__$1;
(statearr_28775_28933[(2)] = null);

(statearr_28775_28933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (6))){
var state_28770__$1 = state_28770;
var statearr_28776_28934 = state_28770__$1;
(statearr_28776_28934[(2)] = null);

(statearr_28776_28934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (7))){
var inst_28766 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28777_28935 = state_28770__$1;
(statearr_28777_28935[(2)] = inst_28766);

(statearr_28777_28935[(1)] = (3));


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
});})(__28926,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
;
return ((function (__28926,switch__28252__auto__,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_28781 = [null,null,null,null,null,null,null];
(statearr_28781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__);

(statearr_28781[(1)] = (1));

return statearr_28781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1 = (function (state_28770){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28782){if((e28782 instanceof Object)){
var ex__28256__auto__ = e28782;
var statearr_28783_28936 = state_28770;
(statearr_28783_28936[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28937 = state_28770;
state_28770 = G__28937;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = function(state_28770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1.call(this,state_28770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__;
})()
;})(__28926,switch__28252__auto__,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
})();
var state__28366__auto__ = (function (){var statearr_28784 = f__28365__auto__.call(null);
(statearr_28784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___28929);

return statearr_28784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(__28926,c__28364__auto___28929,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
);


break;
case "async":
var c__28364__auto___28938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28926,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (__28926,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function (state_28797){
var state_val_28798 = (state_28797[(1)]);
if((state_val_28798 === (1))){
var state_28797__$1 = state_28797;
var statearr_28799_28939 = state_28797__$1;
(statearr_28799_28939[(2)] = null);

(statearr_28799_28939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (2))){
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28797__$1,(4),jobs);
} else {
if((state_val_28798 === (3))){
var inst_28795 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28797__$1,inst_28795);
} else {
if((state_val_28798 === (4))){
var inst_28787 = (state_28797[(2)]);
var inst_28788 = async.call(null,inst_28787);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28788)){
var statearr_28800_28940 = state_28797__$1;
(statearr_28800_28940[(1)] = (5));

} else {
var statearr_28801_28941 = state_28797__$1;
(statearr_28801_28941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (5))){
var state_28797__$1 = state_28797;
var statearr_28802_28942 = state_28797__$1;
(statearr_28802_28942[(2)] = null);

(statearr_28802_28942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (6))){
var state_28797__$1 = state_28797;
var statearr_28803_28943 = state_28797__$1;
(statearr_28803_28943[(2)] = null);

(statearr_28803_28943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (7))){
var inst_28793 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28804_28944 = state_28797__$1;
(statearr_28804_28944[(2)] = inst_28793);

(statearr_28804_28944[(1)] = (3));


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
});})(__28926,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
;
return ((function (__28926,switch__28252__auto__,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_28808 = [null,null,null,null,null,null,null];
(statearr_28808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__);

(statearr_28808[(1)] = (1));

return statearr_28808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1 = (function (state_28797){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28809){if((e28809 instanceof Object)){
var ex__28256__auto__ = e28809;
var statearr_28810_28945 = state_28797;
(statearr_28810_28945[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28946 = state_28797;
state_28797 = G__28946;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = function(state_28797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1.call(this,state_28797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__;
})()
;})(__28926,switch__28252__auto__,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
})();
var state__28366__auto__ = (function (){var statearr_28811 = f__28365__auto__.call(null);
(statearr_28811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___28938);

return statearr_28811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(__28926,c__28364__auto___28938,G__28757_28927,n__26045__auto___28925,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28947 = (__28926 + (1));
__28926 = G__28947;
continue;
} else {
}
break;
}

var c__28364__auto___28948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___28948,jobs,results,process,async){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___28948,jobs,results,process,async){
return (function (state_28833){
var state_val_28834 = (state_28833[(1)]);
if((state_val_28834 === (1))){
var state_28833__$1 = state_28833;
var statearr_28835_28949 = state_28833__$1;
(statearr_28835_28949[(2)] = null);

(statearr_28835_28949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (2))){
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(4),from);
} else {
if((state_val_28834 === (3))){
var inst_28831 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28833__$1,inst_28831);
} else {
if((state_val_28834 === (4))){
var inst_28814 = (state_28833[(7)]);
var inst_28814__$1 = (state_28833[(2)]);
var inst_28815 = (inst_28814__$1 == null);
var state_28833__$1 = (function (){var statearr_28836 = state_28833;
(statearr_28836[(7)] = inst_28814__$1);

return statearr_28836;
})();
if(cljs.core.truth_(inst_28815)){
var statearr_28837_28950 = state_28833__$1;
(statearr_28837_28950[(1)] = (5));

} else {
var statearr_28838_28951 = state_28833__$1;
(statearr_28838_28951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (5))){
var inst_28817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28833__$1 = state_28833;
var statearr_28839_28952 = state_28833__$1;
(statearr_28839_28952[(2)] = inst_28817);

(statearr_28839_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (6))){
var inst_28814 = (state_28833[(7)]);
var inst_28819 = (state_28833[(8)]);
var inst_28819__$1 = cljs.core.async.chan.call(null,(1));
var inst_28820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28821 = [inst_28814,inst_28819__$1];
var inst_28822 = (new cljs.core.PersistentVector(null,2,(5),inst_28820,inst_28821,null));
var state_28833__$1 = (function (){var statearr_28840 = state_28833;
(statearr_28840[(8)] = inst_28819__$1);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28833__$1,(8),jobs,inst_28822);
} else {
if((state_val_28834 === (7))){
var inst_28829 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28841_28953 = state_28833__$1;
(statearr_28841_28953[(2)] = inst_28829);

(statearr_28841_28953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (8))){
var inst_28819 = (state_28833[(8)]);
var inst_28824 = (state_28833[(2)]);
var state_28833__$1 = (function (){var statearr_28842 = state_28833;
(statearr_28842[(9)] = inst_28824);

return statearr_28842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28833__$1,(9),results,inst_28819);
} else {
if((state_val_28834 === (9))){
var inst_28826 = (state_28833[(2)]);
var state_28833__$1 = (function (){var statearr_28843 = state_28833;
(statearr_28843[(10)] = inst_28826);

return statearr_28843;
})();
var statearr_28844_28954 = state_28833__$1;
(statearr_28844_28954[(2)] = null);

(statearr_28844_28954[(1)] = (2));


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
});})(c__28364__auto___28948,jobs,results,process,async))
;
return ((function (switch__28252__auto__,c__28364__auto___28948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_28848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__);

(statearr_28848[(1)] = (1));

return statearr_28848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1 = (function (state_28833){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28849){if((e28849 instanceof Object)){
var ex__28256__auto__ = e28849;
var statearr_28850_28955 = state_28833;
(statearr_28850_28955[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28956 = state_28833;
state_28833 = G__28956;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = function(state_28833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1.call(this,state_28833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___28948,jobs,results,process,async))
})();
var state__28366__auto__ = (function (){var statearr_28851 = f__28365__auto__.call(null);
(statearr_28851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___28948);

return statearr_28851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___28948,jobs,results,process,async))
);


var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__,jobs,results,process,async){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__,jobs,results,process,async){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (7))){
var inst_28885 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28891_28957 = state_28889__$1;
(statearr_28891_28957[(2)] = inst_28885);

(statearr_28891_28957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (20))){
var state_28889__$1 = state_28889;
var statearr_28892_28958 = state_28889__$1;
(statearr_28892_28958[(2)] = null);

(statearr_28892_28958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (1))){
var state_28889__$1 = state_28889;
var statearr_28893_28959 = state_28889__$1;
(statearr_28893_28959[(2)] = null);

(statearr_28893_28959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (4))){
var inst_28854 = (state_28889[(7)]);
var inst_28854__$1 = (state_28889[(2)]);
var inst_28855 = (inst_28854__$1 == null);
var state_28889__$1 = (function (){var statearr_28894 = state_28889;
(statearr_28894[(7)] = inst_28854__$1);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28855)){
var statearr_28895_28960 = state_28889__$1;
(statearr_28895_28960[(1)] = (5));

} else {
var statearr_28896_28961 = state_28889__$1;
(statearr_28896_28961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (15))){
var inst_28867 = (state_28889[(8)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28889__$1,(18),to,inst_28867);
} else {
if((state_val_28890 === (21))){
var inst_28880 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28897_28962 = state_28889__$1;
(statearr_28897_28962[(2)] = inst_28880);

(statearr_28897_28962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (13))){
var inst_28882 = (state_28889[(2)]);
var state_28889__$1 = (function (){var statearr_28898 = state_28889;
(statearr_28898[(9)] = inst_28882);

return statearr_28898;
})();
var statearr_28899_28963 = state_28889__$1;
(statearr_28899_28963[(2)] = null);

(statearr_28899_28963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (6))){
var inst_28854 = (state_28889[(7)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(11),inst_28854);
} else {
if((state_val_28890 === (17))){
var inst_28875 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
if(cljs.core.truth_(inst_28875)){
var statearr_28900_28964 = state_28889__$1;
(statearr_28900_28964[(1)] = (19));

} else {
var statearr_28901_28965 = state_28889__$1;
(statearr_28901_28965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (3))){
var inst_28887 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
if((state_val_28890 === (12))){
var inst_28864 = (state_28889[(10)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(14),inst_28864);
} else {
if((state_val_28890 === (2))){
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(4),results);
} else {
if((state_val_28890 === (19))){
var state_28889__$1 = state_28889;
var statearr_28902_28966 = state_28889__$1;
(statearr_28902_28966[(2)] = null);

(statearr_28902_28966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (11))){
var inst_28864 = (state_28889[(2)]);
var state_28889__$1 = (function (){var statearr_28903 = state_28889;
(statearr_28903[(10)] = inst_28864);

return statearr_28903;
})();
var statearr_28904_28967 = state_28889__$1;
(statearr_28904_28967[(2)] = null);

(statearr_28904_28967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (9))){
var state_28889__$1 = state_28889;
var statearr_28905_28968 = state_28889__$1;
(statearr_28905_28968[(2)] = null);

(statearr_28905_28968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (5))){
var state_28889__$1 = state_28889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28906_28969 = state_28889__$1;
(statearr_28906_28969[(1)] = (8));

} else {
var statearr_28907_28970 = state_28889__$1;
(statearr_28907_28970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (14))){
var inst_28867 = (state_28889[(8)]);
var inst_28869 = (state_28889[(11)]);
var inst_28867__$1 = (state_28889[(2)]);
var inst_28868 = (inst_28867__$1 == null);
var inst_28869__$1 = cljs.core.not.call(null,inst_28868);
var state_28889__$1 = (function (){var statearr_28908 = state_28889;
(statearr_28908[(8)] = inst_28867__$1);

(statearr_28908[(11)] = inst_28869__$1);

return statearr_28908;
})();
if(inst_28869__$1){
var statearr_28909_28971 = state_28889__$1;
(statearr_28909_28971[(1)] = (15));

} else {
var statearr_28910_28972 = state_28889__$1;
(statearr_28910_28972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (16))){
var inst_28869 = (state_28889[(11)]);
var state_28889__$1 = state_28889;
var statearr_28911_28973 = state_28889__$1;
(statearr_28911_28973[(2)] = inst_28869);

(statearr_28911_28973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (10))){
var inst_28861 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28912_28974 = state_28889__$1;
(statearr_28912_28974[(2)] = inst_28861);

(statearr_28912_28974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (18))){
var inst_28872 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28913_28975 = state_28889__$1;
(statearr_28913_28975[(2)] = inst_28872);

(statearr_28913_28975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (8))){
var inst_28858 = cljs.core.async.close_BANG_.call(null,to);
var state_28889__$1 = state_28889;
var statearr_28914_28976 = state_28889__$1;
(statearr_28914_28976[(2)] = inst_28858);

(statearr_28914_28976[(1)] = (10));


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
}
}
}
}
});})(c__28364__auto__,jobs,results,process,async))
;
return ((function (switch__28252__auto__,c__28364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_28918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__);

(statearr_28918[(1)] = (1));

return statearr_28918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1 = (function (state_28889){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e28919){if((e28919 instanceof Object)){
var ex__28256__auto__ = e28919;
var statearr_28920_28977 = state_28889;
(statearr_28920_28977[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28978 = state_28889;
state_28889 = G__28978;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__,jobs,results,process,async))
})();
var state__28366__auto__ = (function (){var statearr_28921 = f__28365__auto__.call(null);
(statearr_28921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_28921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__,jobs,results,process,async))
);

return c__28364__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28979 = [];
var len__26205__auto___28982 = arguments.length;
var i__26206__auto___28983 = (0);
while(true){
if((i__26206__auto___28983 < len__26205__auto___28982)){
args28979.push((arguments[i__26206__auto___28983]));

var G__28984 = (i__26206__auto___28983 + (1));
i__26206__auto___28983 = G__28984;
continue;
} else {
}
break;
}

var G__28981 = args28979.length;
switch (G__28981) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28979.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28986 = [];
var len__26205__auto___28989 = arguments.length;
var i__26206__auto___28990 = (0);
while(true){
if((i__26206__auto___28990 < len__26205__auto___28989)){
args28986.push((arguments[i__26206__auto___28990]));

var G__28991 = (i__26206__auto___28990 + (1));
i__26206__auto___28990 = G__28991;
continue;
} else {
}
break;
}

var G__28988 = args28986.length;
switch (G__28988) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28986.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28993 = [];
var len__26205__auto___29046 = arguments.length;
var i__26206__auto___29047 = (0);
while(true){
if((i__26206__auto___29047 < len__26205__auto___29046)){
args28993.push((arguments[i__26206__auto___29047]));

var G__29048 = (i__26206__auto___29047 + (1));
i__26206__auto___29047 = G__29048;
continue;
} else {
}
break;
}

var G__28995 = args28993.length;
switch (G__28995) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28993.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28364__auto___29050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___29050,tc,fc){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___29050,tc,fc){
return (function (state_29021){
var state_val_29022 = (state_29021[(1)]);
if((state_val_29022 === (7))){
var inst_29017 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29023_29051 = state_29021__$1;
(statearr_29023_29051[(2)] = inst_29017);

(statearr_29023_29051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (1))){
var state_29021__$1 = state_29021;
var statearr_29024_29052 = state_29021__$1;
(statearr_29024_29052[(2)] = null);

(statearr_29024_29052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (4))){
var inst_28998 = (state_29021[(7)]);
var inst_28998__$1 = (state_29021[(2)]);
var inst_28999 = (inst_28998__$1 == null);
var state_29021__$1 = (function (){var statearr_29025 = state_29021;
(statearr_29025[(7)] = inst_28998__$1);

return statearr_29025;
})();
if(cljs.core.truth_(inst_28999)){
var statearr_29026_29053 = state_29021__$1;
(statearr_29026_29053[(1)] = (5));

} else {
var statearr_29027_29054 = state_29021__$1;
(statearr_29027_29054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (13))){
var state_29021__$1 = state_29021;
var statearr_29028_29055 = state_29021__$1;
(statearr_29028_29055[(2)] = null);

(statearr_29028_29055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (6))){
var inst_28998 = (state_29021[(7)]);
var inst_29004 = p.call(null,inst_28998);
var state_29021__$1 = state_29021;
if(cljs.core.truth_(inst_29004)){
var statearr_29029_29056 = state_29021__$1;
(statearr_29029_29056[(1)] = (9));

} else {
var statearr_29030_29057 = state_29021__$1;
(statearr_29030_29057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (3))){
var inst_29019 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29021__$1,inst_29019);
} else {
if((state_val_29022 === (12))){
var state_29021__$1 = state_29021;
var statearr_29031_29058 = state_29021__$1;
(statearr_29031_29058[(2)] = null);

(statearr_29031_29058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (2))){
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29021__$1,(4),ch);
} else {
if((state_val_29022 === (11))){
var inst_28998 = (state_29021[(7)]);
var inst_29008 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29021__$1,(8),inst_29008,inst_28998);
} else {
if((state_val_29022 === (9))){
var state_29021__$1 = state_29021;
var statearr_29032_29059 = state_29021__$1;
(statearr_29032_29059[(2)] = tc);

(statearr_29032_29059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (5))){
var inst_29001 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29002 = cljs.core.async.close_BANG_.call(null,fc);
var state_29021__$1 = (function (){var statearr_29033 = state_29021;
(statearr_29033[(8)] = inst_29001);

return statearr_29033;
})();
var statearr_29034_29060 = state_29021__$1;
(statearr_29034_29060[(2)] = inst_29002);

(statearr_29034_29060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (14))){
var inst_29015 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29035_29061 = state_29021__$1;
(statearr_29035_29061[(2)] = inst_29015);

(statearr_29035_29061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (10))){
var state_29021__$1 = state_29021;
var statearr_29036_29062 = state_29021__$1;
(statearr_29036_29062[(2)] = fc);

(statearr_29036_29062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (8))){
var inst_29010 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
if(cljs.core.truth_(inst_29010)){
var statearr_29037_29063 = state_29021__$1;
(statearr_29037_29063[(1)] = (12));

} else {
var statearr_29038_29064 = state_29021__$1;
(statearr_29038_29064[(1)] = (13));

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
});})(c__28364__auto___29050,tc,fc))
;
return ((function (switch__28252__auto__,c__28364__auto___29050,tc,fc){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null,null,null];
(statearr_29042[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_29021){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_29021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object)){
var ex__28256__auto__ = e29043;
var statearr_29044_29065 = state_29021;
(statearr_29044_29065[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29066 = state_29021;
state_29021 = G__29066;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_29021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_29021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___29050,tc,fc))
})();
var state__28366__auto__ = (function (){var statearr_29045 = f__28365__auto__.call(null);
(statearr_29045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___29050);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___29050,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__){
return (function (state_29130){
var state_val_29131 = (state_29130[(1)]);
if((state_val_29131 === (7))){
var inst_29126 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29132_29153 = state_29130__$1;
(statearr_29132_29153[(2)] = inst_29126);

(statearr_29132_29153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (1))){
var inst_29110 = init;
var state_29130__$1 = (function (){var statearr_29133 = state_29130;
(statearr_29133[(7)] = inst_29110);

return statearr_29133;
})();
var statearr_29134_29154 = state_29130__$1;
(statearr_29134_29154[(2)] = null);

(statearr_29134_29154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (4))){
var inst_29113 = (state_29130[(8)]);
var inst_29113__$1 = (state_29130[(2)]);
var inst_29114 = (inst_29113__$1 == null);
var state_29130__$1 = (function (){var statearr_29135 = state_29130;
(statearr_29135[(8)] = inst_29113__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_29114)){
var statearr_29136_29155 = state_29130__$1;
(statearr_29136_29155[(1)] = (5));

} else {
var statearr_29137_29156 = state_29130__$1;
(statearr_29137_29156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (6))){
var inst_29113 = (state_29130[(8)]);
var inst_29110 = (state_29130[(7)]);
var inst_29117 = (state_29130[(9)]);
var inst_29117__$1 = f.call(null,inst_29110,inst_29113);
var inst_29118 = cljs.core.reduced_QMARK_.call(null,inst_29117__$1);
var state_29130__$1 = (function (){var statearr_29138 = state_29130;
(statearr_29138[(9)] = inst_29117__$1);

return statearr_29138;
})();
if(inst_29118){
var statearr_29139_29157 = state_29130__$1;
(statearr_29139_29157[(1)] = (8));

} else {
var statearr_29140_29158 = state_29130__$1;
(statearr_29140_29158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (3))){
var inst_29128 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29130__$1,inst_29128);
} else {
if((state_val_29131 === (2))){
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29130__$1,(4),ch);
} else {
if((state_val_29131 === (9))){
var inst_29117 = (state_29130[(9)]);
var inst_29110 = inst_29117;
var state_29130__$1 = (function (){var statearr_29141 = state_29130;
(statearr_29141[(7)] = inst_29110);

return statearr_29141;
})();
var statearr_29142_29159 = state_29130__$1;
(statearr_29142_29159[(2)] = null);

(statearr_29142_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (5))){
var inst_29110 = (state_29130[(7)]);
var state_29130__$1 = state_29130;
var statearr_29143_29160 = state_29130__$1;
(statearr_29143_29160[(2)] = inst_29110);

(statearr_29143_29160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (10))){
var inst_29124 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29144_29161 = state_29130__$1;
(statearr_29144_29161[(2)] = inst_29124);

(statearr_29144_29161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (8))){
var inst_29117 = (state_29130[(9)]);
var inst_29120 = cljs.core.deref.call(null,inst_29117);
var state_29130__$1 = state_29130;
var statearr_29145_29162 = state_29130__$1;
(statearr_29145_29162[(2)] = inst_29120);

(statearr_29145_29162[(1)] = (10));


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
});})(c__28364__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28253__auto____0 = (function (){
var statearr_29149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29149[(0)] = cljs$core$async$reduce_$_state_machine__28253__auto__);

(statearr_29149[(1)] = (1));

return statearr_29149;
});
var cljs$core$async$reduce_$_state_machine__28253__auto____1 = (function (state_29130){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_29130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e29150){if((e29150 instanceof Object)){
var ex__28256__auto__ = e29150;
var statearr_29151_29163 = state_29130;
(statearr_29151_29163[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29164 = state_29130;
state_29130 = G__29164;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28253__auto__ = function(state_29130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28253__auto____1.call(this,state_29130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28253__auto____0;
cljs$core$async$reduce_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28253__auto____1;
return cljs$core$async$reduce_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__))
})();
var state__28366__auto__ = (function (){var statearr_29152 = f__28365__auto__.call(null);
(statearr_29152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__))
);

return c__28364__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29165 = [];
var len__26205__auto___29217 = arguments.length;
var i__26206__auto___29218 = (0);
while(true){
if((i__26206__auto___29218 < len__26205__auto___29217)){
args29165.push((arguments[i__26206__auto___29218]));

var G__29219 = (i__26206__auto___29218 + (1));
i__26206__auto___29218 = G__29219;
continue;
} else {
}
break;
}

var G__29167 = args29165.length;
switch (G__29167) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29165.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (7))){
var inst_29174 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29194_29221 = state_29192__$1;
(statearr_29194_29221[(2)] = inst_29174);

(statearr_29194_29221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (1))){
var inst_29168 = cljs.core.seq.call(null,coll);
var inst_29169 = inst_29168;
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(7)] = inst_29169);

return statearr_29195;
})();
var statearr_29196_29222 = state_29192__$1;
(statearr_29196_29222[(2)] = null);

(statearr_29196_29222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (4))){
var inst_29169 = (state_29192[(7)]);
var inst_29172 = cljs.core.first.call(null,inst_29169);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29192__$1,(7),ch,inst_29172);
} else {
if((state_val_29193 === (13))){
var inst_29186 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29197_29223 = state_29192__$1;
(statearr_29197_29223[(2)] = inst_29186);

(statearr_29197_29223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (6))){
var inst_29177 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29177)){
var statearr_29198_29224 = state_29192__$1;
(statearr_29198_29224[(1)] = (8));

} else {
var statearr_29199_29225 = state_29192__$1;
(statearr_29199_29225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (3))){
var inst_29190 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29192__$1,inst_29190);
} else {
if((state_val_29193 === (12))){
var state_29192__$1 = state_29192;
var statearr_29200_29226 = state_29192__$1;
(statearr_29200_29226[(2)] = null);

(statearr_29200_29226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (2))){
var inst_29169 = (state_29192[(7)]);
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29169)){
var statearr_29201_29227 = state_29192__$1;
(statearr_29201_29227[(1)] = (4));

} else {
var statearr_29202_29228 = state_29192__$1;
(statearr_29202_29228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (11))){
var inst_29183 = cljs.core.async.close_BANG_.call(null,ch);
var state_29192__$1 = state_29192;
var statearr_29203_29229 = state_29192__$1;
(statearr_29203_29229[(2)] = inst_29183);

(statearr_29203_29229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (9))){
var state_29192__$1 = state_29192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29204_29230 = state_29192__$1;
(statearr_29204_29230[(1)] = (11));

} else {
var statearr_29205_29231 = state_29192__$1;
(statearr_29205_29231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (5))){
var inst_29169 = (state_29192[(7)]);
var state_29192__$1 = state_29192;
var statearr_29206_29232 = state_29192__$1;
(statearr_29206_29232[(2)] = inst_29169);

(statearr_29206_29232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (10))){
var inst_29188 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29207_29233 = state_29192__$1;
(statearr_29207_29233[(2)] = inst_29188);

(statearr_29207_29233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (8))){
var inst_29169 = (state_29192[(7)]);
var inst_29179 = cljs.core.next.call(null,inst_29169);
var inst_29169__$1 = inst_29179;
var state_29192__$1 = (function (){var statearr_29208 = state_29192;
(statearr_29208[(7)] = inst_29169__$1);

return statearr_29208;
})();
var statearr_29209_29234 = state_29192__$1;
(statearr_29209_29234[(2)] = null);

(statearr_29209_29234[(1)] = (2));


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
});})(c__28364__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_29213 = [null,null,null,null,null,null,null,null];
(statearr_29213[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_29213[(1)] = (1));

return statearr_29213;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_29192){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_29192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e29214){if((e29214 instanceof Object)){
var ex__28256__auto__ = e29214;
var statearr_29215_29235 = state_29192;
(statearr_29215_29235[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29236 = state_29192;
state_29192 = G__29236;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__))
})();
var state__28366__auto__ = (function (){var statearr_29216 = f__28365__auto__.call(null);
(statearr_29216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__))
);

return c__28364__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25793__auto__ = (((_ == null))?null:_);
var m__25794__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,_);
} else {
var m__25794__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25794__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,ch);
} else {
var m__25794__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m);
} else {
var m__25794__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29462 = (function (mult,ch,cs,meta29463){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29463 = meta29463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29464,meta29463__$1){
var self__ = this;
var _29464__$1 = this;
return (new cljs.core.async.t_cljs$core$async29462(self__.mult,self__.ch,self__.cs,meta29463__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29464){
var self__ = this;
var _29464__$1 = this;
return self__.meta29463;
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29463","meta29463",1367979442,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29462";

cljs.core.async.t_cljs$core$async29462.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async29462");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29462 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29462(mult__$1,ch__$1,cs__$1,meta29463){
return (new cljs.core.async.t_cljs$core$async29462(mult__$1,ch__$1,cs__$1,meta29463));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29462(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28364__auto___29687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___29687,cs,m,dchan,dctr,done){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___29687,cs,m,dchan,dctr,done){
return (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (7))){
var inst_29595 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29601_29688 = state_29599__$1;
(statearr_29601_29688[(2)] = inst_29595);

(statearr_29601_29688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (20))){
var inst_29498 = (state_29599[(7)]);
var inst_29510 = cljs.core.first.call(null,inst_29498);
var inst_29511 = cljs.core.nth.call(null,inst_29510,(0),null);
var inst_29512 = cljs.core.nth.call(null,inst_29510,(1),null);
var state_29599__$1 = (function (){var statearr_29602 = state_29599;
(statearr_29602[(8)] = inst_29511);

return statearr_29602;
})();
if(cljs.core.truth_(inst_29512)){
var statearr_29603_29689 = state_29599__$1;
(statearr_29603_29689[(1)] = (22));

} else {
var statearr_29604_29690 = state_29599__$1;
(statearr_29604_29690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (27))){
var inst_29547 = (state_29599[(9)]);
var inst_29467 = (state_29599[(10)]);
var inst_29542 = (state_29599[(11)]);
var inst_29540 = (state_29599[(12)]);
var inst_29547__$1 = cljs.core._nth.call(null,inst_29540,inst_29542);
var inst_29548 = cljs.core.async.put_BANG_.call(null,inst_29547__$1,inst_29467,done);
var state_29599__$1 = (function (){var statearr_29605 = state_29599;
(statearr_29605[(9)] = inst_29547__$1);

return statearr_29605;
})();
if(cljs.core.truth_(inst_29548)){
var statearr_29606_29691 = state_29599__$1;
(statearr_29606_29691[(1)] = (30));

} else {
var statearr_29607_29692 = state_29599__$1;
(statearr_29607_29692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (1))){
var state_29599__$1 = state_29599;
var statearr_29608_29693 = state_29599__$1;
(statearr_29608_29693[(2)] = null);

(statearr_29608_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (24))){
var inst_29498 = (state_29599[(7)]);
var inst_29517 = (state_29599[(2)]);
var inst_29518 = cljs.core.next.call(null,inst_29498);
var inst_29476 = inst_29518;
var inst_29477 = null;
var inst_29478 = (0);
var inst_29479 = (0);
var state_29599__$1 = (function (){var statearr_29609 = state_29599;
(statearr_29609[(13)] = inst_29479);

(statearr_29609[(14)] = inst_29477);

(statearr_29609[(15)] = inst_29476);

(statearr_29609[(16)] = inst_29517);

(statearr_29609[(17)] = inst_29478);

return statearr_29609;
})();
var statearr_29610_29694 = state_29599__$1;
(statearr_29610_29694[(2)] = null);

(statearr_29610_29694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (39))){
var state_29599__$1 = state_29599;
var statearr_29614_29695 = state_29599__$1;
(statearr_29614_29695[(2)] = null);

(statearr_29614_29695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (4))){
var inst_29467 = (state_29599[(10)]);
var inst_29467__$1 = (state_29599[(2)]);
var inst_29468 = (inst_29467__$1 == null);
var state_29599__$1 = (function (){var statearr_29615 = state_29599;
(statearr_29615[(10)] = inst_29467__$1);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29616_29696 = state_29599__$1;
(statearr_29616_29696[(1)] = (5));

} else {
var statearr_29617_29697 = state_29599__$1;
(statearr_29617_29697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (15))){
var inst_29479 = (state_29599[(13)]);
var inst_29477 = (state_29599[(14)]);
var inst_29476 = (state_29599[(15)]);
var inst_29478 = (state_29599[(17)]);
var inst_29494 = (state_29599[(2)]);
var inst_29495 = (inst_29479 + (1));
var tmp29611 = inst_29477;
var tmp29612 = inst_29476;
var tmp29613 = inst_29478;
var inst_29476__$1 = tmp29612;
var inst_29477__$1 = tmp29611;
var inst_29478__$1 = tmp29613;
var inst_29479__$1 = inst_29495;
var state_29599__$1 = (function (){var statearr_29618 = state_29599;
(statearr_29618[(13)] = inst_29479__$1);

(statearr_29618[(14)] = inst_29477__$1);

(statearr_29618[(15)] = inst_29476__$1);

(statearr_29618[(17)] = inst_29478__$1);

(statearr_29618[(18)] = inst_29494);

return statearr_29618;
})();
var statearr_29619_29698 = state_29599__$1;
(statearr_29619_29698[(2)] = null);

(statearr_29619_29698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (21))){
var inst_29521 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29623_29699 = state_29599__$1;
(statearr_29623_29699[(2)] = inst_29521);

(statearr_29623_29699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (31))){
var inst_29547 = (state_29599[(9)]);
var inst_29551 = done.call(null,null);
var inst_29552 = cljs.core.async.untap_STAR_.call(null,m,inst_29547);
var state_29599__$1 = (function (){var statearr_29624 = state_29599;
(statearr_29624[(19)] = inst_29551);

return statearr_29624;
})();
var statearr_29625_29700 = state_29599__$1;
(statearr_29625_29700[(2)] = inst_29552);

(statearr_29625_29700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (32))){
var inst_29539 = (state_29599[(20)]);
var inst_29542 = (state_29599[(11)]);
var inst_29540 = (state_29599[(12)]);
var inst_29541 = (state_29599[(21)]);
var inst_29554 = (state_29599[(2)]);
var inst_29555 = (inst_29542 + (1));
var tmp29620 = inst_29539;
var tmp29621 = inst_29540;
var tmp29622 = inst_29541;
var inst_29539__$1 = tmp29620;
var inst_29540__$1 = tmp29621;
var inst_29541__$1 = tmp29622;
var inst_29542__$1 = inst_29555;
var state_29599__$1 = (function (){var statearr_29626 = state_29599;
(statearr_29626[(22)] = inst_29554);

(statearr_29626[(20)] = inst_29539__$1);

(statearr_29626[(11)] = inst_29542__$1);

(statearr_29626[(12)] = inst_29540__$1);

(statearr_29626[(21)] = inst_29541__$1);

return statearr_29626;
})();
var statearr_29627_29701 = state_29599__$1;
(statearr_29627_29701[(2)] = null);

(statearr_29627_29701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (40))){
var inst_29567 = (state_29599[(23)]);
var inst_29571 = done.call(null,null);
var inst_29572 = cljs.core.async.untap_STAR_.call(null,m,inst_29567);
var state_29599__$1 = (function (){var statearr_29628 = state_29599;
(statearr_29628[(24)] = inst_29571);

return statearr_29628;
})();
var statearr_29629_29702 = state_29599__$1;
(statearr_29629_29702[(2)] = inst_29572);

(statearr_29629_29702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (33))){
var inst_29558 = (state_29599[(25)]);
var inst_29560 = cljs.core.chunked_seq_QMARK_.call(null,inst_29558);
var state_29599__$1 = state_29599;
if(inst_29560){
var statearr_29630_29703 = state_29599__$1;
(statearr_29630_29703[(1)] = (36));

} else {
var statearr_29631_29704 = state_29599__$1;
(statearr_29631_29704[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (13))){
var inst_29488 = (state_29599[(26)]);
var inst_29491 = cljs.core.async.close_BANG_.call(null,inst_29488);
var state_29599__$1 = state_29599;
var statearr_29632_29705 = state_29599__$1;
(statearr_29632_29705[(2)] = inst_29491);

(statearr_29632_29705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (22))){
var inst_29511 = (state_29599[(8)]);
var inst_29514 = cljs.core.async.close_BANG_.call(null,inst_29511);
var state_29599__$1 = state_29599;
var statearr_29633_29706 = state_29599__$1;
(statearr_29633_29706[(2)] = inst_29514);

(statearr_29633_29706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (36))){
var inst_29558 = (state_29599[(25)]);
var inst_29562 = cljs.core.chunk_first.call(null,inst_29558);
var inst_29563 = cljs.core.chunk_rest.call(null,inst_29558);
var inst_29564 = cljs.core.count.call(null,inst_29562);
var inst_29539 = inst_29563;
var inst_29540 = inst_29562;
var inst_29541 = inst_29564;
var inst_29542 = (0);
var state_29599__$1 = (function (){var statearr_29634 = state_29599;
(statearr_29634[(20)] = inst_29539);

(statearr_29634[(11)] = inst_29542);

(statearr_29634[(12)] = inst_29540);

(statearr_29634[(21)] = inst_29541);

return statearr_29634;
})();
var statearr_29635_29707 = state_29599__$1;
(statearr_29635_29707[(2)] = null);

(statearr_29635_29707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (41))){
var inst_29558 = (state_29599[(25)]);
var inst_29574 = (state_29599[(2)]);
var inst_29575 = cljs.core.next.call(null,inst_29558);
var inst_29539 = inst_29575;
var inst_29540 = null;
var inst_29541 = (0);
var inst_29542 = (0);
var state_29599__$1 = (function (){var statearr_29636 = state_29599;
(statearr_29636[(20)] = inst_29539);

(statearr_29636[(11)] = inst_29542);

(statearr_29636[(27)] = inst_29574);

(statearr_29636[(12)] = inst_29540);

(statearr_29636[(21)] = inst_29541);

return statearr_29636;
})();
var statearr_29637_29708 = state_29599__$1;
(statearr_29637_29708[(2)] = null);

(statearr_29637_29708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (43))){
var state_29599__$1 = state_29599;
var statearr_29638_29709 = state_29599__$1;
(statearr_29638_29709[(2)] = null);

(statearr_29638_29709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (29))){
var inst_29583 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29639_29710 = state_29599__$1;
(statearr_29639_29710[(2)] = inst_29583);

(statearr_29639_29710[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (44))){
var inst_29592 = (state_29599[(2)]);
var state_29599__$1 = (function (){var statearr_29640 = state_29599;
(statearr_29640[(28)] = inst_29592);

return statearr_29640;
})();
var statearr_29641_29711 = state_29599__$1;
(statearr_29641_29711[(2)] = null);

(statearr_29641_29711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (6))){
var inst_29531 = (state_29599[(29)]);
var inst_29530 = cljs.core.deref.call(null,cs);
var inst_29531__$1 = cljs.core.keys.call(null,inst_29530);
var inst_29532 = cljs.core.count.call(null,inst_29531__$1);
var inst_29533 = cljs.core.reset_BANG_.call(null,dctr,inst_29532);
var inst_29538 = cljs.core.seq.call(null,inst_29531__$1);
var inst_29539 = inst_29538;
var inst_29540 = null;
var inst_29541 = (0);
var inst_29542 = (0);
var state_29599__$1 = (function (){var statearr_29642 = state_29599;
(statearr_29642[(20)] = inst_29539);

(statearr_29642[(11)] = inst_29542);

(statearr_29642[(30)] = inst_29533);

(statearr_29642[(29)] = inst_29531__$1);

(statearr_29642[(12)] = inst_29540);

(statearr_29642[(21)] = inst_29541);

return statearr_29642;
})();
var statearr_29643_29712 = state_29599__$1;
(statearr_29643_29712[(2)] = null);

(statearr_29643_29712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (28))){
var inst_29539 = (state_29599[(20)]);
var inst_29558 = (state_29599[(25)]);
var inst_29558__$1 = cljs.core.seq.call(null,inst_29539);
var state_29599__$1 = (function (){var statearr_29644 = state_29599;
(statearr_29644[(25)] = inst_29558__$1);

return statearr_29644;
})();
if(inst_29558__$1){
var statearr_29645_29713 = state_29599__$1;
(statearr_29645_29713[(1)] = (33));

} else {
var statearr_29646_29714 = state_29599__$1;
(statearr_29646_29714[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (25))){
var inst_29542 = (state_29599[(11)]);
var inst_29541 = (state_29599[(21)]);
var inst_29544 = (inst_29542 < inst_29541);
var inst_29545 = inst_29544;
var state_29599__$1 = state_29599;
if(cljs.core.truth_(inst_29545)){
var statearr_29647_29715 = state_29599__$1;
(statearr_29647_29715[(1)] = (27));

} else {
var statearr_29648_29716 = state_29599__$1;
(statearr_29648_29716[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (34))){
var state_29599__$1 = state_29599;
var statearr_29649_29717 = state_29599__$1;
(statearr_29649_29717[(2)] = null);

(statearr_29649_29717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (17))){
var state_29599__$1 = state_29599;
var statearr_29650_29718 = state_29599__$1;
(statearr_29650_29718[(2)] = null);

(statearr_29650_29718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (3))){
var inst_29597 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else {
if((state_val_29600 === (12))){
var inst_29526 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29651_29719 = state_29599__$1;
(statearr_29651_29719[(2)] = inst_29526);

(statearr_29651_29719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (2))){
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(4),ch);
} else {
if((state_val_29600 === (23))){
var state_29599__$1 = state_29599;
var statearr_29652_29720 = state_29599__$1;
(statearr_29652_29720[(2)] = null);

(statearr_29652_29720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (35))){
var inst_29581 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29653_29721 = state_29599__$1;
(statearr_29653_29721[(2)] = inst_29581);

(statearr_29653_29721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (19))){
var inst_29498 = (state_29599[(7)]);
var inst_29502 = cljs.core.chunk_first.call(null,inst_29498);
var inst_29503 = cljs.core.chunk_rest.call(null,inst_29498);
var inst_29504 = cljs.core.count.call(null,inst_29502);
var inst_29476 = inst_29503;
var inst_29477 = inst_29502;
var inst_29478 = inst_29504;
var inst_29479 = (0);
var state_29599__$1 = (function (){var statearr_29654 = state_29599;
(statearr_29654[(13)] = inst_29479);

(statearr_29654[(14)] = inst_29477);

(statearr_29654[(15)] = inst_29476);

(statearr_29654[(17)] = inst_29478);

return statearr_29654;
})();
var statearr_29655_29722 = state_29599__$1;
(statearr_29655_29722[(2)] = null);

(statearr_29655_29722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (11))){
var inst_29476 = (state_29599[(15)]);
var inst_29498 = (state_29599[(7)]);
var inst_29498__$1 = cljs.core.seq.call(null,inst_29476);
var state_29599__$1 = (function (){var statearr_29656 = state_29599;
(statearr_29656[(7)] = inst_29498__$1);

return statearr_29656;
})();
if(inst_29498__$1){
var statearr_29657_29723 = state_29599__$1;
(statearr_29657_29723[(1)] = (16));

} else {
var statearr_29658_29724 = state_29599__$1;
(statearr_29658_29724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (9))){
var inst_29528 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29659_29725 = state_29599__$1;
(statearr_29659_29725[(2)] = inst_29528);

(statearr_29659_29725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (5))){
var inst_29474 = cljs.core.deref.call(null,cs);
var inst_29475 = cljs.core.seq.call(null,inst_29474);
var inst_29476 = inst_29475;
var inst_29477 = null;
var inst_29478 = (0);
var inst_29479 = (0);
var state_29599__$1 = (function (){var statearr_29660 = state_29599;
(statearr_29660[(13)] = inst_29479);

(statearr_29660[(14)] = inst_29477);

(statearr_29660[(15)] = inst_29476);

(statearr_29660[(17)] = inst_29478);

return statearr_29660;
})();
var statearr_29661_29726 = state_29599__$1;
(statearr_29661_29726[(2)] = null);

(statearr_29661_29726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (14))){
var state_29599__$1 = state_29599;
var statearr_29662_29727 = state_29599__$1;
(statearr_29662_29727[(2)] = null);

(statearr_29662_29727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (45))){
var inst_29589 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29663_29728 = state_29599__$1;
(statearr_29663_29728[(2)] = inst_29589);

(statearr_29663_29728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (26))){
var inst_29531 = (state_29599[(29)]);
var inst_29585 = (state_29599[(2)]);
var inst_29586 = cljs.core.seq.call(null,inst_29531);
var state_29599__$1 = (function (){var statearr_29664 = state_29599;
(statearr_29664[(31)] = inst_29585);

return statearr_29664;
})();
if(inst_29586){
var statearr_29665_29729 = state_29599__$1;
(statearr_29665_29729[(1)] = (42));

} else {
var statearr_29666_29730 = state_29599__$1;
(statearr_29666_29730[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (16))){
var inst_29498 = (state_29599[(7)]);
var inst_29500 = cljs.core.chunked_seq_QMARK_.call(null,inst_29498);
var state_29599__$1 = state_29599;
if(inst_29500){
var statearr_29667_29731 = state_29599__$1;
(statearr_29667_29731[(1)] = (19));

} else {
var statearr_29668_29732 = state_29599__$1;
(statearr_29668_29732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (38))){
var inst_29578 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29669_29733 = state_29599__$1;
(statearr_29669_29733[(2)] = inst_29578);

(statearr_29669_29733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (30))){
var state_29599__$1 = state_29599;
var statearr_29670_29734 = state_29599__$1;
(statearr_29670_29734[(2)] = null);

(statearr_29670_29734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (10))){
var inst_29479 = (state_29599[(13)]);
var inst_29477 = (state_29599[(14)]);
var inst_29487 = cljs.core._nth.call(null,inst_29477,inst_29479);
var inst_29488 = cljs.core.nth.call(null,inst_29487,(0),null);
var inst_29489 = cljs.core.nth.call(null,inst_29487,(1),null);
var state_29599__$1 = (function (){var statearr_29671 = state_29599;
(statearr_29671[(26)] = inst_29488);

return statearr_29671;
})();
if(cljs.core.truth_(inst_29489)){
var statearr_29672_29735 = state_29599__$1;
(statearr_29672_29735[(1)] = (13));

} else {
var statearr_29673_29736 = state_29599__$1;
(statearr_29673_29736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (18))){
var inst_29524 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29674_29737 = state_29599__$1;
(statearr_29674_29737[(2)] = inst_29524);

(statearr_29674_29737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (42))){
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(45),dchan);
} else {
if((state_val_29600 === (37))){
var inst_29467 = (state_29599[(10)]);
var inst_29558 = (state_29599[(25)]);
var inst_29567 = (state_29599[(23)]);
var inst_29567__$1 = cljs.core.first.call(null,inst_29558);
var inst_29568 = cljs.core.async.put_BANG_.call(null,inst_29567__$1,inst_29467,done);
var state_29599__$1 = (function (){var statearr_29675 = state_29599;
(statearr_29675[(23)] = inst_29567__$1);

return statearr_29675;
})();
if(cljs.core.truth_(inst_29568)){
var statearr_29676_29738 = state_29599__$1;
(statearr_29676_29738[(1)] = (39));

} else {
var statearr_29677_29739 = state_29599__$1;
(statearr_29677_29739[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (8))){
var inst_29479 = (state_29599[(13)]);
var inst_29478 = (state_29599[(17)]);
var inst_29481 = (inst_29479 < inst_29478);
var inst_29482 = inst_29481;
var state_29599__$1 = state_29599;
if(cljs.core.truth_(inst_29482)){
var statearr_29678_29740 = state_29599__$1;
(statearr_29678_29740[(1)] = (10));

} else {
var statearr_29679_29741 = state_29599__$1;
(statearr_29679_29741[(1)] = (11));

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
});})(c__28364__auto___29687,cs,m,dchan,dctr,done))
;
return ((function (switch__28252__auto__,c__28364__auto___29687,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28253__auto__ = null;
var cljs$core$async$mult_$_state_machine__28253__auto____0 = (function (){
var statearr_29683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29683[(0)] = cljs$core$async$mult_$_state_machine__28253__auto__);

(statearr_29683[(1)] = (1));

return statearr_29683;
});
var cljs$core$async$mult_$_state_machine__28253__auto____1 = (function (state_29599){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_29599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e29684){if((e29684 instanceof Object)){
var ex__28256__auto__ = e29684;
var statearr_29685_29742 = state_29599;
(statearr_29685_29742[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29743 = state_29599;
state_29599 = G__29743;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28253__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28253__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28253__auto____0;
cljs$core$async$mult_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28253__auto____1;
return cljs$core$async$mult_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___29687,cs,m,dchan,dctr,done))
})();
var state__28366__auto__ = (function (){var statearr_29686 = f__28365__auto__.call(null);
(statearr_29686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___29687);

return statearr_29686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___29687,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29744 = [];
var len__26205__auto___29747 = arguments.length;
var i__26206__auto___29748 = (0);
while(true){
if((i__26206__auto___29748 < len__26205__auto___29747)){
args29744.push((arguments[i__26206__auto___29748]));

var G__29749 = (i__26206__auto___29748 + (1));
i__26206__auto___29748 = G__29749;
continue;
} else {
}
break;
}

var G__29746 = args29744.length;
switch (G__29746) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29744.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,ch);
} else {
var m__25794__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,ch);
} else {
var m__25794__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m);
} else {
var m__25794__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,state_map);
} else {
var m__25794__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25793__auto__ = (((m == null))?null:m);
var m__25794__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,m,mode);
} else {
var m__25794__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26212__auto__ = [];
var len__26205__auto___29761 = arguments.length;
var i__26206__auto___29762 = (0);
while(true){
if((i__26206__auto___29762 < len__26205__auto___29761)){
args__26212__auto__.push((arguments[i__26206__auto___29762]));

var G__29763 = (i__26206__auto___29762 + (1));
i__26206__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var argseq__26213__auto__ = ((((3) < args__26212__auto__.length))?(new cljs.core.IndexedSeq(args__26212__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26213__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29755){
var map__29756 = p__29755;
var map__29756__$1 = ((((!((map__29756 == null)))?((((map__29756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29756):map__29756);
var opts = map__29756__$1;
var statearr_29758_29764 = state;
(statearr_29758_29764[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29756,map__29756__$1,opts){
return (function (val){
var statearr_29759_29765 = state;
(statearr_29759_29765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29756,map__29756__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29760_29766 = state;
(statearr_29760_29766[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29751){
var G__29752 = cljs.core.first.call(null,seq29751);
var seq29751__$1 = cljs.core.next.call(null,seq29751);
var G__29753 = cljs.core.first.call(null,seq29751__$1);
var seq29751__$2 = cljs.core.next.call(null,seq29751__$1);
var G__29754 = cljs.core.first.call(null,seq29751__$2);
var seq29751__$3 = cljs.core.next.call(null,seq29751__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29752,G__29753,G__29754,seq29751__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29932 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29933){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29933 = meta29933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29934,meta29933__$1){
var self__ = this;
var _29934__$1 = this;
return (new cljs.core.async.t_cljs$core$async29932(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29933__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29934){
var self__ = this;
var _29934__$1 = this;
return self__.meta29933;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29933","meta29933",-400324709,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29932";

cljs.core.async.t_cljs$core$async29932.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async29932");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29932 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29932(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29933){
return (new cljs.core.async.t_cljs$core$async29932(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29933));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29932(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28364__auto___30097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30034){
var state_val_30035 = (state_30034[(1)]);
if((state_val_30035 === (7))){
var inst_29950 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30036_30098 = state_30034__$1;
(statearr_30036_30098[(2)] = inst_29950);

(statearr_30036_30098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (20))){
var inst_29962 = (state_30034[(7)]);
var state_30034__$1 = state_30034;
var statearr_30037_30099 = state_30034__$1;
(statearr_30037_30099[(2)] = inst_29962);

(statearr_30037_30099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (27))){
var state_30034__$1 = state_30034;
var statearr_30038_30100 = state_30034__$1;
(statearr_30038_30100[(2)] = null);

(statearr_30038_30100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (1))){
var inst_29938 = (state_30034[(8)]);
var inst_29938__$1 = calc_state.call(null);
var inst_29940 = (inst_29938__$1 == null);
var inst_29941 = cljs.core.not.call(null,inst_29940);
var state_30034__$1 = (function (){var statearr_30039 = state_30034;
(statearr_30039[(8)] = inst_29938__$1);

return statearr_30039;
})();
if(inst_29941){
var statearr_30040_30101 = state_30034__$1;
(statearr_30040_30101[(1)] = (2));

} else {
var statearr_30041_30102 = state_30034__$1;
(statearr_30041_30102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (24))){
var inst_29994 = (state_30034[(9)]);
var inst_30008 = (state_30034[(10)]);
var inst_29985 = (state_30034[(11)]);
var inst_30008__$1 = inst_29985.call(null,inst_29994);
var state_30034__$1 = (function (){var statearr_30042 = state_30034;
(statearr_30042[(10)] = inst_30008__$1);

return statearr_30042;
})();
if(cljs.core.truth_(inst_30008__$1)){
var statearr_30043_30103 = state_30034__$1;
(statearr_30043_30103[(1)] = (29));

} else {
var statearr_30044_30104 = state_30034__$1;
(statearr_30044_30104[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (4))){
var inst_29953 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29953)){
var statearr_30045_30105 = state_30034__$1;
(statearr_30045_30105[(1)] = (8));

} else {
var statearr_30046_30106 = state_30034__$1;
(statearr_30046_30106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (15))){
var inst_29979 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29979)){
var statearr_30047_30107 = state_30034__$1;
(statearr_30047_30107[(1)] = (19));

} else {
var statearr_30048_30108 = state_30034__$1;
(statearr_30048_30108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (21))){
var inst_29984 = (state_30034[(12)]);
var inst_29984__$1 = (state_30034[(2)]);
var inst_29985 = cljs.core.get.call(null,inst_29984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29986 = cljs.core.get.call(null,inst_29984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29987 = cljs.core.get.call(null,inst_29984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30034__$1 = (function (){var statearr_30049 = state_30034;
(statearr_30049[(13)] = inst_29986);

(statearr_30049[(11)] = inst_29985);

(statearr_30049[(12)] = inst_29984__$1);

return statearr_30049;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30034__$1,(22),inst_29987);
} else {
if((state_val_30035 === (31))){
var inst_30016 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_30016)){
var statearr_30050_30109 = state_30034__$1;
(statearr_30050_30109[(1)] = (32));

} else {
var statearr_30051_30110 = state_30034__$1;
(statearr_30051_30110[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (32))){
var inst_29993 = (state_30034[(14)]);
var state_30034__$1 = state_30034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30034__$1,(35),out,inst_29993);
} else {
if((state_val_30035 === (33))){
var inst_29984 = (state_30034[(12)]);
var inst_29962 = inst_29984;
var state_30034__$1 = (function (){var statearr_30052 = state_30034;
(statearr_30052[(7)] = inst_29962);

return statearr_30052;
})();
var statearr_30053_30111 = state_30034__$1;
(statearr_30053_30111[(2)] = null);

(statearr_30053_30111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (13))){
var inst_29962 = (state_30034[(7)]);
var inst_29969 = inst_29962.cljs$lang$protocol_mask$partition0$;
var inst_29970 = (inst_29969 & (64));
var inst_29971 = inst_29962.cljs$core$ISeq$;
var inst_29972 = (inst_29970) || (inst_29971);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29972)){
var statearr_30054_30112 = state_30034__$1;
(statearr_30054_30112[(1)] = (16));

} else {
var statearr_30055_30113 = state_30034__$1;
(statearr_30055_30113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (22))){
var inst_29994 = (state_30034[(9)]);
var inst_29993 = (state_30034[(14)]);
var inst_29992 = (state_30034[(2)]);
var inst_29993__$1 = cljs.core.nth.call(null,inst_29992,(0),null);
var inst_29994__$1 = cljs.core.nth.call(null,inst_29992,(1),null);
var inst_29995 = (inst_29993__$1 == null);
var inst_29996 = cljs.core._EQ_.call(null,inst_29994__$1,change);
var inst_29997 = (inst_29995) || (inst_29996);
var state_30034__$1 = (function (){var statearr_30056 = state_30034;
(statearr_30056[(9)] = inst_29994__$1);

(statearr_30056[(14)] = inst_29993__$1);

return statearr_30056;
})();
if(cljs.core.truth_(inst_29997)){
var statearr_30057_30114 = state_30034__$1;
(statearr_30057_30114[(1)] = (23));

} else {
var statearr_30058_30115 = state_30034__$1;
(statearr_30058_30115[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (36))){
var inst_29984 = (state_30034[(12)]);
var inst_29962 = inst_29984;
var state_30034__$1 = (function (){var statearr_30059 = state_30034;
(statearr_30059[(7)] = inst_29962);

return statearr_30059;
})();
var statearr_30060_30116 = state_30034__$1;
(statearr_30060_30116[(2)] = null);

(statearr_30060_30116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (29))){
var inst_30008 = (state_30034[(10)]);
var state_30034__$1 = state_30034;
var statearr_30061_30117 = state_30034__$1;
(statearr_30061_30117[(2)] = inst_30008);

(statearr_30061_30117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (6))){
var state_30034__$1 = state_30034;
var statearr_30062_30118 = state_30034__$1;
(statearr_30062_30118[(2)] = false);

(statearr_30062_30118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (28))){
var inst_30004 = (state_30034[(2)]);
var inst_30005 = calc_state.call(null);
var inst_29962 = inst_30005;
var state_30034__$1 = (function (){var statearr_30063 = state_30034;
(statearr_30063[(15)] = inst_30004);

(statearr_30063[(7)] = inst_29962);

return statearr_30063;
})();
var statearr_30064_30119 = state_30034__$1;
(statearr_30064_30119[(2)] = null);

(statearr_30064_30119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (25))){
var inst_30030 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30065_30120 = state_30034__$1;
(statearr_30065_30120[(2)] = inst_30030);

(statearr_30065_30120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (34))){
var inst_30028 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30066_30121 = state_30034__$1;
(statearr_30066_30121[(2)] = inst_30028);

(statearr_30066_30121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (17))){
var state_30034__$1 = state_30034;
var statearr_30067_30122 = state_30034__$1;
(statearr_30067_30122[(2)] = false);

(statearr_30067_30122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (3))){
var state_30034__$1 = state_30034;
var statearr_30068_30123 = state_30034__$1;
(statearr_30068_30123[(2)] = false);

(statearr_30068_30123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (12))){
var inst_30032 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30034__$1,inst_30032);
} else {
if((state_val_30035 === (2))){
var inst_29938 = (state_30034[(8)]);
var inst_29943 = inst_29938.cljs$lang$protocol_mask$partition0$;
var inst_29944 = (inst_29943 & (64));
var inst_29945 = inst_29938.cljs$core$ISeq$;
var inst_29946 = (inst_29944) || (inst_29945);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29946)){
var statearr_30069_30124 = state_30034__$1;
(statearr_30069_30124[(1)] = (5));

} else {
var statearr_30070_30125 = state_30034__$1;
(statearr_30070_30125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (23))){
var inst_29993 = (state_30034[(14)]);
var inst_29999 = (inst_29993 == null);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29999)){
var statearr_30071_30126 = state_30034__$1;
(statearr_30071_30126[(1)] = (26));

} else {
var statearr_30072_30127 = state_30034__$1;
(statearr_30072_30127[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (35))){
var inst_30019 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_30019)){
var statearr_30073_30128 = state_30034__$1;
(statearr_30073_30128[(1)] = (36));

} else {
var statearr_30074_30129 = state_30034__$1;
(statearr_30074_30129[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (19))){
var inst_29962 = (state_30034[(7)]);
var inst_29981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29962);
var state_30034__$1 = state_30034;
var statearr_30075_30130 = state_30034__$1;
(statearr_30075_30130[(2)] = inst_29981);

(statearr_30075_30130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (11))){
var inst_29962 = (state_30034[(7)]);
var inst_29966 = (inst_29962 == null);
var inst_29967 = cljs.core.not.call(null,inst_29966);
var state_30034__$1 = state_30034;
if(inst_29967){
var statearr_30076_30131 = state_30034__$1;
(statearr_30076_30131[(1)] = (13));

} else {
var statearr_30077_30132 = state_30034__$1;
(statearr_30077_30132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (9))){
var inst_29938 = (state_30034[(8)]);
var state_30034__$1 = state_30034;
var statearr_30078_30133 = state_30034__$1;
(statearr_30078_30133[(2)] = inst_29938);

(statearr_30078_30133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (5))){
var state_30034__$1 = state_30034;
var statearr_30079_30134 = state_30034__$1;
(statearr_30079_30134[(2)] = true);

(statearr_30079_30134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (14))){
var state_30034__$1 = state_30034;
var statearr_30080_30135 = state_30034__$1;
(statearr_30080_30135[(2)] = false);

(statearr_30080_30135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (26))){
var inst_29994 = (state_30034[(9)]);
var inst_30001 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29994);
var state_30034__$1 = state_30034;
var statearr_30081_30136 = state_30034__$1;
(statearr_30081_30136[(2)] = inst_30001);

(statearr_30081_30136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (16))){
var state_30034__$1 = state_30034;
var statearr_30082_30137 = state_30034__$1;
(statearr_30082_30137[(2)] = true);

(statearr_30082_30137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (38))){
var inst_30024 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30083_30138 = state_30034__$1;
(statearr_30083_30138[(2)] = inst_30024);

(statearr_30083_30138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (30))){
var inst_29994 = (state_30034[(9)]);
var inst_29986 = (state_30034[(13)]);
var inst_29985 = (state_30034[(11)]);
var inst_30011 = cljs.core.empty_QMARK_.call(null,inst_29985);
var inst_30012 = inst_29986.call(null,inst_29994);
var inst_30013 = cljs.core.not.call(null,inst_30012);
var inst_30014 = (inst_30011) && (inst_30013);
var state_30034__$1 = state_30034;
var statearr_30084_30139 = state_30034__$1;
(statearr_30084_30139[(2)] = inst_30014);

(statearr_30084_30139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (10))){
var inst_29938 = (state_30034[(8)]);
var inst_29958 = (state_30034[(2)]);
var inst_29959 = cljs.core.get.call(null,inst_29958,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29960 = cljs.core.get.call(null,inst_29958,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29961 = cljs.core.get.call(null,inst_29958,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29962 = inst_29938;
var state_30034__$1 = (function (){var statearr_30085 = state_30034;
(statearr_30085[(16)] = inst_29960);

(statearr_30085[(17)] = inst_29959);

(statearr_30085[(7)] = inst_29962);

(statearr_30085[(18)] = inst_29961);

return statearr_30085;
})();
var statearr_30086_30140 = state_30034__$1;
(statearr_30086_30140[(2)] = null);

(statearr_30086_30140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (18))){
var inst_29976 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30087_30141 = state_30034__$1;
(statearr_30087_30141[(2)] = inst_29976);

(statearr_30087_30141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (37))){
var state_30034__$1 = state_30034;
var statearr_30088_30142 = state_30034__$1;
(statearr_30088_30142[(2)] = null);

(statearr_30088_30142[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (8))){
var inst_29938 = (state_30034[(8)]);
var inst_29955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29938);
var state_30034__$1 = state_30034;
var statearr_30089_30143 = state_30034__$1;
(statearr_30089_30143[(2)] = inst_29955);

(statearr_30089_30143[(1)] = (10));


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
});})(c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28252__auto__,c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28253__auto__ = null;
var cljs$core$async$mix_$_state_machine__28253__auto____0 = (function (){
var statearr_30093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30093[(0)] = cljs$core$async$mix_$_state_machine__28253__auto__);

(statearr_30093[(1)] = (1));

return statearr_30093;
});
var cljs$core$async$mix_$_state_machine__28253__auto____1 = (function (state_30034){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30094){if((e30094 instanceof Object)){
var ex__28256__auto__ = e30094;
var statearr_30095_30144 = state_30034;
(statearr_30095_30144[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30145 = state_30034;
state_30034 = G__30145;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28253__auto__ = function(state_30034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28253__auto____1.call(this,state_30034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28253__auto____0;
cljs$core$async$mix_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28253__auto____1;
return cljs$core$async$mix_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28366__auto__ = (function (){var statearr_30096 = f__28365__auto__.call(null);
(statearr_30096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30097);

return statearr_30096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25793__auto__ = (((p == null))?null:p);
var m__25794__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25794__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25793__auto__ = (((p == null))?null:p);
var m__25794__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,p,v,ch);
} else {
var m__25794__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30146 = [];
var len__26205__auto___30149 = arguments.length;
var i__26206__auto___30150 = (0);
while(true){
if((i__26206__auto___30150 < len__26205__auto___30149)){
args30146.push((arguments[i__26206__auto___30150]));

var G__30151 = (i__26206__auto___30150 + (1));
i__26206__auto___30150 = G__30151;
continue;
} else {
}
break;
}

var G__30148 = args30146.length;
switch (G__30148) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30146.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25793__auto__ = (((p == null))?null:p);
var m__25794__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,p);
} else {
var m__25794__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25793__auto__ = (((p == null))?null:p);
var m__25794__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25793__auto__)]);
if(!((m__25794__auto__ == null))){
return m__25794__auto__.call(null,p,v);
} else {
var m__25794__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25794__auto____$1 == null))){
return m__25794__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30154 = [];
var len__26205__auto___30279 = arguments.length;
var i__26206__auto___30280 = (0);
while(true){
if((i__26206__auto___30280 < len__26205__auto___30279)){
args30154.push((arguments[i__26206__auto___30280]));

var G__30281 = (i__26206__auto___30280 + (1));
i__26206__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var G__30156 = args30154.length;
switch (G__30156) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30154.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25130__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25130__auto__,mults){
return (function (p1__30153_SHARP_){
if(cljs.core.truth_(p1__30153_SHARP_.call(null,topic))){
return p1__30153_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30153_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25130__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30157 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30158){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30158 = meta30158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30159,meta30158__$1){
var self__ = this;
var _30159__$1 = this;
return (new cljs.core.async.t_cljs$core$async30157(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30158__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30159){
var self__ = this;
var _30159__$1 = this;
return self__.meta30158;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30158","meta30158",318571499,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30157";

cljs.core.async.t_cljs$core$async30157.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async30157");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30157 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30158){
return (new cljs.core.async.t_cljs$core$async30157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30158));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30157(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28364__auto___30283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30283,mults,ensure_mult,p){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30283,mults,ensure_mult,p){
return (function (state_30231){
var state_val_30232 = (state_30231[(1)]);
if((state_val_30232 === (7))){
var inst_30227 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30233_30284 = state_30231__$1;
(statearr_30233_30284[(2)] = inst_30227);

(statearr_30233_30284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (20))){
var state_30231__$1 = state_30231;
var statearr_30234_30285 = state_30231__$1;
(statearr_30234_30285[(2)] = null);

(statearr_30234_30285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (1))){
var state_30231__$1 = state_30231;
var statearr_30235_30286 = state_30231__$1;
(statearr_30235_30286[(2)] = null);

(statearr_30235_30286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (24))){
var inst_30210 = (state_30231[(7)]);
var inst_30219 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30210);
var state_30231__$1 = state_30231;
var statearr_30236_30287 = state_30231__$1;
(statearr_30236_30287[(2)] = inst_30219);

(statearr_30236_30287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (4))){
var inst_30162 = (state_30231[(8)]);
var inst_30162__$1 = (state_30231[(2)]);
var inst_30163 = (inst_30162__$1 == null);
var state_30231__$1 = (function (){var statearr_30237 = state_30231;
(statearr_30237[(8)] = inst_30162__$1);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30163)){
var statearr_30238_30288 = state_30231__$1;
(statearr_30238_30288[(1)] = (5));

} else {
var statearr_30239_30289 = state_30231__$1;
(statearr_30239_30289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (15))){
var inst_30204 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30240_30290 = state_30231__$1;
(statearr_30240_30290[(2)] = inst_30204);

(statearr_30240_30290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (21))){
var inst_30224 = (state_30231[(2)]);
var state_30231__$1 = (function (){var statearr_30241 = state_30231;
(statearr_30241[(9)] = inst_30224);

return statearr_30241;
})();
var statearr_30242_30291 = state_30231__$1;
(statearr_30242_30291[(2)] = null);

(statearr_30242_30291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (13))){
var inst_30186 = (state_30231[(10)]);
var inst_30188 = cljs.core.chunked_seq_QMARK_.call(null,inst_30186);
var state_30231__$1 = state_30231;
if(inst_30188){
var statearr_30243_30292 = state_30231__$1;
(statearr_30243_30292[(1)] = (16));

} else {
var statearr_30244_30293 = state_30231__$1;
(statearr_30244_30293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (22))){
var inst_30216 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
if(cljs.core.truth_(inst_30216)){
var statearr_30245_30294 = state_30231__$1;
(statearr_30245_30294[(1)] = (23));

} else {
var statearr_30246_30295 = state_30231__$1;
(statearr_30246_30295[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (6))){
var inst_30212 = (state_30231[(11)]);
var inst_30210 = (state_30231[(7)]);
var inst_30162 = (state_30231[(8)]);
var inst_30210__$1 = topic_fn.call(null,inst_30162);
var inst_30211 = cljs.core.deref.call(null,mults);
var inst_30212__$1 = cljs.core.get.call(null,inst_30211,inst_30210__$1);
var state_30231__$1 = (function (){var statearr_30247 = state_30231;
(statearr_30247[(11)] = inst_30212__$1);

(statearr_30247[(7)] = inst_30210__$1);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30212__$1)){
var statearr_30248_30296 = state_30231__$1;
(statearr_30248_30296[(1)] = (19));

} else {
var statearr_30249_30297 = state_30231__$1;
(statearr_30249_30297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (25))){
var inst_30221 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30250_30298 = state_30231__$1;
(statearr_30250_30298[(2)] = inst_30221);

(statearr_30250_30298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (17))){
var inst_30186 = (state_30231[(10)]);
var inst_30195 = cljs.core.first.call(null,inst_30186);
var inst_30196 = cljs.core.async.muxch_STAR_.call(null,inst_30195);
var inst_30197 = cljs.core.async.close_BANG_.call(null,inst_30196);
var inst_30198 = cljs.core.next.call(null,inst_30186);
var inst_30172 = inst_30198;
var inst_30173 = null;
var inst_30174 = (0);
var inst_30175 = (0);
var state_30231__$1 = (function (){var statearr_30251 = state_30231;
(statearr_30251[(12)] = inst_30174);

(statearr_30251[(13)] = inst_30197);

(statearr_30251[(14)] = inst_30173);

(statearr_30251[(15)] = inst_30175);

(statearr_30251[(16)] = inst_30172);

return statearr_30251;
})();
var statearr_30252_30299 = state_30231__$1;
(statearr_30252_30299[(2)] = null);

(statearr_30252_30299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (3))){
var inst_30229 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30231__$1,inst_30229);
} else {
if((state_val_30232 === (12))){
var inst_30206 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30253_30300 = state_30231__$1;
(statearr_30253_30300[(2)] = inst_30206);

(statearr_30253_30300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (2))){
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30231__$1,(4),ch);
} else {
if((state_val_30232 === (23))){
var state_30231__$1 = state_30231;
var statearr_30254_30301 = state_30231__$1;
(statearr_30254_30301[(2)] = null);

(statearr_30254_30301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (19))){
var inst_30212 = (state_30231[(11)]);
var inst_30162 = (state_30231[(8)]);
var inst_30214 = cljs.core.async.muxch_STAR_.call(null,inst_30212);
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30231__$1,(22),inst_30214,inst_30162);
} else {
if((state_val_30232 === (11))){
var inst_30186 = (state_30231[(10)]);
var inst_30172 = (state_30231[(16)]);
var inst_30186__$1 = cljs.core.seq.call(null,inst_30172);
var state_30231__$1 = (function (){var statearr_30255 = state_30231;
(statearr_30255[(10)] = inst_30186__$1);

return statearr_30255;
})();
if(inst_30186__$1){
var statearr_30256_30302 = state_30231__$1;
(statearr_30256_30302[(1)] = (13));

} else {
var statearr_30257_30303 = state_30231__$1;
(statearr_30257_30303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (9))){
var inst_30208 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30258_30304 = state_30231__$1;
(statearr_30258_30304[(2)] = inst_30208);

(statearr_30258_30304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (5))){
var inst_30169 = cljs.core.deref.call(null,mults);
var inst_30170 = cljs.core.vals.call(null,inst_30169);
var inst_30171 = cljs.core.seq.call(null,inst_30170);
var inst_30172 = inst_30171;
var inst_30173 = null;
var inst_30174 = (0);
var inst_30175 = (0);
var state_30231__$1 = (function (){var statearr_30259 = state_30231;
(statearr_30259[(12)] = inst_30174);

(statearr_30259[(14)] = inst_30173);

(statearr_30259[(15)] = inst_30175);

(statearr_30259[(16)] = inst_30172);

return statearr_30259;
})();
var statearr_30260_30305 = state_30231__$1;
(statearr_30260_30305[(2)] = null);

(statearr_30260_30305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (14))){
var state_30231__$1 = state_30231;
var statearr_30264_30306 = state_30231__$1;
(statearr_30264_30306[(2)] = null);

(statearr_30264_30306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (16))){
var inst_30186 = (state_30231[(10)]);
var inst_30190 = cljs.core.chunk_first.call(null,inst_30186);
var inst_30191 = cljs.core.chunk_rest.call(null,inst_30186);
var inst_30192 = cljs.core.count.call(null,inst_30190);
var inst_30172 = inst_30191;
var inst_30173 = inst_30190;
var inst_30174 = inst_30192;
var inst_30175 = (0);
var state_30231__$1 = (function (){var statearr_30265 = state_30231;
(statearr_30265[(12)] = inst_30174);

(statearr_30265[(14)] = inst_30173);

(statearr_30265[(15)] = inst_30175);

(statearr_30265[(16)] = inst_30172);

return statearr_30265;
})();
var statearr_30266_30307 = state_30231__$1;
(statearr_30266_30307[(2)] = null);

(statearr_30266_30307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (10))){
var inst_30174 = (state_30231[(12)]);
var inst_30173 = (state_30231[(14)]);
var inst_30175 = (state_30231[(15)]);
var inst_30172 = (state_30231[(16)]);
var inst_30180 = cljs.core._nth.call(null,inst_30173,inst_30175);
var inst_30181 = cljs.core.async.muxch_STAR_.call(null,inst_30180);
var inst_30182 = cljs.core.async.close_BANG_.call(null,inst_30181);
var inst_30183 = (inst_30175 + (1));
var tmp30261 = inst_30174;
var tmp30262 = inst_30173;
var tmp30263 = inst_30172;
var inst_30172__$1 = tmp30263;
var inst_30173__$1 = tmp30262;
var inst_30174__$1 = tmp30261;
var inst_30175__$1 = inst_30183;
var state_30231__$1 = (function (){var statearr_30267 = state_30231;
(statearr_30267[(12)] = inst_30174__$1);

(statearr_30267[(14)] = inst_30173__$1);

(statearr_30267[(15)] = inst_30175__$1);

(statearr_30267[(16)] = inst_30172__$1);

(statearr_30267[(17)] = inst_30182);

return statearr_30267;
})();
var statearr_30268_30308 = state_30231__$1;
(statearr_30268_30308[(2)] = null);

(statearr_30268_30308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (18))){
var inst_30201 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30269_30309 = state_30231__$1;
(statearr_30269_30309[(2)] = inst_30201);

(statearr_30269_30309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (8))){
var inst_30174 = (state_30231[(12)]);
var inst_30175 = (state_30231[(15)]);
var inst_30177 = (inst_30175 < inst_30174);
var inst_30178 = inst_30177;
var state_30231__$1 = state_30231;
if(cljs.core.truth_(inst_30178)){
var statearr_30270_30310 = state_30231__$1;
(statearr_30270_30310[(1)] = (10));

} else {
var statearr_30271_30311 = state_30231__$1;
(statearr_30271_30311[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28364__auto___30283,mults,ensure_mult,p))
;
return ((function (switch__28252__auto__,c__28364__auto___30283,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30275[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30275[(1)] = (1));

return statearr_30275;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30231){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30276){if((e30276 instanceof Object)){
var ex__28256__auto__ = e30276;
var statearr_30277_30312 = state_30231;
(statearr_30277_30312[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30313 = state_30231;
state_30231 = G__30313;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30283,mults,ensure_mult,p))
})();
var state__28366__auto__ = (function (){var statearr_30278 = f__28365__auto__.call(null);
(statearr_30278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30283);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30283,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30314 = [];
var len__26205__auto___30317 = arguments.length;
var i__26206__auto___30318 = (0);
while(true){
if((i__26206__auto___30318 < len__26205__auto___30317)){
args30314.push((arguments[i__26206__auto___30318]));

var G__30319 = (i__26206__auto___30318 + (1));
i__26206__auto___30318 = G__30319;
continue;
} else {
}
break;
}

var G__30316 = args30314.length;
switch (G__30316) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30314.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30321 = [];
var len__26205__auto___30324 = arguments.length;
var i__26206__auto___30325 = (0);
while(true){
if((i__26206__auto___30325 < len__26205__auto___30324)){
args30321.push((arguments[i__26206__auto___30325]));

var G__30326 = (i__26206__auto___30325 + (1));
i__26206__auto___30325 = G__30326;
continue;
} else {
}
break;
}

var G__30323 = args30321.length;
switch (G__30323) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30321.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30328 = [];
var len__26205__auto___30399 = arguments.length;
var i__26206__auto___30400 = (0);
while(true){
if((i__26206__auto___30400 < len__26205__auto___30399)){
args30328.push((arguments[i__26206__auto___30400]));

var G__30401 = (i__26206__auto___30400 + (1));
i__26206__auto___30400 = G__30401;
continue;
} else {
}
break;
}

var G__30330 = args30328.length;
switch (G__30330) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30328.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28364__auto___30403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30369){
var state_val_30370 = (state_30369[(1)]);
if((state_val_30370 === (7))){
var state_30369__$1 = state_30369;
var statearr_30371_30404 = state_30369__$1;
(statearr_30371_30404[(2)] = null);

(statearr_30371_30404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (1))){
var state_30369__$1 = state_30369;
var statearr_30372_30405 = state_30369__$1;
(statearr_30372_30405[(2)] = null);

(statearr_30372_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (4))){
var inst_30333 = (state_30369[(7)]);
var inst_30335 = (inst_30333 < cnt);
var state_30369__$1 = state_30369;
if(cljs.core.truth_(inst_30335)){
var statearr_30373_30406 = state_30369__$1;
(statearr_30373_30406[(1)] = (6));

} else {
var statearr_30374_30407 = state_30369__$1;
(statearr_30374_30407[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (15))){
var inst_30365 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30375_30408 = state_30369__$1;
(statearr_30375_30408[(2)] = inst_30365);

(statearr_30375_30408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (13))){
var inst_30358 = cljs.core.async.close_BANG_.call(null,out);
var state_30369__$1 = state_30369;
var statearr_30376_30409 = state_30369__$1;
(statearr_30376_30409[(2)] = inst_30358);

(statearr_30376_30409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (6))){
var state_30369__$1 = state_30369;
var statearr_30377_30410 = state_30369__$1;
(statearr_30377_30410[(2)] = null);

(statearr_30377_30410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (3))){
var inst_30367 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30369__$1,inst_30367);
} else {
if((state_val_30370 === (12))){
var inst_30355 = (state_30369[(8)]);
var inst_30355__$1 = (state_30369[(2)]);
var inst_30356 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30355__$1);
var state_30369__$1 = (function (){var statearr_30378 = state_30369;
(statearr_30378[(8)] = inst_30355__$1);

return statearr_30378;
})();
if(cljs.core.truth_(inst_30356)){
var statearr_30379_30411 = state_30369__$1;
(statearr_30379_30411[(1)] = (13));

} else {
var statearr_30380_30412 = state_30369__$1;
(statearr_30380_30412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (2))){
var inst_30332 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30333 = (0);
var state_30369__$1 = (function (){var statearr_30381 = state_30369;
(statearr_30381[(7)] = inst_30333);

(statearr_30381[(9)] = inst_30332);

return statearr_30381;
})();
var statearr_30382_30413 = state_30369__$1;
(statearr_30382_30413[(2)] = null);

(statearr_30382_30413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (11))){
var inst_30333 = (state_30369[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30369,(10),Object,null,(9));
var inst_30342 = chs__$1.call(null,inst_30333);
var inst_30343 = done.call(null,inst_30333);
var inst_30344 = cljs.core.async.take_BANG_.call(null,inst_30342,inst_30343);
var state_30369__$1 = state_30369;
var statearr_30383_30414 = state_30369__$1;
(statearr_30383_30414[(2)] = inst_30344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (9))){
var inst_30333 = (state_30369[(7)]);
var inst_30346 = (state_30369[(2)]);
var inst_30347 = (inst_30333 + (1));
var inst_30333__$1 = inst_30347;
var state_30369__$1 = (function (){var statearr_30384 = state_30369;
(statearr_30384[(7)] = inst_30333__$1);

(statearr_30384[(10)] = inst_30346);

return statearr_30384;
})();
var statearr_30385_30415 = state_30369__$1;
(statearr_30385_30415[(2)] = null);

(statearr_30385_30415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (5))){
var inst_30353 = (state_30369[(2)]);
var state_30369__$1 = (function (){var statearr_30386 = state_30369;
(statearr_30386[(11)] = inst_30353);

return statearr_30386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30369__$1,(12),dchan);
} else {
if((state_val_30370 === (14))){
var inst_30355 = (state_30369[(8)]);
var inst_30360 = cljs.core.apply.call(null,f,inst_30355);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30369__$1,(16),out,inst_30360);
} else {
if((state_val_30370 === (16))){
var inst_30362 = (state_30369[(2)]);
var state_30369__$1 = (function (){var statearr_30387 = state_30369;
(statearr_30387[(12)] = inst_30362);

return statearr_30387;
})();
var statearr_30388_30416 = state_30369__$1;
(statearr_30388_30416[(2)] = null);

(statearr_30388_30416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (10))){
var inst_30337 = (state_30369[(2)]);
var inst_30338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30369__$1 = (function (){var statearr_30389 = state_30369;
(statearr_30389[(13)] = inst_30337);

return statearr_30389;
})();
var statearr_30390_30417 = state_30369__$1;
(statearr_30390_30417[(2)] = inst_30338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (8))){
var inst_30351 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30391_30418 = state_30369__$1;
(statearr_30391_30418[(2)] = inst_30351);

(statearr_30391_30418[(1)] = (5));


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
});})(c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28252__auto__,c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30395[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30395[(1)] = (1));

return statearr_30395;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30369){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30396){if((e30396 instanceof Object)){
var ex__28256__auto__ = e30396;
var statearr_30397_30419 = state_30369;
(statearr_30397_30419[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30420 = state_30369;
state_30369 = G__30420;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28366__auto__ = (function (){var statearr_30398 = f__28365__auto__.call(null);
(statearr_30398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30403);

return statearr_30398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30403,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30422 = [];
var len__26205__auto___30480 = arguments.length;
var i__26206__auto___30481 = (0);
while(true){
if((i__26206__auto___30481 < len__26205__auto___30480)){
args30422.push((arguments[i__26206__auto___30481]));

var G__30482 = (i__26206__auto___30481 + (1));
i__26206__auto___30481 = G__30482;
continue;
} else {
}
break;
}

var G__30424 = args30422.length;
switch (G__30424) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30422.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___30484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30484,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30484,out){
return (function (state_30456){
var state_val_30457 = (state_30456[(1)]);
if((state_val_30457 === (7))){
var inst_30435 = (state_30456[(7)]);
var inst_30436 = (state_30456[(8)]);
var inst_30435__$1 = (state_30456[(2)]);
var inst_30436__$1 = cljs.core.nth.call(null,inst_30435__$1,(0),null);
var inst_30437 = cljs.core.nth.call(null,inst_30435__$1,(1),null);
var inst_30438 = (inst_30436__$1 == null);
var state_30456__$1 = (function (){var statearr_30458 = state_30456;
(statearr_30458[(7)] = inst_30435__$1);

(statearr_30458[(8)] = inst_30436__$1);

(statearr_30458[(9)] = inst_30437);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30438)){
var statearr_30459_30485 = state_30456__$1;
(statearr_30459_30485[(1)] = (8));

} else {
var statearr_30460_30486 = state_30456__$1;
(statearr_30460_30486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (1))){
var inst_30425 = cljs.core.vec.call(null,chs);
var inst_30426 = inst_30425;
var state_30456__$1 = (function (){var statearr_30461 = state_30456;
(statearr_30461[(10)] = inst_30426);

return statearr_30461;
})();
var statearr_30462_30487 = state_30456__$1;
(statearr_30462_30487[(2)] = null);

(statearr_30462_30487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (4))){
var inst_30426 = (state_30456[(10)]);
var state_30456__$1 = state_30456;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30456__$1,(7),inst_30426);
} else {
if((state_val_30457 === (6))){
var inst_30452 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30463_30488 = state_30456__$1;
(statearr_30463_30488[(2)] = inst_30452);

(statearr_30463_30488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (3))){
var inst_30454 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30456__$1,inst_30454);
} else {
if((state_val_30457 === (2))){
var inst_30426 = (state_30456[(10)]);
var inst_30428 = cljs.core.count.call(null,inst_30426);
var inst_30429 = (inst_30428 > (0));
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30429)){
var statearr_30465_30489 = state_30456__$1;
(statearr_30465_30489[(1)] = (4));

} else {
var statearr_30466_30490 = state_30456__$1;
(statearr_30466_30490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (11))){
var inst_30426 = (state_30456[(10)]);
var inst_30445 = (state_30456[(2)]);
var tmp30464 = inst_30426;
var inst_30426__$1 = tmp30464;
var state_30456__$1 = (function (){var statearr_30467 = state_30456;
(statearr_30467[(10)] = inst_30426__$1);

(statearr_30467[(11)] = inst_30445);

return statearr_30467;
})();
var statearr_30468_30491 = state_30456__$1;
(statearr_30468_30491[(2)] = null);

(statearr_30468_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (9))){
var inst_30436 = (state_30456[(8)]);
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30456__$1,(11),out,inst_30436);
} else {
if((state_val_30457 === (5))){
var inst_30450 = cljs.core.async.close_BANG_.call(null,out);
var state_30456__$1 = state_30456;
var statearr_30469_30492 = state_30456__$1;
(statearr_30469_30492[(2)] = inst_30450);

(statearr_30469_30492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (10))){
var inst_30448 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30470_30493 = state_30456__$1;
(statearr_30470_30493[(2)] = inst_30448);

(statearr_30470_30493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (8))){
var inst_30426 = (state_30456[(10)]);
var inst_30435 = (state_30456[(7)]);
var inst_30436 = (state_30456[(8)]);
var inst_30437 = (state_30456[(9)]);
var inst_30440 = (function (){var cs = inst_30426;
var vec__30431 = inst_30435;
var v = inst_30436;
var c = inst_30437;
return ((function (cs,vec__30431,v,c,inst_30426,inst_30435,inst_30436,inst_30437,state_val_30457,c__28364__auto___30484,out){
return (function (p1__30421_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30421_SHARP_);
});
;})(cs,vec__30431,v,c,inst_30426,inst_30435,inst_30436,inst_30437,state_val_30457,c__28364__auto___30484,out))
})();
var inst_30441 = cljs.core.filterv.call(null,inst_30440,inst_30426);
var inst_30426__$1 = inst_30441;
var state_30456__$1 = (function (){var statearr_30471 = state_30456;
(statearr_30471[(10)] = inst_30426__$1);

return statearr_30471;
})();
var statearr_30472_30494 = state_30456__$1;
(statearr_30472_30494[(2)] = null);

(statearr_30472_30494[(1)] = (2));


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
});})(c__28364__auto___30484,out))
;
return ((function (switch__28252__auto__,c__28364__auto___30484,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30476[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30476[(1)] = (1));

return statearr_30476;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30456){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30477){if((e30477 instanceof Object)){
var ex__28256__auto__ = e30477;
var statearr_30478_30495 = state_30456;
(statearr_30478_30495[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30496 = state_30456;
state_30456 = G__30496;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30484,out))
})();
var state__28366__auto__ = (function (){var statearr_30479 = f__28365__auto__.call(null);
(statearr_30479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30484);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30484,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30497 = [];
var len__26205__auto___30546 = arguments.length;
var i__26206__auto___30547 = (0);
while(true){
if((i__26206__auto___30547 < len__26205__auto___30546)){
args30497.push((arguments[i__26206__auto___30547]));

var G__30548 = (i__26206__auto___30547 + (1));
i__26206__auto___30547 = G__30548;
continue;
} else {
}
break;
}

var G__30499 = args30497.length;
switch (G__30499) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30497.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___30550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30550,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30550,out){
return (function (state_30523){
var state_val_30524 = (state_30523[(1)]);
if((state_val_30524 === (7))){
var inst_30505 = (state_30523[(7)]);
var inst_30505__$1 = (state_30523[(2)]);
var inst_30506 = (inst_30505__$1 == null);
var inst_30507 = cljs.core.not.call(null,inst_30506);
var state_30523__$1 = (function (){var statearr_30525 = state_30523;
(statearr_30525[(7)] = inst_30505__$1);

return statearr_30525;
})();
if(inst_30507){
var statearr_30526_30551 = state_30523__$1;
(statearr_30526_30551[(1)] = (8));

} else {
var statearr_30527_30552 = state_30523__$1;
(statearr_30527_30552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (1))){
var inst_30500 = (0);
var state_30523__$1 = (function (){var statearr_30528 = state_30523;
(statearr_30528[(8)] = inst_30500);

return statearr_30528;
})();
var statearr_30529_30553 = state_30523__$1;
(statearr_30529_30553[(2)] = null);

(statearr_30529_30553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (4))){
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30523__$1,(7),ch);
} else {
if((state_val_30524 === (6))){
var inst_30518 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30530_30554 = state_30523__$1;
(statearr_30530_30554[(2)] = inst_30518);

(statearr_30530_30554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (3))){
var inst_30520 = (state_30523[(2)]);
var inst_30521 = cljs.core.async.close_BANG_.call(null,out);
var state_30523__$1 = (function (){var statearr_30531 = state_30523;
(statearr_30531[(9)] = inst_30520);

return statearr_30531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30523__$1,inst_30521);
} else {
if((state_val_30524 === (2))){
var inst_30500 = (state_30523[(8)]);
var inst_30502 = (inst_30500 < n);
var state_30523__$1 = state_30523;
if(cljs.core.truth_(inst_30502)){
var statearr_30532_30555 = state_30523__$1;
(statearr_30532_30555[(1)] = (4));

} else {
var statearr_30533_30556 = state_30523__$1;
(statearr_30533_30556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (11))){
var inst_30500 = (state_30523[(8)]);
var inst_30510 = (state_30523[(2)]);
var inst_30511 = (inst_30500 + (1));
var inst_30500__$1 = inst_30511;
var state_30523__$1 = (function (){var statearr_30534 = state_30523;
(statearr_30534[(8)] = inst_30500__$1);

(statearr_30534[(10)] = inst_30510);

return statearr_30534;
})();
var statearr_30535_30557 = state_30523__$1;
(statearr_30535_30557[(2)] = null);

(statearr_30535_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (9))){
var state_30523__$1 = state_30523;
var statearr_30536_30558 = state_30523__$1;
(statearr_30536_30558[(2)] = null);

(statearr_30536_30558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (5))){
var state_30523__$1 = state_30523;
var statearr_30537_30559 = state_30523__$1;
(statearr_30537_30559[(2)] = null);

(statearr_30537_30559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (10))){
var inst_30515 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30538_30560 = state_30523__$1;
(statearr_30538_30560[(2)] = inst_30515);

(statearr_30538_30560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (8))){
var inst_30505 = (state_30523[(7)]);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30523__$1,(11),out,inst_30505);
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
});})(c__28364__auto___30550,out))
;
return ((function (switch__28252__auto__,c__28364__auto___30550,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30542[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30542[(1)] = (1));

return statearr_30542;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30523){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30543){if((e30543 instanceof Object)){
var ex__28256__auto__ = e30543;
var statearr_30544_30561 = state_30523;
(statearr_30544_30561[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30562 = state_30523;
state_30523 = G__30562;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30550,out))
})();
var state__28366__auto__ = (function (){var statearr_30545 = f__28365__auto__.call(null);
(statearr_30545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30550);

return statearr_30545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30550,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30570 = (function (map_LT_,f,ch,meta30571){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30571 = meta30571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30572,meta30571__$1){
var self__ = this;
var _30572__$1 = this;
return (new cljs.core.async.t_cljs$core$async30570(self__.map_LT_,self__.f,self__.ch,meta30571__$1));
});

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30572){
var self__ = this;
var _30572__$1 = this;
return self__.meta30571;
});

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30573 = (function (map_LT_,f,ch,meta30571,_,fn1,meta30574){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30571 = meta30571;
this._ = _;
this.fn1 = fn1;
this.meta30574 = meta30574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30575,meta30574__$1){
var self__ = this;
var _30575__$1 = this;
return (new cljs.core.async.t_cljs$core$async30573(self__.map_LT_,self__.f,self__.ch,self__.meta30571,self__._,self__.fn1,meta30574__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30575){
var self__ = this;
var _30575__$1 = this;
return self__.meta30574;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30563_SHARP_){
return f1.call(null,(((p1__30563_SHARP_ == null))?null:self__.f.call(null,p1__30563_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30571","meta30571",1113911264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30570","cljs.core.async/t_cljs$core$async30570",-1280586378,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30574","meta30574",-490668751,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30573";

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async30573");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30573 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30573(map_LT___$1,f__$1,ch__$1,meta30571__$1,___$2,fn1__$1,meta30574){
return (new cljs.core.async.t_cljs$core$async30573(map_LT___$1,f__$1,ch__$1,meta30571__$1,___$2,fn1__$1,meta30574));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30573(self__.map_LT_,self__.f,self__.ch,self__.meta30571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25118__auto__ = ret;
if(cljs.core.truth_(and__25118__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25118__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30571","meta30571",1113911264,null)], null);
});

cljs.core.async.t_cljs$core$async30570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30570";

cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async30570");
});

cljs.core.async.__GT_t_cljs$core$async30570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30570(map_LT___$1,f__$1,ch__$1,meta30571){
return (new cljs.core.async.t_cljs$core$async30570(map_LT___$1,f__$1,ch__$1,meta30571));
});

}

return (new cljs.core.async.t_cljs$core$async30570(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30579 = (function (map_GT_,f,ch,meta30580){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30580 = meta30580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30581,meta30580__$1){
var self__ = this;
var _30581__$1 = this;
return (new cljs.core.async.t_cljs$core$async30579(self__.map_GT_,self__.f,self__.ch,meta30580__$1));
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30581){
var self__ = this;
var _30581__$1 = this;
return self__.meta30580;
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30580","meta30580",688390027,null)], null);
});

cljs.core.async.t_cljs$core$async30579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30579";

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async30579");
});

cljs.core.async.__GT_t_cljs$core$async30579 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30579(map_GT___$1,f__$1,ch__$1,meta30580){
return (new cljs.core.async.t_cljs$core$async30579(map_GT___$1,f__$1,ch__$1,meta30580));
});

}

return (new cljs.core.async.t_cljs$core$async30579(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30585 = (function (filter_GT_,p,ch,meta30586){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30586 = meta30586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30587,meta30586__$1){
var self__ = this;
var _30587__$1 = this;
return (new cljs.core.async.t_cljs$core$async30585(self__.filter_GT_,self__.p,self__.ch,meta30586__$1));
});

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30587){
var self__ = this;
var _30587__$1 = this;
return self__.meta30586;
});

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30586","meta30586",-777198015,null)], null);
});

cljs.core.async.t_cljs$core$async30585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30585";

cljs.core.async.t_cljs$core$async30585.cljs$lang$ctorPrWriter = (function (this__25736__auto__,writer__25737__auto__,opt__25738__auto__){
return cljs.core._write.call(null,writer__25737__auto__,"cljs.core.async/t_cljs$core$async30585");
});

cljs.core.async.__GT_t_cljs$core$async30585 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30585(filter_GT___$1,p__$1,ch__$1,meta30586){
return (new cljs.core.async.t_cljs$core$async30585(filter_GT___$1,p__$1,ch__$1,meta30586));
});

}

return (new cljs.core.async.t_cljs$core$async30585(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30588 = [];
var len__26205__auto___30632 = arguments.length;
var i__26206__auto___30633 = (0);
while(true){
if((i__26206__auto___30633 < len__26205__auto___30632)){
args30588.push((arguments[i__26206__auto___30633]));

var G__30634 = (i__26206__auto___30633 + (1));
i__26206__auto___30633 = G__30634;
continue;
} else {
}
break;
}

var G__30590 = args30588.length;
switch (G__30590) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30588.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___30636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30636,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30636,out){
return (function (state_30611){
var state_val_30612 = (state_30611[(1)]);
if((state_val_30612 === (7))){
var inst_30607 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30613_30637 = state_30611__$1;
(statearr_30613_30637[(2)] = inst_30607);

(statearr_30613_30637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (1))){
var state_30611__$1 = state_30611;
var statearr_30614_30638 = state_30611__$1;
(statearr_30614_30638[(2)] = null);

(statearr_30614_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (4))){
var inst_30593 = (state_30611[(7)]);
var inst_30593__$1 = (state_30611[(2)]);
var inst_30594 = (inst_30593__$1 == null);
var state_30611__$1 = (function (){var statearr_30615 = state_30611;
(statearr_30615[(7)] = inst_30593__$1);

return statearr_30615;
})();
if(cljs.core.truth_(inst_30594)){
var statearr_30616_30639 = state_30611__$1;
(statearr_30616_30639[(1)] = (5));

} else {
var statearr_30617_30640 = state_30611__$1;
(statearr_30617_30640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (6))){
var inst_30593 = (state_30611[(7)]);
var inst_30598 = p.call(null,inst_30593);
var state_30611__$1 = state_30611;
if(cljs.core.truth_(inst_30598)){
var statearr_30618_30641 = state_30611__$1;
(statearr_30618_30641[(1)] = (8));

} else {
var statearr_30619_30642 = state_30611__$1;
(statearr_30619_30642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (3))){
var inst_30609 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30611__$1,inst_30609);
} else {
if((state_val_30612 === (2))){
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30611__$1,(4),ch);
} else {
if((state_val_30612 === (11))){
var inst_30601 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30620_30643 = state_30611__$1;
(statearr_30620_30643[(2)] = inst_30601);

(statearr_30620_30643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (9))){
var state_30611__$1 = state_30611;
var statearr_30621_30644 = state_30611__$1;
(statearr_30621_30644[(2)] = null);

(statearr_30621_30644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (5))){
var inst_30596 = cljs.core.async.close_BANG_.call(null,out);
var state_30611__$1 = state_30611;
var statearr_30622_30645 = state_30611__$1;
(statearr_30622_30645[(2)] = inst_30596);

(statearr_30622_30645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (10))){
var inst_30604 = (state_30611[(2)]);
var state_30611__$1 = (function (){var statearr_30623 = state_30611;
(statearr_30623[(8)] = inst_30604);

return statearr_30623;
})();
var statearr_30624_30646 = state_30611__$1;
(statearr_30624_30646[(2)] = null);

(statearr_30624_30646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (8))){
var inst_30593 = (state_30611[(7)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30611__$1,(11),out,inst_30593);
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
});})(c__28364__auto___30636,out))
;
return ((function (switch__28252__auto__,c__28364__auto___30636,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30628 = [null,null,null,null,null,null,null,null,null];
(statearr_30628[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30628[(1)] = (1));

return statearr_30628;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30611){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30629){if((e30629 instanceof Object)){
var ex__28256__auto__ = e30629;
var statearr_30630_30647 = state_30611;
(statearr_30630_30647[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30648 = state_30611;
state_30611 = G__30648;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30636,out))
})();
var state__28366__auto__ = (function (){var statearr_30631 = f__28365__auto__.call(null);
(statearr_30631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30636);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30636,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30649 = [];
var len__26205__auto___30652 = arguments.length;
var i__26206__auto___30653 = (0);
while(true){
if((i__26206__auto___30653 < len__26205__auto___30652)){
args30649.push((arguments[i__26206__auto___30653]));

var G__30654 = (i__26206__auto___30653 + (1));
i__26206__auto___30653 = G__30654;
continue;
} else {
}
break;
}

var G__30651 = args30649.length;
switch (G__30651) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30649.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__){
return (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (7))){
var inst_30817 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30823_30864 = state_30821__$1;
(statearr_30823_30864[(2)] = inst_30817);

(statearr_30823_30864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (20))){
var inst_30787 = (state_30821[(7)]);
var inst_30798 = (state_30821[(2)]);
var inst_30799 = cljs.core.next.call(null,inst_30787);
var inst_30773 = inst_30799;
var inst_30774 = null;
var inst_30775 = (0);
var inst_30776 = (0);
var state_30821__$1 = (function (){var statearr_30824 = state_30821;
(statearr_30824[(8)] = inst_30774);

(statearr_30824[(9)] = inst_30775);

(statearr_30824[(10)] = inst_30773);

(statearr_30824[(11)] = inst_30798);

(statearr_30824[(12)] = inst_30776);

return statearr_30824;
})();
var statearr_30825_30865 = state_30821__$1;
(statearr_30825_30865[(2)] = null);

(statearr_30825_30865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
var statearr_30826_30866 = state_30821__$1;
(statearr_30826_30866[(2)] = null);

(statearr_30826_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (4))){
var inst_30762 = (state_30821[(13)]);
var inst_30762__$1 = (state_30821[(2)]);
var inst_30763 = (inst_30762__$1 == null);
var state_30821__$1 = (function (){var statearr_30827 = state_30821;
(statearr_30827[(13)] = inst_30762__$1);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30763)){
var statearr_30828_30867 = state_30821__$1;
(statearr_30828_30867[(1)] = (5));

} else {
var statearr_30829_30868 = state_30821__$1;
(statearr_30829_30868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (15))){
var state_30821__$1 = state_30821;
var statearr_30833_30869 = state_30821__$1;
(statearr_30833_30869[(2)] = null);

(statearr_30833_30869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (21))){
var state_30821__$1 = state_30821;
var statearr_30834_30870 = state_30821__$1;
(statearr_30834_30870[(2)] = null);

(statearr_30834_30870[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (13))){
var inst_30774 = (state_30821[(8)]);
var inst_30775 = (state_30821[(9)]);
var inst_30773 = (state_30821[(10)]);
var inst_30776 = (state_30821[(12)]);
var inst_30783 = (state_30821[(2)]);
var inst_30784 = (inst_30776 + (1));
var tmp30830 = inst_30774;
var tmp30831 = inst_30775;
var tmp30832 = inst_30773;
var inst_30773__$1 = tmp30832;
var inst_30774__$1 = tmp30830;
var inst_30775__$1 = tmp30831;
var inst_30776__$1 = inst_30784;
var state_30821__$1 = (function (){var statearr_30835 = state_30821;
(statearr_30835[(8)] = inst_30774__$1);

(statearr_30835[(9)] = inst_30775__$1);

(statearr_30835[(10)] = inst_30773__$1);

(statearr_30835[(14)] = inst_30783);

(statearr_30835[(12)] = inst_30776__$1);

return statearr_30835;
})();
var statearr_30836_30871 = state_30821__$1;
(statearr_30836_30871[(2)] = null);

(statearr_30836_30871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (22))){
var state_30821__$1 = state_30821;
var statearr_30837_30872 = state_30821__$1;
(statearr_30837_30872[(2)] = null);

(statearr_30837_30872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var inst_30762 = (state_30821[(13)]);
var inst_30771 = f.call(null,inst_30762);
var inst_30772 = cljs.core.seq.call(null,inst_30771);
var inst_30773 = inst_30772;
var inst_30774 = null;
var inst_30775 = (0);
var inst_30776 = (0);
var state_30821__$1 = (function (){var statearr_30838 = state_30821;
(statearr_30838[(8)] = inst_30774);

(statearr_30838[(9)] = inst_30775);

(statearr_30838[(10)] = inst_30773);

(statearr_30838[(12)] = inst_30776);

return statearr_30838;
})();
var statearr_30839_30873 = state_30821__$1;
(statearr_30839_30873[(2)] = null);

(statearr_30839_30873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (17))){
var inst_30787 = (state_30821[(7)]);
var inst_30791 = cljs.core.chunk_first.call(null,inst_30787);
var inst_30792 = cljs.core.chunk_rest.call(null,inst_30787);
var inst_30793 = cljs.core.count.call(null,inst_30791);
var inst_30773 = inst_30792;
var inst_30774 = inst_30791;
var inst_30775 = inst_30793;
var inst_30776 = (0);
var state_30821__$1 = (function (){var statearr_30840 = state_30821;
(statearr_30840[(8)] = inst_30774);

(statearr_30840[(9)] = inst_30775);

(statearr_30840[(10)] = inst_30773);

(statearr_30840[(12)] = inst_30776);

return statearr_30840;
})();
var statearr_30841_30874 = state_30821__$1;
(statearr_30841_30874[(2)] = null);

(statearr_30841_30874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (3))){
var inst_30819 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30821__$1,inst_30819);
} else {
if((state_val_30822 === (12))){
var inst_30807 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30842_30875 = state_30821__$1;
(statearr_30842_30875[(2)] = inst_30807);

(statearr_30842_30875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (2))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(4),in$);
} else {
if((state_val_30822 === (23))){
var inst_30815 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30843_30876 = state_30821__$1;
(statearr_30843_30876[(2)] = inst_30815);

(statearr_30843_30876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (19))){
var inst_30802 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30844_30877 = state_30821__$1;
(statearr_30844_30877[(2)] = inst_30802);

(statearr_30844_30877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (11))){
var inst_30787 = (state_30821[(7)]);
var inst_30773 = (state_30821[(10)]);
var inst_30787__$1 = cljs.core.seq.call(null,inst_30773);
var state_30821__$1 = (function (){var statearr_30845 = state_30821;
(statearr_30845[(7)] = inst_30787__$1);

return statearr_30845;
})();
if(inst_30787__$1){
var statearr_30846_30878 = state_30821__$1;
(statearr_30846_30878[(1)] = (14));

} else {
var statearr_30847_30879 = state_30821__$1;
(statearr_30847_30879[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (9))){
var inst_30809 = (state_30821[(2)]);
var inst_30810 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30821__$1 = (function (){var statearr_30848 = state_30821;
(statearr_30848[(15)] = inst_30809);

return statearr_30848;
})();
if(cljs.core.truth_(inst_30810)){
var statearr_30849_30880 = state_30821__$1;
(statearr_30849_30880[(1)] = (21));

} else {
var statearr_30850_30881 = state_30821__$1;
(statearr_30850_30881[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var inst_30765 = cljs.core.async.close_BANG_.call(null,out);
var state_30821__$1 = state_30821;
var statearr_30851_30882 = state_30821__$1;
(statearr_30851_30882[(2)] = inst_30765);

(statearr_30851_30882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (14))){
var inst_30787 = (state_30821[(7)]);
var inst_30789 = cljs.core.chunked_seq_QMARK_.call(null,inst_30787);
var state_30821__$1 = state_30821;
if(inst_30789){
var statearr_30852_30883 = state_30821__$1;
(statearr_30852_30883[(1)] = (17));

} else {
var statearr_30853_30884 = state_30821__$1;
(statearr_30853_30884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (16))){
var inst_30805 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30854_30885 = state_30821__$1;
(statearr_30854_30885[(2)] = inst_30805);

(statearr_30854_30885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (10))){
var inst_30774 = (state_30821[(8)]);
var inst_30776 = (state_30821[(12)]);
var inst_30781 = cljs.core._nth.call(null,inst_30774,inst_30776);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30821__$1,(13),out,inst_30781);
} else {
if((state_val_30822 === (18))){
var inst_30787 = (state_30821[(7)]);
var inst_30796 = cljs.core.first.call(null,inst_30787);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30821__$1,(20),out,inst_30796);
} else {
if((state_val_30822 === (8))){
var inst_30775 = (state_30821[(9)]);
var inst_30776 = (state_30821[(12)]);
var inst_30778 = (inst_30776 < inst_30775);
var inst_30779 = inst_30778;
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30779)){
var statearr_30855_30886 = state_30821__$1;
(statearr_30855_30886[(1)] = (10));

} else {
var statearr_30856_30887 = state_30821__$1;
(statearr_30856_30887[(1)] = (11));

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
}
}
}
}
}
}
});})(c__28364__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____0 = (function (){
var statearr_30860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30860[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__);

(statearr_30860[(1)] = (1));

return statearr_30860;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____1 = (function (state_30821){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30861){if((e30861 instanceof Object)){
var ex__28256__auto__ = e30861;
var statearr_30862_30888 = state_30821;
(statearr_30862_30888[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30889 = state_30821;
state_30821 = G__30889;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__))
})();
var state__28366__auto__ = (function (){var statearr_30863 = f__28365__auto__.call(null);
(statearr_30863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_30863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__))
);

return c__28364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30890 = [];
var len__26205__auto___30893 = arguments.length;
var i__26206__auto___30894 = (0);
while(true){
if((i__26206__auto___30894 < len__26205__auto___30893)){
args30890.push((arguments[i__26206__auto___30894]));

var G__30895 = (i__26206__auto___30894 + (1));
i__26206__auto___30894 = G__30895;
continue;
} else {
}
break;
}

var G__30892 = args30890.length;
switch (G__30892) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30890.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30897 = [];
var len__26205__auto___30900 = arguments.length;
var i__26206__auto___30901 = (0);
while(true){
if((i__26206__auto___30901 < len__26205__auto___30900)){
args30897.push((arguments[i__26206__auto___30901]));

var G__30902 = (i__26206__auto___30901 + (1));
i__26206__auto___30901 = G__30902;
continue;
} else {
}
break;
}

var G__30899 = args30897.length;
switch (G__30899) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30897.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30904 = [];
var len__26205__auto___30955 = arguments.length;
var i__26206__auto___30956 = (0);
while(true){
if((i__26206__auto___30956 < len__26205__auto___30955)){
args30904.push((arguments[i__26206__auto___30956]));

var G__30957 = (i__26206__auto___30956 + (1));
i__26206__auto___30956 = G__30957;
continue;
} else {
}
break;
}

var G__30906 = args30904.length;
switch (G__30906) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30904.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___30959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___30959,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___30959,out){
return (function (state_30930){
var state_val_30931 = (state_30930[(1)]);
if((state_val_30931 === (7))){
var inst_30925 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30932_30960 = state_30930__$1;
(statearr_30932_30960[(2)] = inst_30925);

(statearr_30932_30960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (1))){
var inst_30907 = null;
var state_30930__$1 = (function (){var statearr_30933 = state_30930;
(statearr_30933[(7)] = inst_30907);

return statearr_30933;
})();
var statearr_30934_30961 = state_30930__$1;
(statearr_30934_30961[(2)] = null);

(statearr_30934_30961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (4))){
var inst_30910 = (state_30930[(8)]);
var inst_30910__$1 = (state_30930[(2)]);
var inst_30911 = (inst_30910__$1 == null);
var inst_30912 = cljs.core.not.call(null,inst_30911);
var state_30930__$1 = (function (){var statearr_30935 = state_30930;
(statearr_30935[(8)] = inst_30910__$1);

return statearr_30935;
})();
if(inst_30912){
var statearr_30936_30962 = state_30930__$1;
(statearr_30936_30962[(1)] = (5));

} else {
var statearr_30937_30963 = state_30930__$1;
(statearr_30937_30963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (6))){
var state_30930__$1 = state_30930;
var statearr_30938_30964 = state_30930__$1;
(statearr_30938_30964[(2)] = null);

(statearr_30938_30964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (3))){
var inst_30927 = (state_30930[(2)]);
var inst_30928 = cljs.core.async.close_BANG_.call(null,out);
var state_30930__$1 = (function (){var statearr_30939 = state_30930;
(statearr_30939[(9)] = inst_30927);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30930__$1,inst_30928);
} else {
if((state_val_30931 === (2))){
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30930__$1,(4),ch);
} else {
if((state_val_30931 === (11))){
var inst_30910 = (state_30930[(8)]);
var inst_30919 = (state_30930[(2)]);
var inst_30907 = inst_30910;
var state_30930__$1 = (function (){var statearr_30940 = state_30930;
(statearr_30940[(10)] = inst_30919);

(statearr_30940[(7)] = inst_30907);

return statearr_30940;
})();
var statearr_30941_30965 = state_30930__$1;
(statearr_30941_30965[(2)] = null);

(statearr_30941_30965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (9))){
var inst_30910 = (state_30930[(8)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30930__$1,(11),out,inst_30910);
} else {
if((state_val_30931 === (5))){
var inst_30910 = (state_30930[(8)]);
var inst_30907 = (state_30930[(7)]);
var inst_30914 = cljs.core._EQ_.call(null,inst_30910,inst_30907);
var state_30930__$1 = state_30930;
if(inst_30914){
var statearr_30943_30966 = state_30930__$1;
(statearr_30943_30966[(1)] = (8));

} else {
var statearr_30944_30967 = state_30930__$1;
(statearr_30944_30967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (10))){
var inst_30922 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30945_30968 = state_30930__$1;
(statearr_30945_30968[(2)] = inst_30922);

(statearr_30945_30968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (8))){
var inst_30907 = (state_30930[(7)]);
var tmp30942 = inst_30907;
var inst_30907__$1 = tmp30942;
var state_30930__$1 = (function (){var statearr_30946 = state_30930;
(statearr_30946[(7)] = inst_30907__$1);

return statearr_30946;
})();
var statearr_30947_30969 = state_30930__$1;
(statearr_30947_30969[(2)] = null);

(statearr_30947_30969[(1)] = (2));


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
});})(c__28364__auto___30959,out))
;
return ((function (switch__28252__auto__,c__28364__auto___30959,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_30951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30951[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_30951[(1)] = (1));

return statearr_30951;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_30930){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_30930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e30952){if((e30952 instanceof Object)){
var ex__28256__auto__ = e30952;
var statearr_30953_30970 = state_30930;
(statearr_30953_30970[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30971 = state_30930;
state_30930 = G__30971;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_30930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_30930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___30959,out))
})();
var state__28366__auto__ = (function (){var statearr_30954 = f__28365__auto__.call(null);
(statearr_30954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___30959);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___30959,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30972 = [];
var len__26205__auto___31042 = arguments.length;
var i__26206__auto___31043 = (0);
while(true){
if((i__26206__auto___31043 < len__26205__auto___31042)){
args30972.push((arguments[i__26206__auto___31043]));

var G__31044 = (i__26206__auto___31043 + (1));
i__26206__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var G__30974 = args30972.length;
switch (G__30974) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30972.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___31046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___31046,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___31046,out){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (7))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31014_31047 = state_31012__$1;
(statearr_31014_31047[(2)] = inst_31008);

(statearr_31014_31047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (1))){
var inst_30975 = (new Array(n));
var inst_30976 = inst_30975;
var inst_30977 = (0);
var state_31012__$1 = (function (){var statearr_31015 = state_31012;
(statearr_31015[(7)] = inst_30977);

(statearr_31015[(8)] = inst_30976);

return statearr_31015;
})();
var statearr_31016_31048 = state_31012__$1;
(statearr_31016_31048[(2)] = null);

(statearr_31016_31048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (4))){
var inst_30980 = (state_31012[(9)]);
var inst_30980__$1 = (state_31012[(2)]);
var inst_30981 = (inst_30980__$1 == null);
var inst_30982 = cljs.core.not.call(null,inst_30981);
var state_31012__$1 = (function (){var statearr_31017 = state_31012;
(statearr_31017[(9)] = inst_30980__$1);

return statearr_31017;
})();
if(inst_30982){
var statearr_31018_31049 = state_31012__$1;
(statearr_31018_31049[(1)] = (5));

} else {
var statearr_31019_31050 = state_31012__$1;
(statearr_31019_31050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (15))){
var inst_31002 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31020_31051 = state_31012__$1;
(statearr_31020_31051[(2)] = inst_31002);

(statearr_31020_31051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (13))){
var state_31012__$1 = state_31012;
var statearr_31021_31052 = state_31012__$1;
(statearr_31021_31052[(2)] = null);

(statearr_31021_31052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (6))){
var inst_30977 = (state_31012[(7)]);
var inst_30998 = (inst_30977 > (0));
var state_31012__$1 = state_31012;
if(cljs.core.truth_(inst_30998)){
var statearr_31022_31053 = state_31012__$1;
(statearr_31022_31053[(1)] = (12));

} else {
var statearr_31023_31054 = state_31012__$1;
(statearr_31023_31054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (3))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (12))){
var inst_30976 = (state_31012[(8)]);
var inst_31000 = cljs.core.vec.call(null,inst_30976);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31012__$1,(15),out,inst_31000);
} else {
if((state_val_31013 === (2))){
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(4),ch);
} else {
if((state_val_31013 === (11))){
var inst_30992 = (state_31012[(2)]);
var inst_30993 = (new Array(n));
var inst_30976 = inst_30993;
var inst_30977 = (0);
var state_31012__$1 = (function (){var statearr_31024 = state_31012;
(statearr_31024[(10)] = inst_30992);

(statearr_31024[(7)] = inst_30977);

(statearr_31024[(8)] = inst_30976);

return statearr_31024;
})();
var statearr_31025_31055 = state_31012__$1;
(statearr_31025_31055[(2)] = null);

(statearr_31025_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (9))){
var inst_30976 = (state_31012[(8)]);
var inst_30990 = cljs.core.vec.call(null,inst_30976);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31012__$1,(11),out,inst_30990);
} else {
if((state_val_31013 === (5))){
var inst_30977 = (state_31012[(7)]);
var inst_30976 = (state_31012[(8)]);
var inst_30980 = (state_31012[(9)]);
var inst_30985 = (state_31012[(11)]);
var inst_30984 = (inst_30976[inst_30977] = inst_30980);
var inst_30985__$1 = (inst_30977 + (1));
var inst_30986 = (inst_30985__$1 < n);
var state_31012__$1 = (function (){var statearr_31026 = state_31012;
(statearr_31026[(11)] = inst_30985__$1);

(statearr_31026[(12)] = inst_30984);

return statearr_31026;
})();
if(cljs.core.truth_(inst_30986)){
var statearr_31027_31056 = state_31012__$1;
(statearr_31027_31056[(1)] = (8));

} else {
var statearr_31028_31057 = state_31012__$1;
(statearr_31028_31057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (14))){
var inst_31005 = (state_31012[(2)]);
var inst_31006 = cljs.core.async.close_BANG_.call(null,out);
var state_31012__$1 = (function (){var statearr_31030 = state_31012;
(statearr_31030[(13)] = inst_31005);

return statearr_31030;
})();
var statearr_31031_31058 = state_31012__$1;
(statearr_31031_31058[(2)] = inst_31006);

(statearr_31031_31058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (10))){
var inst_30996 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31032_31059 = state_31012__$1;
(statearr_31032_31059[(2)] = inst_30996);

(statearr_31032_31059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (8))){
var inst_30976 = (state_31012[(8)]);
var inst_30985 = (state_31012[(11)]);
var tmp31029 = inst_30976;
var inst_30976__$1 = tmp31029;
var inst_30977 = inst_30985;
var state_31012__$1 = (function (){var statearr_31033 = state_31012;
(statearr_31033[(7)] = inst_30977);

(statearr_31033[(8)] = inst_30976__$1);

return statearr_31033;
})();
var statearr_31034_31060 = state_31012__$1;
(statearr_31034_31060[(2)] = null);

(statearr_31034_31060[(1)] = (2));


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
});})(c__28364__auto___31046,out))
;
return ((function (switch__28252__auto__,c__28364__auto___31046,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_31038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31038[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_31038[(1)] = (1));

return statearr_31038;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_31012){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_31012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e31039){if((e31039 instanceof Object)){
var ex__28256__auto__ = e31039;
var statearr_31040_31061 = state_31012;
(statearr_31040_31061[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31062 = state_31012;
state_31012 = G__31062;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___31046,out))
})();
var state__28366__auto__ = (function (){var statearr_31041 = f__28365__auto__.call(null);
(statearr_31041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___31046);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___31046,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31063 = [];
var len__26205__auto___31137 = arguments.length;
var i__26206__auto___31138 = (0);
while(true){
if((i__26206__auto___31138 < len__26205__auto___31137)){
args31063.push((arguments[i__26206__auto___31138]));

var G__31139 = (i__26206__auto___31138 + (1));
i__26206__auto___31138 = G__31139;
continue;
} else {
}
break;
}

var G__31065 = args31063.length;
switch (G__31065) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31063.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28364__auto___31141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___31141,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___31141,out){
return (function (state_31107){
var state_val_31108 = (state_31107[(1)]);
if((state_val_31108 === (7))){
var inst_31103 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31109_31142 = state_31107__$1;
(statearr_31109_31142[(2)] = inst_31103);

(statearr_31109_31142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (1))){
var inst_31066 = [];
var inst_31067 = inst_31066;
var inst_31068 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31107__$1 = (function (){var statearr_31110 = state_31107;
(statearr_31110[(7)] = inst_31068);

(statearr_31110[(8)] = inst_31067);

return statearr_31110;
})();
var statearr_31111_31143 = state_31107__$1;
(statearr_31111_31143[(2)] = null);

(statearr_31111_31143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (4))){
var inst_31071 = (state_31107[(9)]);
var inst_31071__$1 = (state_31107[(2)]);
var inst_31072 = (inst_31071__$1 == null);
var inst_31073 = cljs.core.not.call(null,inst_31072);
var state_31107__$1 = (function (){var statearr_31112 = state_31107;
(statearr_31112[(9)] = inst_31071__$1);

return statearr_31112;
})();
if(inst_31073){
var statearr_31113_31144 = state_31107__$1;
(statearr_31113_31144[(1)] = (5));

} else {
var statearr_31114_31145 = state_31107__$1;
(statearr_31114_31145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (15))){
var inst_31097 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31115_31146 = state_31107__$1;
(statearr_31115_31146[(2)] = inst_31097);

(statearr_31115_31146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (13))){
var state_31107__$1 = state_31107;
var statearr_31116_31147 = state_31107__$1;
(statearr_31116_31147[(2)] = null);

(statearr_31116_31147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (6))){
var inst_31067 = (state_31107[(8)]);
var inst_31092 = inst_31067.length;
var inst_31093 = (inst_31092 > (0));
var state_31107__$1 = state_31107;
if(cljs.core.truth_(inst_31093)){
var statearr_31117_31148 = state_31107__$1;
(statearr_31117_31148[(1)] = (12));

} else {
var statearr_31118_31149 = state_31107__$1;
(statearr_31118_31149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (3))){
var inst_31105 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31107__$1,inst_31105);
} else {
if((state_val_31108 === (12))){
var inst_31067 = (state_31107[(8)]);
var inst_31095 = cljs.core.vec.call(null,inst_31067);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31107__$1,(15),out,inst_31095);
} else {
if((state_val_31108 === (2))){
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31107__$1,(4),ch);
} else {
if((state_val_31108 === (11))){
var inst_31071 = (state_31107[(9)]);
var inst_31075 = (state_31107[(10)]);
var inst_31085 = (state_31107[(2)]);
var inst_31086 = [];
var inst_31087 = inst_31086.push(inst_31071);
var inst_31067 = inst_31086;
var inst_31068 = inst_31075;
var state_31107__$1 = (function (){var statearr_31119 = state_31107;
(statearr_31119[(11)] = inst_31087);

(statearr_31119[(7)] = inst_31068);

(statearr_31119[(8)] = inst_31067);

(statearr_31119[(12)] = inst_31085);

return statearr_31119;
})();
var statearr_31120_31150 = state_31107__$1;
(statearr_31120_31150[(2)] = null);

(statearr_31120_31150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (9))){
var inst_31067 = (state_31107[(8)]);
var inst_31083 = cljs.core.vec.call(null,inst_31067);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31107__$1,(11),out,inst_31083);
} else {
if((state_val_31108 === (5))){
var inst_31071 = (state_31107[(9)]);
var inst_31068 = (state_31107[(7)]);
var inst_31075 = (state_31107[(10)]);
var inst_31075__$1 = f.call(null,inst_31071);
var inst_31076 = cljs.core._EQ_.call(null,inst_31075__$1,inst_31068);
var inst_31077 = cljs.core.keyword_identical_QMARK_.call(null,inst_31068,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31078 = (inst_31076) || (inst_31077);
var state_31107__$1 = (function (){var statearr_31121 = state_31107;
(statearr_31121[(10)] = inst_31075__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31078)){
var statearr_31122_31151 = state_31107__$1;
(statearr_31122_31151[(1)] = (8));

} else {
var statearr_31123_31152 = state_31107__$1;
(statearr_31123_31152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (14))){
var inst_31100 = (state_31107[(2)]);
var inst_31101 = cljs.core.async.close_BANG_.call(null,out);
var state_31107__$1 = (function (){var statearr_31125 = state_31107;
(statearr_31125[(13)] = inst_31100);

return statearr_31125;
})();
var statearr_31126_31153 = state_31107__$1;
(statearr_31126_31153[(2)] = inst_31101);

(statearr_31126_31153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (10))){
var inst_31090 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31127_31154 = state_31107__$1;
(statearr_31127_31154[(2)] = inst_31090);

(statearr_31127_31154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (8))){
var inst_31071 = (state_31107[(9)]);
var inst_31067 = (state_31107[(8)]);
var inst_31075 = (state_31107[(10)]);
var inst_31080 = inst_31067.push(inst_31071);
var tmp31124 = inst_31067;
var inst_31067__$1 = tmp31124;
var inst_31068 = inst_31075;
var state_31107__$1 = (function (){var statearr_31128 = state_31107;
(statearr_31128[(7)] = inst_31068);

(statearr_31128[(8)] = inst_31067__$1);

(statearr_31128[(14)] = inst_31080);

return statearr_31128;
})();
var statearr_31129_31155 = state_31107__$1;
(statearr_31129_31155[(2)] = null);

(statearr_31129_31155[(1)] = (2));


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
});})(c__28364__auto___31141,out))
;
return ((function (switch__28252__auto__,c__28364__auto___31141,out){
return (function() {
var cljs$core$async$state_machine__28253__auto__ = null;
var cljs$core$async$state_machine__28253__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = cljs$core$async$state_machine__28253__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var cljs$core$async$state_machine__28253__auto____1 = (function (state_31107){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_31107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e31134){if((e31134 instanceof Object)){
var ex__28256__auto__ = e31134;
var statearr_31135_31156 = state_31107;
(statearr_31135_31156[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31157 = state_31107;
state_31107 = G__31157;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
cljs$core$async$state_machine__28253__auto__ = function(state_31107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28253__auto____1.call(this,state_31107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28253__auto____0;
cljs$core$async$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28253__auto____1;
return cljs$core$async$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___31141,out))
})();
var state__28366__auto__ = (function (){var statearr_31136 = f__28365__auto__.call(null);
(statearr_31136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___31141);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___31141,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1603199193182
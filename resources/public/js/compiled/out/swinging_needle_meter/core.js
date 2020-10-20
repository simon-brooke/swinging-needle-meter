// Compiled by ClojureScript 1.9.229 {}
goog.provide('swinging_needle_meter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('swinging_needle_meter.views');
goog.require('swinging_needle_meter.subs');
goog.require('re_frame.core');
goog.require('swinging_needle_meter.config');
goog.require('swinging_needle_meter.events');
swinging_needle_meter.core.dev_setup = (function swinging_needle_meter$core$dev_setup(){
if(cljs.core.truth_(swinging_needle_meter.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
swinging_needle_meter.core.dispatch_timer_event = (function swinging_needle_meter$core$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
if(typeof swinging_needle_meter.core.do_timer !== 'undefined'){
} else {
swinging_needle_meter.core.do_timer = setInterval(swinging_needle_meter.core.dispatch_timer_event,(100));
}
swinging_needle_meter.core.mount_root = (function swinging_needle_meter$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.views.main_panel], null),document.getElementById("app"));
});
swinging_needle_meter.core.init = (function swinging_needle_meter$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

swinging_needle_meter.core.dev_setup.call(null);

return swinging_needle_meter.core.mount_root.call(null);
});
goog.exportSymbol('swinging_needle_meter.core.init', swinging_needle_meter.core.init);

//# sourceMappingURL=core.js.map?rel=1603200848751
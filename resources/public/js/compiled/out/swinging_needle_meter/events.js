// Compiled by ClojureScript 1.9.229 {}
goog.provide('swinging_needle_meter.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('swinging_needle_meter.state');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return swinging_needle_meter.state.default_state;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__33506){
var vec__33507 = p__33506;
var x = cljs.core.nth.call(null,vec__33507,(0),null);
var value = cljs.core.nth.call(null,vec__33507,(1),null);
var old_value = new cljs.core.Keyword(null,"old-value","old-value",862546795).cljs$core$IFn$_invoke$arity$1(db);
var target = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(db);
var new_value = (old_value + ((target - old_value) / (10)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"old-value","old-value",862546795),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-value","set-value",445227352),(function (db,p__33510){
var vec__33511 = p__33510;
var x = cljs.core.nth.call(null,vec__33511,(0),null);
var value = cljs.core.nth.call(null,vec__33511,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"old-value","old-value",862546795),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"value","value",305978217),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-setpoint","set-setpoint",1444590911),(function (db,p__33514){
var vec__33515 = p__33514;
var _ = cljs.core.nth.call(null,vec__33515,(0),null);
var value = cljs.core.nth.call(null,vec__33515,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"setpoint","setpoint",749640023),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-gradations","set-gradations",1006377373),(function (db,p__33518){
var vec__33519 = p__33518;
var _ = cljs.core.nth.call(null,vec__33519,(0),null);
var value = cljs.core.nth.call(null,vec__33519,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gradations","gradations",1411381107),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-size","set-size",-1037159587),(function (db,p__33522){
var vec__33523 = p__33522;
var _ = cljs.core.nth.call(null,vec__33523,(0),null);
var value = cljs.core.nth.call(null,vec__33523,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"size","size",1098693007),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-min-value","set-min-value",-867525599),(function (db,p__33526){
var vec__33527 = p__33526;
var _ = cljs.core.nth.call(null,vec__33527,(0),null);
var value = cljs.core.nth.call(null,vec__33527,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"min-val","min-val",-243137826),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-max-value","set-max-value",250465433),(function (db,p__33530){
var vec__33531 = p__33530;
var _ = cljs.core.nth.call(null,vec__33531,(0),null);
var value = cljs.core.nth.call(null,vec__33531,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"max-val","max-val",-1492247884),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-warning-value","set-warning-value",1017303323),(function (db,p__33534){
var vec__33535 = p__33534;
var _ = cljs.core.nth.call(null,vec__33535,(0),null);
var value = cljs.core.nth.call(null,vec__33535,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"warn-val","warn-val",847777216),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-unit","set-unit",1403002425),(function (db,p__33538){
var vec__33539 = p__33538;
var _ = cljs.core.nth.call(null,vec__33539,(0),null);
var value = cljs.core.nth.call(null,vec__33539,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"unit","unit",375175175),value);
}));

//# sourceMappingURL=events.js.map?rel=1603199198956
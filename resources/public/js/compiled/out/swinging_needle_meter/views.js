// Compiled by ClojureScript 1.9.229 {}
goog.provide('swinging_needle_meter.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_com.util');
goog.require('swinging_needle_meter.swinging_needle_meter');
goog.require('swinging_needle_meter.utils');
goog.require('reagent.core');
swinging_needle_meter.views.swinging_needle_demo = (function swinging_needle_meter$views$swinging_needle_demo(){
var unit = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175)], null)));
var min_val = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-val","min-val",-243137826)], null)));
var max_val = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-val","max-val",-1492247884)], null)));
var warn_val = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn-val","warn-val",847777216)], null)));
var gradations = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradations","gradations",1411381107)], null)));
var size = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null)));
return ((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.panel_title,"Swinging needle meter"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.status_text,"Wildly experimental"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"An SVG swinging needle meter intended to be useful in dashboards."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Note that the cursor will vanish if the setpoint is null or is less than or equal to min-value; this is intentional."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Note that if the value of model is lower then min-value or greater than max-value,\n                                           it will be limited as it would be on a mechanical meter."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"You can hide the redzone by setting its style to the style 'snm-scale', or by setting 'warn-value' equal to 'max-value'."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.title2,"Behaviour"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"min-value and max-value must be numbers; max-value must be greater than min-value.\n                                           The default behaviour is of a swinging needle meter with the needle deflection proportional\n                                           to the value of the model (also a number) expressed as a proportion of the difference between\n                                           min-value and max-value."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"A red-zone can be introduced by setting a value for warn-value between min-value and max-value. Additionally, if\n                                           the value of model exceeds warn-value the class alarm-class will be set on the meter indicating a warning state."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"A cursor can be shown by setting the value of set-point between min-value and max-value. A tolerance value can be specified\n                                           by setting a value for tolerance. If the difference between the model value and the setpoint value is less than the tolerance\n                                           value, the class target-class will be set on the meter to indicate an on-target status. The setpoint value, like the model value,\n                                           may change dynamically at run-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.args_table,swinging_needle_meter.swinging_needle_meter.swinging_needle_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.swinging_needle_meter.swinging_needle_meter,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-value","old-value",862546795)], null))),new cljs.core.Keyword(null,"setpoint","setpoint",749640023),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setpoint","setpoint",749640023)], null))),new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175)], null))),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-val","min-val",-243137826)], null))),new cljs.core.Keyword(null,"warn-value","warn-value",188022914),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn-val","warn-val",847777216)], null))),new cljs.core.Keyword(null,"max-value","max-value",687805168),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-val","max-val",-1492247884)], null))),new cljs.core.Keyword(null,"tolerance","tolerance",406811818),(2),new cljs.core.Keyword(null,"alarm-class","alarm-class",-237513865),"snm-warning",new cljs.core.Keyword(null,"gradations","gradations",1411381107),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradations","gradations",1411381107)], null))),new cljs.core.Keyword(null,"height","height",1025178622),((cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null))) * (6)) | (0)),new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null))) * (10)) | (0))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"Parameters"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))),new cljs.core.Keyword(null,"min","min",444991522),(-100),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33490_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-value","set-value",445227352),p1__33490_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":setpoint"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setpoint","setpoint",749640023)], null))),new cljs.core.Keyword(null,"min","min",444991522),(-100),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33491_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-setpoint","set-setpoint",1444590911),p1__33491_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setpoint","setpoint",749640023)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":min-val"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-val","min-val",-243137826)], null))),new cljs.core.Keyword(null,"min","min",444991522),(-100),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33492_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-min-value","set-min-value",-867525599),p1__33492_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-val","min-val",-243137826)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":max-val"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-val","max-val",-1492247884)], null))),new cljs.core.Keyword(null,"min","min",444991522),(-100),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33493_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-max-value","set-max-value",250465433),p1__33493_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-val","max-val",-1492247884)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":warn-val"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn-val","warn-val",847777216)], null))),new cljs.core.Keyword(null,"min","min",444991522),(-100),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33494_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-warning-value","set-warning-value",1017303323),p1__33494_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn-val","warn-val",847777216)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":gradations"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradations","gradations",1411381107)], null))),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33495_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-gradations","set-gradations",1006377373),p1__33495_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradations","gradations",1411381107)], null)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":unit"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175)], null))),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Mw",new cljs.core.Keyword(null,"label","label",1718410804),"Megawatts",new cljs.core.Keyword(null,"group","group",582596132),"Electrical"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"M/s",new cljs.core.Keyword(null,"label","label",1718410804),"Metres per second",new cljs.core.Keyword(null,"group","group",582596132),"Motion"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"F/f",new cljs.core.Keyword(null,"label","label",1718410804),"Furlongs per fortnight",new cljs.core.Keyword(null,"group","group",582596132),"Motion"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"Degrees Celsius",new cljs.core.Keyword(null,"group","group",582596132),"Temperature"], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33496_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-unit","set-unit",1403002425),p1__33496_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),size,new cljs.core.Keyword(null,"min","min",444991522),(25),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,min_val,max_val,warn_val,gradations,size){
return (function (p1__33497_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-size","set-size",-1037159587),p1__33497_SHARP_], null));
});})(unit,min_val,max_val,warn_val,gradations,size))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),size], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(unit,min_val,max_val,warn_val,gradations,size))
});
swinging_needle_meter.views.panel = (function swinging_needle_meter$views$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.views.swinging_needle_demo], null);
});
swinging_needle_meter.views.main_panel = (function swinging_needle_meter$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.views.swinging_needle_demo], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1603199198878
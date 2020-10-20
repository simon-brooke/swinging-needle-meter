// Compiled by ClojureScript 1.9.229 {}
goog.provide('swinging_needle_meter.utils');
goog.require('cljs.core');
goog.require('re_com.core');
/**
 * Return the absolute value of the (numeric) argument.
 */
swinging_needle_meter.utils.abs = (function swinging_needle_meter$utils$abs(n){
var x__25461__auto__ = n;
var y__25462__auto__ = (- n);
return ((x__25461__auto__ > y__25462__auto__) ? x__25461__auto__ : y__25462__auto__);
});
/**
 * given a label and a relative path, return a component which hyperlinks to the GitHub URL in a new tab
 */
swinging_needle_meter.utils.github_hyperlink = (function swinging_needle_meter$utils$github_hyperlink(label,src_path){
var base_url = [cljs.core.str("https://github.com/Day8/re-com/tree/master/")].join('');
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str(base_url),cljs.core.str(src_path)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
});
/**
 * Shown across the top of each page
 */
swinging_needle_meter.utils.panel_title = (function swinging_needle_meter$utils$panel_title(panel_name,src1,src2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 9px 0px",new cljs.core.Keyword(null,"height","height",1025178622),"54px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),panel_name,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"25px"], null),(cljs.core.truth_(src1)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"all-small-caps",new cljs.core.Keyword(null,"gap","gap",80255254),"7px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"source:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.github_hyperlink,"component",src1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"|",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.github_hyperlink,"page",src2], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line], null)], null)], null);
});
/**
 * 2nd level title
 */
swinging_needle_meter.utils.title2 = (function swinging_needle_meter$utils$title2(text,style){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),text,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"style","style",-496642736),style], null);
});
/**
 * given some status text, return a component that displays that status
 */
swinging_needle_meter.utils.status_text = (function swinging_needle_meter$utils$status_text(status,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"Status: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),status], null)], null);
});
swinging_needle_meter.utils.material_design_hyperlink = (function swinging_needle_meter$utils$material_design_hyperlink(text){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),text,new cljs.core.Keyword(null,"href","href",-793805698),"http://zavoloklom.github.io/material-design-iconic-font/icons.html",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
});
/**
 * I show one argument in an args table.
 */
swinging_needle_meter.utils.arg_row = (function swinging_needle_meter$utils$arg_row(name_width,arg,odd_row_QMARK_){
var required = new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(arg);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(arg);
var arg_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(arg);
var needed_vec = ((cljs.core.not.call(null,required))?(((default$ == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.semibold.all-small-caps","span.semibold.all-small-caps",1766384283),"optional"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.semibold.all-small-caps","span.semibold.all-small-caps",1766384283),"default:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.semibold","span.semibold",-530788075),[cljs.core.str(default$)].join('')], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.semibold.all-small-caps","span.semibold.all-small-caps",1766384283),"required"], null)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(odd_row_QMARK_)?"#F4F4F4":"#FCFCFC")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"semibold",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.core.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),name_width,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"15px"], null))], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(arg))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"7px 15px 2px 15px"], null),new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"width","width",-384071477),"310px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.semibold","span.semibold",-530788075),arg_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null)], null),needed_vec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"smaller",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(arg)], null)], null)], null)], null)], null);
});
/**
 * I display a component arguements in an easy to read format
 */
swinging_needle_meter.utils.args_table = (function swinging_needle_meter$utils$args_table(args){
var name_width = "130px";
return ((function (name_width){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swinging_needle_meter.utils.title2,"Parameters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,swinging_needle_meter.utils.arg_row,name_width),args,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))))], null);
});
;})(name_width))
});
swinging_needle_meter.utils.scroll_to_top = (function swinging_needle_meter$utils$scroll_to_top(element){
return element.scrollTop = (0);
});

//# sourceMappingURL=utils.js.map?rel=1603199197134
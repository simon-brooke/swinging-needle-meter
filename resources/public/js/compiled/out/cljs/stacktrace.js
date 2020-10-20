// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__26055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__26055__auto__,prefer_table__26056__auto__,method_cache__26057__auto__,cached_hierarchy__26058__auto__,hierarchy__26059__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__26055__auto__,prefer_table__26056__auto__,method_cache__26057__auto__,cached_hierarchy__26058__auto__,hierarchy__26059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26059__auto__,method_table__26055__auto__,prefer_table__26056__auto__,method_cache__26057__auto__,cached_hierarchy__26058__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__25130__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__41903 = cljs.core.reduce.call(null,((function (xs){
return (function (p__41909,p__41910){
var vec__41911 = p__41909;
var pre = cljs.core.nth.call(null,vec__41911,(0),null);
var post = cljs.core.nth.call(null,vec__41911,(1),null);
var vec__41914 = p__41910;
var x = cljs.core.nth.call(null,vec__41914,(0),null);
var i = cljs.core.nth.call(null,vec__41914,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__41903,(0),null);
var vec__41906 = cljs.core.nth.call(null,vec__41903,(1),null);
var line = cljs.core.nth.call(null,vec__41906,(0),null);
var column = cljs.core.nth.call(null,vec__41906,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41917 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__41917,"(","");
} else {
return G__41917;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__41918 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__41918,")","");
} else {
return G__41918;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__41919 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__41919,")","");
} else {
return G__41919;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__41920,file,p__41921){
var map__41926 = p__41920;
var map__41926__$1 = ((((!((map__41926 == null)))?((((map__41926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41926):map__41926);
var repl_env = map__41926__$1;
var host = cljs.core.get.call(null,map__41926__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__41926__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__41926__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__41927 = p__41921;
var map__41927__$1 = ((((!((map__41927 == null)))?((((map__41927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41927):map__41927);
var opts = map__41927__$1;
var asset_path = cljs.core.get.call(null,map__41927__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__25130__auto__ = host_port;
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__25130__auto__ = (function (){var and__25118__auto__ = asset_path;
if(cljs.core.truth_(and__25118__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__25118__auto__;
}
})();
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__41936 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__41936,(0),null);
var flc = cljs.core.nth.call(null,vec__41936,(1),null);
var vec__41939 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41939,(0),null);
var line = cljs.core.nth.call(null,vec__41939,(1),null);
var column = cljs.core.nth.call(null,vec__41939,(2),null);
if(cljs.core.truth_((function (){var and__25118__auto__ = file;
if(cljs.core.truth_(and__25118__auto__)){
var and__25118__auto____$1 = function$;
if(cljs.core.truth_(and__25118__auto____$1)){
var and__25118__auto____$2 = line;
if(cljs.core.truth_(and__25118__auto____$2)){
return column;
} else {
return and__25118__auto____$2;
}
} else {
return and__25118__auto____$1;
}
} else {
return and__25118__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41944_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__41944_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__41943_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41943_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__41942_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41942_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__41951 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41951,(0),null);
var flc = cljs.core.nth.call(null,vec__41951,(1),null);
var vec__41954 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41954,(0),null);
var line = cljs.core.nth.call(null,vec__41954,(1),null);
var column = cljs.core.nth.call(null,vec__41954,(2),null);
if(cljs.core.truth_((function (){var and__25118__auto__ = file;
if(cljs.core.truth_(and__25118__auto__)){
var and__25118__auto____$1 = function$;
if(cljs.core.truth_(and__25118__auto____$1)){
var and__25118__auto____$2 = line;
if(cljs.core.truth_(and__25118__auto____$2)){
return column;
} else {
return and__25118__auto____$2;
}
} else {
return and__25118__auto____$1;
}
} else {
return and__25118__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41959_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__41959_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41958_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41958_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__41957_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41957_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__41966 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41966,(0),null);
var flc = cljs.core.nth.call(null,vec__41966,(1),null);
var vec__41969 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41969,(0),null);
var line = cljs.core.nth.call(null,vec__41969,(1),null);
var column = cljs.core.nth.call(null,vec__41969,(2),null);
if(cljs.core.truth_((function (){var and__25118__auto__ = file;
if(cljs.core.truth_(and__25118__auto__)){
var and__25118__auto____$1 = function$;
if(cljs.core.truth_(and__25118__auto____$1)){
var and__25118__auto____$2 = line;
if(cljs.core.truth_(and__25118__auto____$2)){
return column;
} else {
return and__25118__auto____$2;
}
} else {
return and__25118__auto____$1;
}
} else {
return and__25118__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41974_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__41974_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41973_SHARP_){
return cljs.core._EQ_.call(null,p1__41973_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__41972_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41972_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__41975){
var map__41976 = p__41975;
var map__41976__$1 = ((((!((map__41976 == null)))?((((map__41976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41976):map__41976);
var opts = map__41976__$1;
var output_dir = cljs.core.get.call(null,map__41976__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__41976,map__41976__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__41996 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__41996,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__41996,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__41999 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__41999,(0),null);
var function$ = cljs.core.nth.call(null,vec__41999,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__25118__auto__ = line;
if(cljs.core.truth_(and__25118__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__25118__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__41976,map__41976__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__42002){
var map__42003 = p__42002;
var map__42003__$1 = ((((!((map__42003 == null)))?((((map__42003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42003):map__42003);
var opts = map__42003__$1;
var output_dir = cljs.core.get.call(null,map__42003__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__42003,map__42003__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__42023 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__42023,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__42023,(1),null);
var vec__42026 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__42026,(0),null);
var line_part = cljs.core.nth.call(null,vec__42026,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__25118__auto__ = line_part;
if(cljs.core.truth_(and__25118__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__25118__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__42003,map__42003__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__42029){
var map__42030 = p__42029;
var map__42030__$1 = ((((!((map__42030 == null)))?((((map__42030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42030):map__42030);
var opts = map__42030__$1;
var output_dir = cljs.core.get.call(null,map__42030__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__42030,map__42030__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__25118__auto__ = x;
if(cljs.core.truth_(and__25118__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__25118__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__42030,map__42030__$1,opts,output_dir))
;
var process_frame = ((function (map__42030,map__42030__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__42053 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__42053,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__42053,(1),null);
var vec__42056 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__42056,(0),null);
var line_part = cljs.core.nth.call(null,vec__42056,(1),null);
var col_part = cljs.core.nth.call(null,vec__42056,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__42059 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__42059,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__42059;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__42030,map__42030__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__25130__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__42060_SHARP_){
return (p1__42060_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__42061_SHARP_,p2__42062_SHARP_){
return p1__42061_SHARP_.call(null,p2__42062_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__42063,sms,opts){
var map__42069 = p__42063;
var map__42069__$1 = ((((!((map__42069 == null)))?((((map__42069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42069):map__42069);
var function$ = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__42071 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__42071,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__42071,(1),null);
var call = cljs.core.nth.call(null,vec__42071,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args42076 = [];
var len__26205__auto___42079 = arguments.length;
var i__26206__auto___42080 = (0);
while(true){
if((i__26206__auto___42080 < len__26205__auto___42079)){
args42076.push((arguments[i__26206__auto___42080]));

var G__42081 = (i__26206__auto___42080 + (1));
i__26206__auto___42080 = G__42081;
continue;
} else {
}
break;
}

var G__42078 = args42076.length;
switch (G__42078) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42076.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__42074_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__42074_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__42075_SHARP_){
return cljs.core.dissoc.call(null,p1__42075_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args42083 = [];
var len__26205__auto___42096 = arguments.length;
var i__26206__auto___42097 = (0);
while(true){
if((i__26206__auto___42097 < len__26205__auto___42096)){
args42083.push((arguments[i__26206__auto___42097]));

var G__42098 = (i__26206__auto___42097 + (1));
i__26206__auto___42097 = G__42098;
continue;
} else {
}
break;
}

var G__42085 = args42083.length;
switch (G__42085) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42083.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__26116__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_42086_42100 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_42087_42101 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_42086_42100,_STAR_print_fn_STAR_42087_42101,sb__26116__auto__){
return (function (x__26117__auto__){
return sb__26116__auto__.append(x__26117__auto__);
});})(_STAR_print_newline_STAR_42086_42100,_STAR_print_fn_STAR_42087_42101,sb__26116__auto__))
;

try{var seq__42088_42102 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__42089_42103 = null;
var count__42090_42104 = (0);
var i__42091_42105 = (0);
while(true){
if((i__42091_42105 < count__42090_42104)){
var map__42092_42106 = cljs.core._nth.call(null,chunk__42089_42103,i__42091_42105);
var map__42092_42107__$1 = ((((!((map__42092_42106 == null)))?((((map__42092_42106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42092_42106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42092_42106):map__42092_42106);
var function_42108 = cljs.core.get.call(null,map__42092_42107__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_42109 = cljs.core.get.call(null,map__42092_42107__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_42110 = cljs.core.get.call(null,map__42092_42107__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42111 = cljs.core.get.call(null,map__42092_42107__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_42108)?[cljs.core.str(function_42108),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_42109),cljs.core.str((cljs.core.truth_(line_42110)?[cljs.core.str(":"),cljs.core.str(line_42110)].join(''):null)),cljs.core.str((cljs.core.truth_(column_42111)?[cljs.core.str(":"),cljs.core.str(column_42111)].join(''):null)),cljs.core.str(")")].join(''));

var G__42112 = seq__42088_42102;
var G__42113 = chunk__42089_42103;
var G__42114 = count__42090_42104;
var G__42115 = (i__42091_42105 + (1));
seq__42088_42102 = G__42112;
chunk__42089_42103 = G__42113;
count__42090_42104 = G__42114;
i__42091_42105 = G__42115;
continue;
} else {
var temp__4657__auto___42116 = cljs.core.seq.call(null,seq__42088_42102);
if(temp__4657__auto___42116){
var seq__42088_42117__$1 = temp__4657__auto___42116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42088_42117__$1)){
var c__25941__auto___42118 = cljs.core.chunk_first.call(null,seq__42088_42117__$1);
var G__42119 = cljs.core.chunk_rest.call(null,seq__42088_42117__$1);
var G__42120 = c__25941__auto___42118;
var G__42121 = cljs.core.count.call(null,c__25941__auto___42118);
var G__42122 = (0);
seq__42088_42102 = G__42119;
chunk__42089_42103 = G__42120;
count__42090_42104 = G__42121;
i__42091_42105 = G__42122;
continue;
} else {
var map__42094_42123 = cljs.core.first.call(null,seq__42088_42117__$1);
var map__42094_42124__$1 = ((((!((map__42094_42123 == null)))?((((map__42094_42123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42094_42123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42094_42123):map__42094_42123);
var function_42125 = cljs.core.get.call(null,map__42094_42124__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_42126 = cljs.core.get.call(null,map__42094_42124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_42127 = cljs.core.get.call(null,map__42094_42124__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42128 = cljs.core.get.call(null,map__42094_42124__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_42125)?[cljs.core.str(function_42125),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_42126),cljs.core.str((cljs.core.truth_(line_42127)?[cljs.core.str(":"),cljs.core.str(line_42127)].join(''):null)),cljs.core.str((cljs.core.truth_(column_42128)?[cljs.core.str(":"),cljs.core.str(column_42128)].join(''):null)),cljs.core.str(")")].join(''));

var G__42129 = cljs.core.next.call(null,seq__42088_42117__$1);
var G__42130 = null;
var G__42131 = (0);
var G__42132 = (0);
seq__42088_42102 = G__42129;
chunk__42089_42103 = G__42130;
count__42090_42104 = G__42131;
i__42091_42105 = G__42132;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42087_42101;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42086_42100;
}
return [cljs.core.str(sb__26116__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1603199213718
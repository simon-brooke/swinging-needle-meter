// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25130__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25130__auto__){
return or__25130__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25130__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35332_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35332_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35337 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35338 = null;
var count__35339 = (0);
var i__35340 = (0);
while(true){
if((i__35340 < count__35339)){
var n = cljs.core._nth.call(null,chunk__35338,i__35340);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35341 = seq__35337;
var G__35342 = chunk__35338;
var G__35343 = count__35339;
var G__35344 = (i__35340 + (1));
seq__35337 = G__35341;
chunk__35338 = G__35342;
count__35339 = G__35343;
i__35340 = G__35344;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35337);
if(temp__4657__auto__){
var seq__35337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35337__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__35337__$1);
var G__35345 = cljs.core.chunk_rest.call(null,seq__35337__$1);
var G__35346 = c__25941__auto__;
var G__35347 = cljs.core.count.call(null,c__25941__auto__);
var G__35348 = (0);
seq__35337 = G__35345;
chunk__35338 = G__35346;
count__35339 = G__35347;
i__35340 = G__35348;
continue;
} else {
var n = cljs.core.first.call(null,seq__35337__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35349 = cljs.core.next.call(null,seq__35337__$1);
var G__35350 = null;
var G__35351 = (0);
var G__35352 = (0);
seq__35337 = G__35349;
chunk__35338 = G__35350;
count__35339 = G__35351;
i__35340 = G__35352;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35403_35414 = cljs.core.seq.call(null,deps);
var chunk__35404_35415 = null;
var count__35405_35416 = (0);
var i__35406_35417 = (0);
while(true){
if((i__35406_35417 < count__35405_35416)){
var dep_35418 = cljs.core._nth.call(null,chunk__35404_35415,i__35406_35417);
topo_sort_helper_STAR_.call(null,dep_35418,(depth + (1)),state);

var G__35419 = seq__35403_35414;
var G__35420 = chunk__35404_35415;
var G__35421 = count__35405_35416;
var G__35422 = (i__35406_35417 + (1));
seq__35403_35414 = G__35419;
chunk__35404_35415 = G__35420;
count__35405_35416 = G__35421;
i__35406_35417 = G__35422;
continue;
} else {
var temp__4657__auto___35423 = cljs.core.seq.call(null,seq__35403_35414);
if(temp__4657__auto___35423){
var seq__35403_35424__$1 = temp__4657__auto___35423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35403_35424__$1)){
var c__25941__auto___35425 = cljs.core.chunk_first.call(null,seq__35403_35424__$1);
var G__35426 = cljs.core.chunk_rest.call(null,seq__35403_35424__$1);
var G__35427 = c__25941__auto___35425;
var G__35428 = cljs.core.count.call(null,c__25941__auto___35425);
var G__35429 = (0);
seq__35403_35414 = G__35426;
chunk__35404_35415 = G__35427;
count__35405_35416 = G__35428;
i__35406_35417 = G__35429;
continue;
} else {
var dep_35430 = cljs.core.first.call(null,seq__35403_35424__$1);
topo_sort_helper_STAR_.call(null,dep_35430,(depth + (1)),state);

var G__35431 = cljs.core.next.call(null,seq__35403_35424__$1);
var G__35432 = null;
var G__35433 = (0);
var G__35434 = (0);
seq__35403_35414 = G__35431;
chunk__35404_35415 = G__35432;
count__35405_35416 = G__35433;
i__35406_35417 = G__35434;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35407){
var vec__35411 = p__35407;
var seq__35412 = cljs.core.seq.call(null,vec__35411);
var first__35413 = cljs.core.first.call(null,seq__35412);
var seq__35412__$1 = cljs.core.next.call(null,seq__35412);
var x = first__35413;
var xs = seq__35412__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35411,seq__35412,first__35413,seq__35412__$1,x,xs,get_deps__$1){
return (function (p1__35353_SHARP_){
return clojure.set.difference.call(null,p1__35353_SHARP_,x);
});})(vec__35411,seq__35412,first__35413,seq__35412__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35447 = cljs.core.seq.call(null,provides);
var chunk__35448 = null;
var count__35449 = (0);
var i__35450 = (0);
while(true){
if((i__35450 < count__35449)){
var prov = cljs.core._nth.call(null,chunk__35448,i__35450);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35451_35459 = cljs.core.seq.call(null,requires);
var chunk__35452_35460 = null;
var count__35453_35461 = (0);
var i__35454_35462 = (0);
while(true){
if((i__35454_35462 < count__35453_35461)){
var req_35463 = cljs.core._nth.call(null,chunk__35452_35460,i__35454_35462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35463,prov);

var G__35464 = seq__35451_35459;
var G__35465 = chunk__35452_35460;
var G__35466 = count__35453_35461;
var G__35467 = (i__35454_35462 + (1));
seq__35451_35459 = G__35464;
chunk__35452_35460 = G__35465;
count__35453_35461 = G__35466;
i__35454_35462 = G__35467;
continue;
} else {
var temp__4657__auto___35468 = cljs.core.seq.call(null,seq__35451_35459);
if(temp__4657__auto___35468){
var seq__35451_35469__$1 = temp__4657__auto___35468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35451_35469__$1)){
var c__25941__auto___35470 = cljs.core.chunk_first.call(null,seq__35451_35469__$1);
var G__35471 = cljs.core.chunk_rest.call(null,seq__35451_35469__$1);
var G__35472 = c__25941__auto___35470;
var G__35473 = cljs.core.count.call(null,c__25941__auto___35470);
var G__35474 = (0);
seq__35451_35459 = G__35471;
chunk__35452_35460 = G__35472;
count__35453_35461 = G__35473;
i__35454_35462 = G__35474;
continue;
} else {
var req_35475 = cljs.core.first.call(null,seq__35451_35469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35475,prov);

var G__35476 = cljs.core.next.call(null,seq__35451_35469__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__35451_35459 = G__35476;
chunk__35452_35460 = G__35477;
count__35453_35461 = G__35478;
i__35454_35462 = G__35479;
continue;
}
} else {
}
}
break;
}

var G__35480 = seq__35447;
var G__35481 = chunk__35448;
var G__35482 = count__35449;
var G__35483 = (i__35450 + (1));
seq__35447 = G__35480;
chunk__35448 = G__35481;
count__35449 = G__35482;
i__35450 = G__35483;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35447);
if(temp__4657__auto__){
var seq__35447__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35447__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__35447__$1);
var G__35484 = cljs.core.chunk_rest.call(null,seq__35447__$1);
var G__35485 = c__25941__auto__;
var G__35486 = cljs.core.count.call(null,c__25941__auto__);
var G__35487 = (0);
seq__35447 = G__35484;
chunk__35448 = G__35485;
count__35449 = G__35486;
i__35450 = G__35487;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35447__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35455_35488 = cljs.core.seq.call(null,requires);
var chunk__35456_35489 = null;
var count__35457_35490 = (0);
var i__35458_35491 = (0);
while(true){
if((i__35458_35491 < count__35457_35490)){
var req_35492 = cljs.core._nth.call(null,chunk__35456_35489,i__35458_35491);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35492,prov);

var G__35493 = seq__35455_35488;
var G__35494 = chunk__35456_35489;
var G__35495 = count__35457_35490;
var G__35496 = (i__35458_35491 + (1));
seq__35455_35488 = G__35493;
chunk__35456_35489 = G__35494;
count__35457_35490 = G__35495;
i__35458_35491 = G__35496;
continue;
} else {
var temp__4657__auto___35497__$1 = cljs.core.seq.call(null,seq__35455_35488);
if(temp__4657__auto___35497__$1){
var seq__35455_35498__$1 = temp__4657__auto___35497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35455_35498__$1)){
var c__25941__auto___35499 = cljs.core.chunk_first.call(null,seq__35455_35498__$1);
var G__35500 = cljs.core.chunk_rest.call(null,seq__35455_35498__$1);
var G__35501 = c__25941__auto___35499;
var G__35502 = cljs.core.count.call(null,c__25941__auto___35499);
var G__35503 = (0);
seq__35455_35488 = G__35500;
chunk__35456_35489 = G__35501;
count__35457_35490 = G__35502;
i__35458_35491 = G__35503;
continue;
} else {
var req_35504 = cljs.core.first.call(null,seq__35455_35498__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35504,prov);

var G__35505 = cljs.core.next.call(null,seq__35455_35498__$1);
var G__35506 = null;
var G__35507 = (0);
var G__35508 = (0);
seq__35455_35488 = G__35505;
chunk__35456_35489 = G__35506;
count__35457_35490 = G__35507;
i__35458_35491 = G__35508;
continue;
}
} else {
}
}
break;
}

var G__35509 = cljs.core.next.call(null,seq__35447__$1);
var G__35510 = null;
var G__35511 = (0);
var G__35512 = (0);
seq__35447 = G__35509;
chunk__35448 = G__35510;
count__35449 = G__35511;
i__35450 = G__35512;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35517_35521 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35518_35522 = null;
var count__35519_35523 = (0);
var i__35520_35524 = (0);
while(true){
if((i__35520_35524 < count__35519_35523)){
var ns_35525 = cljs.core._nth.call(null,chunk__35518_35522,i__35520_35524);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35525);

var G__35526 = seq__35517_35521;
var G__35527 = chunk__35518_35522;
var G__35528 = count__35519_35523;
var G__35529 = (i__35520_35524 + (1));
seq__35517_35521 = G__35526;
chunk__35518_35522 = G__35527;
count__35519_35523 = G__35528;
i__35520_35524 = G__35529;
continue;
} else {
var temp__4657__auto___35530 = cljs.core.seq.call(null,seq__35517_35521);
if(temp__4657__auto___35530){
var seq__35517_35531__$1 = temp__4657__auto___35530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517_35531__$1)){
var c__25941__auto___35532 = cljs.core.chunk_first.call(null,seq__35517_35531__$1);
var G__35533 = cljs.core.chunk_rest.call(null,seq__35517_35531__$1);
var G__35534 = c__25941__auto___35532;
var G__35535 = cljs.core.count.call(null,c__25941__auto___35532);
var G__35536 = (0);
seq__35517_35521 = G__35533;
chunk__35518_35522 = G__35534;
count__35519_35523 = G__35535;
i__35520_35524 = G__35536;
continue;
} else {
var ns_35537 = cljs.core.first.call(null,seq__35517_35531__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35537);

var G__35538 = cljs.core.next.call(null,seq__35517_35531__$1);
var G__35539 = null;
var G__35540 = (0);
var G__35541 = (0);
seq__35517_35521 = G__35538;
chunk__35518_35522 = G__35539;
count__35519_35523 = G__35540;
i__35520_35524 = G__35541;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25130__auto__ = goog.require__;
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35542__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35543__i = 0, G__35543__a = new Array(arguments.length -  0);
while (G__35543__i < G__35543__a.length) {G__35543__a[G__35543__i] = arguments[G__35543__i + 0]; ++G__35543__i;}
  args = new cljs.core.IndexedSeq(G__35543__a,0);
} 
return G__35542__delegate.call(this,args);};
G__35542.cljs$lang$maxFixedArity = 0;
G__35542.cljs$lang$applyTo = (function (arglist__35544){
var args = cljs.core.seq(arglist__35544);
return G__35542__delegate(args);
});
G__35542.cljs$core$IFn$_invoke$arity$variadic = G__35542__delegate;
return G__35542;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35545 = cljs.core._EQ_;
var expr__35546 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35545.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35546))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35545,expr__35546){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35545,expr__35546))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35545,expr__35546){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35548){if((e35548 instanceof Error)){
var e = e35548;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35548;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35545,expr__35546))
} else {
if(cljs.core.truth_(pred__35545.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35546))){
return ((function (pred__35545,expr__35546){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35545,expr__35546){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35545,expr__35546))
);

return deferred.addErrback(((function (deferred,pred__35545,expr__35546){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35545,expr__35546))
);
});
;})(pred__35545,expr__35546))
} else {
if(cljs.core.truth_(pred__35545.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35546))){
return ((function (pred__35545,expr__35546){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35549){if((e35549 instanceof Error)){
var e = e35549;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35549;

}
}})());
});
;})(pred__35545,expr__35546))
} else {
return ((function (pred__35545,expr__35546){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35545,expr__35546))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35550,callback){
var map__35553 = p__35550;
var map__35553__$1 = ((((!((map__35553 == null)))?((((map__35553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35553):map__35553);
var file_msg = map__35553__$1;
var request_url = cljs.core.get.call(null,map__35553__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35553,map__35553__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35553,map__35553__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__){
return (function (state_35577){
var state_val_35578 = (state_35577[(1)]);
if((state_val_35578 === (7))){
var inst_35573 = (state_35577[(2)]);
var state_35577__$1 = state_35577;
var statearr_35579_35599 = state_35577__$1;
(statearr_35579_35599[(2)] = inst_35573);

(statearr_35579_35599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (1))){
var state_35577__$1 = state_35577;
var statearr_35580_35600 = state_35577__$1;
(statearr_35580_35600[(2)] = null);

(statearr_35580_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (4))){
var inst_35557 = (state_35577[(7)]);
var inst_35557__$1 = (state_35577[(2)]);
var state_35577__$1 = (function (){var statearr_35581 = state_35577;
(statearr_35581[(7)] = inst_35557__$1);

return statearr_35581;
})();
if(cljs.core.truth_(inst_35557__$1)){
var statearr_35582_35601 = state_35577__$1;
(statearr_35582_35601[(1)] = (5));

} else {
var statearr_35583_35602 = state_35577__$1;
(statearr_35583_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (6))){
var state_35577__$1 = state_35577;
var statearr_35584_35603 = state_35577__$1;
(statearr_35584_35603[(2)] = null);

(statearr_35584_35603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (3))){
var inst_35575 = (state_35577[(2)]);
var state_35577__$1 = state_35577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35577__$1,inst_35575);
} else {
if((state_val_35578 === (2))){
var state_35577__$1 = state_35577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35577__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35578 === (11))){
var inst_35569 = (state_35577[(2)]);
var state_35577__$1 = (function (){var statearr_35585 = state_35577;
(statearr_35585[(8)] = inst_35569);

return statearr_35585;
})();
var statearr_35586_35604 = state_35577__$1;
(statearr_35586_35604[(2)] = null);

(statearr_35586_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (9))){
var inst_35563 = (state_35577[(9)]);
var inst_35561 = (state_35577[(10)]);
var inst_35565 = inst_35563.call(null,inst_35561);
var state_35577__$1 = state_35577;
var statearr_35587_35605 = state_35577__$1;
(statearr_35587_35605[(2)] = inst_35565);

(statearr_35587_35605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (5))){
var inst_35557 = (state_35577[(7)]);
var inst_35559 = figwheel.client.file_reloading.blocking_load.call(null,inst_35557);
var state_35577__$1 = state_35577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35577__$1,(8),inst_35559);
} else {
if((state_val_35578 === (10))){
var inst_35561 = (state_35577[(10)]);
var inst_35567 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35561);
var state_35577__$1 = state_35577;
var statearr_35588_35606 = state_35577__$1;
(statearr_35588_35606[(2)] = inst_35567);

(statearr_35588_35606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35578 === (8))){
var inst_35557 = (state_35577[(7)]);
var inst_35563 = (state_35577[(9)]);
var inst_35561 = (state_35577[(2)]);
var inst_35562 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35563__$1 = cljs.core.get.call(null,inst_35562,inst_35557);
var state_35577__$1 = (function (){var statearr_35589 = state_35577;
(statearr_35589[(9)] = inst_35563__$1);

(statearr_35589[(10)] = inst_35561);

return statearr_35589;
})();
if(cljs.core.truth_(inst_35563__$1)){
var statearr_35590_35607 = state_35577__$1;
(statearr_35590_35607[(1)] = (9));

} else {
var statearr_35591_35608 = state_35577__$1;
(statearr_35591_35608[(1)] = (10));

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
});})(c__28364__auto__))
;
return ((function (switch__28252__auto__,c__28364__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28253__auto__ = null;
var figwheel$client$file_reloading$state_machine__28253__auto____0 = (function (){
var statearr_35595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35595[(0)] = figwheel$client$file_reloading$state_machine__28253__auto__);

(statearr_35595[(1)] = (1));

return statearr_35595;
});
var figwheel$client$file_reloading$state_machine__28253__auto____1 = (function (state_35577){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_35577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e35596){if((e35596 instanceof Object)){
var ex__28256__auto__ = e35596;
var statearr_35597_35609 = state_35577;
(statearr_35597_35609[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35610 = state_35577;
state_35577 = G__35610;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28253__auto__ = function(state_35577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28253__auto____1.call(this,state_35577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28253__auto____0;
figwheel$client$file_reloading$state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28253__auto____1;
return figwheel$client$file_reloading$state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__))
})();
var state__28366__auto__ = (function (){var statearr_35598 = f__28365__auto__.call(null);
(statearr_35598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__))
);

return c__28364__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35611,callback){
var map__35614 = p__35611;
var map__35614__$1 = ((((!((map__35614 == null)))?((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var file_msg = map__35614__$1;
var namespace = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35614,map__35614__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35614,map__35614__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35616){
var map__35619 = p__35616;
var map__35619__$1 = ((((!((map__35619 == null)))?((((map__35619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var file_msg = map__35619__$1;
var namespace = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35621){
var map__35624 = p__35621;
var map__35624__$1 = ((((!((map__35624 == null)))?((((map__35624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35624):map__35624);
var file_msg = map__35624__$1;
var namespace = cljs.core.get.call(null,map__35624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25118__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25118__auto__){
var or__25130__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
var or__25130__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25130__auto____$1)){
return or__25130__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25118__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35626,callback){
var map__35629 = p__35626;
var map__35629__$1 = ((((!((map__35629 == null)))?((((map__35629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35629):map__35629);
var file_msg = map__35629__$1;
var request_url = cljs.core.get.call(null,map__35629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35629__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28364__auto___35733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto___35733,out){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto___35733,out){
return (function (state_35715){
var state_val_35716 = (state_35715[(1)]);
if((state_val_35716 === (1))){
var inst_35689 = cljs.core.seq.call(null,files);
var inst_35690 = cljs.core.first.call(null,inst_35689);
var inst_35691 = cljs.core.next.call(null,inst_35689);
var inst_35692 = files;
var state_35715__$1 = (function (){var statearr_35717 = state_35715;
(statearr_35717[(7)] = inst_35690);

(statearr_35717[(8)] = inst_35692);

(statearr_35717[(9)] = inst_35691);

return statearr_35717;
})();
var statearr_35718_35734 = state_35715__$1;
(statearr_35718_35734[(2)] = null);

(statearr_35718_35734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35716 === (2))){
var inst_35698 = (state_35715[(10)]);
var inst_35692 = (state_35715[(8)]);
var inst_35697 = cljs.core.seq.call(null,inst_35692);
var inst_35698__$1 = cljs.core.first.call(null,inst_35697);
var inst_35699 = cljs.core.next.call(null,inst_35697);
var inst_35700 = (inst_35698__$1 == null);
var inst_35701 = cljs.core.not.call(null,inst_35700);
var state_35715__$1 = (function (){var statearr_35719 = state_35715;
(statearr_35719[(11)] = inst_35699);

(statearr_35719[(10)] = inst_35698__$1);

return statearr_35719;
})();
if(inst_35701){
var statearr_35720_35735 = state_35715__$1;
(statearr_35720_35735[(1)] = (4));

} else {
var statearr_35721_35736 = state_35715__$1;
(statearr_35721_35736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35716 === (3))){
var inst_35713 = (state_35715[(2)]);
var state_35715__$1 = state_35715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35715__$1,inst_35713);
} else {
if((state_val_35716 === (4))){
var inst_35698 = (state_35715[(10)]);
var inst_35703 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35698);
var state_35715__$1 = state_35715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35715__$1,(7),inst_35703);
} else {
if((state_val_35716 === (5))){
var inst_35709 = cljs.core.async.close_BANG_.call(null,out);
var state_35715__$1 = state_35715;
var statearr_35722_35737 = state_35715__$1;
(statearr_35722_35737[(2)] = inst_35709);

(statearr_35722_35737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35716 === (6))){
var inst_35711 = (state_35715[(2)]);
var state_35715__$1 = state_35715;
var statearr_35723_35738 = state_35715__$1;
(statearr_35723_35738[(2)] = inst_35711);

(statearr_35723_35738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35716 === (7))){
var inst_35699 = (state_35715[(11)]);
var inst_35705 = (state_35715[(2)]);
var inst_35706 = cljs.core.async.put_BANG_.call(null,out,inst_35705);
var inst_35692 = inst_35699;
var state_35715__$1 = (function (){var statearr_35724 = state_35715;
(statearr_35724[(12)] = inst_35706);

(statearr_35724[(8)] = inst_35692);

return statearr_35724;
})();
var statearr_35725_35739 = state_35715__$1;
(statearr_35725_35739[(2)] = null);

(statearr_35725_35739[(1)] = (2));


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
});})(c__28364__auto___35733,out))
;
return ((function (switch__28252__auto__,c__28364__auto___35733,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____0 = (function (){
var statearr_35729 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35729[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__);

(statearr_35729[(1)] = (1));

return statearr_35729;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____1 = (function (state_35715){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_35715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e35730){if((e35730 instanceof Object)){
var ex__28256__auto__ = e35730;
var statearr_35731_35740 = state_35715;
(statearr_35731_35740[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35741 = state_35715;
state_35715 = G__35741;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__ = function(state_35715){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____1.call(this,state_35715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto___35733,out))
})();
var state__28366__auto__ = (function (){var statearr_35732 = f__28365__auto__.call(null);
(statearr_35732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto___35733);

return statearr_35732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto___35733,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35742,opts){
var map__35746 = p__35742;
var map__35746__$1 = ((((!((map__35746 == null)))?((((map__35746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35746):map__35746);
var eval_body__$1 = cljs.core.get.call(null,map__35746__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25118__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25118__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25118__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35748){var e = e35748;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35749_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35749_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35758){
var vec__35759 = p__35758;
var k = cljs.core.nth.call(null,vec__35759,(0),null);
var v = cljs.core.nth.call(null,vec__35759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35762){
var vec__35763 = p__35762;
var k = cljs.core.nth.call(null,vec__35763,(0),null);
var v = cljs.core.nth.call(null,vec__35763,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35769,p__35770){
var map__36017 = p__35769;
var map__36017__$1 = ((((!((map__36017 == null)))?((((map__36017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36017):map__36017);
var opts = map__36017__$1;
var before_jsload = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36018 = p__35770;
var map__36018__$1 = ((((!((map__36018 == null)))?((((map__36018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36018):map__36018);
var msg = map__36018__$1;
var files = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28365__auto__ = (function (){var switch__28252__auto__ = ((function (c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36171){
var state_val_36172 = (state_36171[(1)]);
if((state_val_36172 === (7))){
var inst_36034 = (state_36171[(7)]);
var inst_36035 = (state_36171[(8)]);
var inst_36033 = (state_36171[(9)]);
var inst_36032 = (state_36171[(10)]);
var inst_36040 = cljs.core._nth.call(null,inst_36033,inst_36035);
var inst_36041 = figwheel.client.file_reloading.eval_body.call(null,inst_36040,opts);
var inst_36042 = (inst_36035 + (1));
var tmp36173 = inst_36034;
var tmp36174 = inst_36033;
var tmp36175 = inst_36032;
var inst_36032__$1 = tmp36175;
var inst_36033__$1 = tmp36174;
var inst_36034__$1 = tmp36173;
var inst_36035__$1 = inst_36042;
var state_36171__$1 = (function (){var statearr_36176 = state_36171;
(statearr_36176[(7)] = inst_36034__$1);

(statearr_36176[(8)] = inst_36035__$1);

(statearr_36176[(11)] = inst_36041);

(statearr_36176[(9)] = inst_36033__$1);

(statearr_36176[(10)] = inst_36032__$1);

return statearr_36176;
})();
var statearr_36177_36263 = state_36171__$1;
(statearr_36177_36263[(2)] = null);

(statearr_36177_36263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (20))){
var inst_36075 = (state_36171[(12)]);
var inst_36083 = figwheel.client.file_reloading.sort_files.call(null,inst_36075);
var state_36171__$1 = state_36171;
var statearr_36178_36264 = state_36171__$1;
(statearr_36178_36264[(2)] = inst_36083);

(statearr_36178_36264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (27))){
var state_36171__$1 = state_36171;
var statearr_36179_36265 = state_36171__$1;
(statearr_36179_36265[(2)] = null);

(statearr_36179_36265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (1))){
var inst_36024 = (state_36171[(13)]);
var inst_36021 = before_jsload.call(null,files);
var inst_36022 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36023 = (function (){return ((function (inst_36024,inst_36021,inst_36022,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35766_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35766_SHARP_);
});
;})(inst_36024,inst_36021,inst_36022,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36024__$1 = cljs.core.filter.call(null,inst_36023,files);
var inst_36025 = cljs.core.not_empty.call(null,inst_36024__$1);
var state_36171__$1 = (function (){var statearr_36180 = state_36171;
(statearr_36180[(14)] = inst_36021);

(statearr_36180[(15)] = inst_36022);

(statearr_36180[(13)] = inst_36024__$1);

return statearr_36180;
})();
if(cljs.core.truth_(inst_36025)){
var statearr_36181_36266 = state_36171__$1;
(statearr_36181_36266[(1)] = (2));

} else {
var statearr_36182_36267 = state_36171__$1;
(statearr_36182_36267[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (24))){
var state_36171__$1 = state_36171;
var statearr_36183_36268 = state_36171__$1;
(statearr_36183_36268[(2)] = null);

(statearr_36183_36268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (39))){
var inst_36125 = (state_36171[(16)]);
var state_36171__$1 = state_36171;
var statearr_36184_36269 = state_36171__$1;
(statearr_36184_36269[(2)] = inst_36125);

(statearr_36184_36269[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (46))){
var inst_36166 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36185_36270 = state_36171__$1;
(statearr_36185_36270[(2)] = inst_36166);

(statearr_36185_36270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (4))){
var inst_36069 = (state_36171[(2)]);
var inst_36070 = cljs.core.List.EMPTY;
var inst_36071 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36070);
var inst_36072 = (function (){return ((function (inst_36069,inst_36070,inst_36071,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35767_SHARP_){
var and__25118__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35767_SHARP_);
if(cljs.core.truth_(and__25118__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35767_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35767_SHARP_)));
} else {
return and__25118__auto__;
}
});
;})(inst_36069,inst_36070,inst_36071,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36073 = cljs.core.filter.call(null,inst_36072,files);
var inst_36074 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36075 = cljs.core.concat.call(null,inst_36073,inst_36074);
var state_36171__$1 = (function (){var statearr_36186 = state_36171;
(statearr_36186[(17)] = inst_36069);

(statearr_36186[(18)] = inst_36071);

(statearr_36186[(12)] = inst_36075);

return statearr_36186;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36187_36271 = state_36171__$1;
(statearr_36187_36271[(1)] = (16));

} else {
var statearr_36188_36272 = state_36171__$1;
(statearr_36188_36272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (15))){
var inst_36059 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36189_36273 = state_36171__$1;
(statearr_36189_36273[(2)] = inst_36059);

(statearr_36189_36273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (21))){
var inst_36085 = (state_36171[(19)]);
var inst_36085__$1 = (state_36171[(2)]);
var inst_36086 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36085__$1);
var state_36171__$1 = (function (){var statearr_36190 = state_36171;
(statearr_36190[(19)] = inst_36085__$1);

return statearr_36190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36171__$1,(22),inst_36086);
} else {
if((state_val_36172 === (31))){
var inst_36169 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36171__$1,inst_36169);
} else {
if((state_val_36172 === (32))){
var inst_36125 = (state_36171[(16)]);
var inst_36130 = inst_36125.cljs$lang$protocol_mask$partition0$;
var inst_36131 = (inst_36130 & (64));
var inst_36132 = inst_36125.cljs$core$ISeq$;
var inst_36133 = (inst_36131) || (inst_36132);
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36133)){
var statearr_36191_36274 = state_36171__$1;
(statearr_36191_36274[(1)] = (35));

} else {
var statearr_36192_36275 = state_36171__$1;
(statearr_36192_36275[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (40))){
var inst_36146 = (state_36171[(20)]);
var inst_36145 = (state_36171[(2)]);
var inst_36146__$1 = cljs.core.get.call(null,inst_36145,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36147 = cljs.core.get.call(null,inst_36145,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36148 = cljs.core.not_empty.call(null,inst_36146__$1);
var state_36171__$1 = (function (){var statearr_36193 = state_36171;
(statearr_36193[(21)] = inst_36147);

(statearr_36193[(20)] = inst_36146__$1);

return statearr_36193;
})();
if(cljs.core.truth_(inst_36148)){
var statearr_36194_36276 = state_36171__$1;
(statearr_36194_36276[(1)] = (41));

} else {
var statearr_36195_36277 = state_36171__$1;
(statearr_36195_36277[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (33))){
var state_36171__$1 = state_36171;
var statearr_36196_36278 = state_36171__$1;
(statearr_36196_36278[(2)] = false);

(statearr_36196_36278[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (13))){
var inst_36045 = (state_36171[(22)]);
var inst_36049 = cljs.core.chunk_first.call(null,inst_36045);
var inst_36050 = cljs.core.chunk_rest.call(null,inst_36045);
var inst_36051 = cljs.core.count.call(null,inst_36049);
var inst_36032 = inst_36050;
var inst_36033 = inst_36049;
var inst_36034 = inst_36051;
var inst_36035 = (0);
var state_36171__$1 = (function (){var statearr_36197 = state_36171;
(statearr_36197[(7)] = inst_36034);

(statearr_36197[(8)] = inst_36035);

(statearr_36197[(9)] = inst_36033);

(statearr_36197[(10)] = inst_36032);

return statearr_36197;
})();
var statearr_36198_36279 = state_36171__$1;
(statearr_36198_36279[(2)] = null);

(statearr_36198_36279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (22))){
var inst_36093 = (state_36171[(23)]);
var inst_36089 = (state_36171[(24)]);
var inst_36088 = (state_36171[(25)]);
var inst_36085 = (state_36171[(19)]);
var inst_36088__$1 = (state_36171[(2)]);
var inst_36089__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36088__$1);
var inst_36090 = (function (){var all_files = inst_36085;
var res_SINGLEQUOTE_ = inst_36088__$1;
var res = inst_36089__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36093,inst_36089,inst_36088,inst_36085,inst_36088__$1,inst_36089__$1,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35768_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35768_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36093,inst_36089,inst_36088,inst_36085,inst_36088__$1,inst_36089__$1,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36091 = cljs.core.filter.call(null,inst_36090,inst_36088__$1);
var inst_36092 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36093__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36092);
var inst_36094 = cljs.core.not_empty.call(null,inst_36093__$1);
var state_36171__$1 = (function (){var statearr_36199 = state_36171;
(statearr_36199[(26)] = inst_36091);

(statearr_36199[(23)] = inst_36093__$1);

(statearr_36199[(24)] = inst_36089__$1);

(statearr_36199[(25)] = inst_36088__$1);

return statearr_36199;
})();
if(cljs.core.truth_(inst_36094)){
var statearr_36200_36280 = state_36171__$1;
(statearr_36200_36280[(1)] = (23));

} else {
var statearr_36201_36281 = state_36171__$1;
(statearr_36201_36281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (36))){
var state_36171__$1 = state_36171;
var statearr_36202_36282 = state_36171__$1;
(statearr_36202_36282[(2)] = false);

(statearr_36202_36282[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (41))){
var inst_36146 = (state_36171[(20)]);
var inst_36150 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36151 = cljs.core.map.call(null,inst_36150,inst_36146);
var inst_36152 = cljs.core.pr_str.call(null,inst_36151);
var inst_36153 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36152)].join('');
var inst_36154 = figwheel.client.utils.log.call(null,inst_36153);
var state_36171__$1 = state_36171;
var statearr_36203_36283 = state_36171__$1;
(statearr_36203_36283[(2)] = inst_36154);

(statearr_36203_36283[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (43))){
var inst_36147 = (state_36171[(21)]);
var inst_36157 = (state_36171[(2)]);
var inst_36158 = cljs.core.not_empty.call(null,inst_36147);
var state_36171__$1 = (function (){var statearr_36204 = state_36171;
(statearr_36204[(27)] = inst_36157);

return statearr_36204;
})();
if(cljs.core.truth_(inst_36158)){
var statearr_36205_36284 = state_36171__$1;
(statearr_36205_36284[(1)] = (44));

} else {
var statearr_36206_36285 = state_36171__$1;
(statearr_36206_36285[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (29))){
var inst_36091 = (state_36171[(26)]);
var inst_36125 = (state_36171[(16)]);
var inst_36093 = (state_36171[(23)]);
var inst_36089 = (state_36171[(24)]);
var inst_36088 = (state_36171[(25)]);
var inst_36085 = (state_36171[(19)]);
var inst_36121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36124 = (function (){var all_files = inst_36085;
var res_SINGLEQUOTE_ = inst_36088;
var res = inst_36089;
var files_not_loaded = inst_36091;
var dependencies_that_loaded = inst_36093;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36125,inst_36093,inst_36089,inst_36088,inst_36085,inst_36121,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36123){
var map__36207 = p__36123;
var map__36207__$1 = ((((!((map__36207 == null)))?((((map__36207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36207):map__36207);
var namespace = cljs.core.get.call(null,map__36207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36125,inst_36093,inst_36089,inst_36088,inst_36085,inst_36121,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36125__$1 = cljs.core.group_by.call(null,inst_36124,inst_36091);
var inst_36127 = (inst_36125__$1 == null);
var inst_36128 = cljs.core.not.call(null,inst_36127);
var state_36171__$1 = (function (){var statearr_36209 = state_36171;
(statearr_36209[(16)] = inst_36125__$1);

(statearr_36209[(28)] = inst_36121);

return statearr_36209;
})();
if(inst_36128){
var statearr_36210_36286 = state_36171__$1;
(statearr_36210_36286[(1)] = (32));

} else {
var statearr_36211_36287 = state_36171__$1;
(statearr_36211_36287[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (44))){
var inst_36147 = (state_36171[(21)]);
var inst_36160 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36147);
var inst_36161 = cljs.core.pr_str.call(null,inst_36160);
var inst_36162 = [cljs.core.str("not required: "),cljs.core.str(inst_36161)].join('');
var inst_36163 = figwheel.client.utils.log.call(null,inst_36162);
var state_36171__$1 = state_36171;
var statearr_36212_36288 = state_36171__$1;
(statearr_36212_36288[(2)] = inst_36163);

(statearr_36212_36288[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (6))){
var inst_36066 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36213_36289 = state_36171__$1;
(statearr_36213_36289[(2)] = inst_36066);

(statearr_36213_36289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (28))){
var inst_36091 = (state_36171[(26)]);
var inst_36118 = (state_36171[(2)]);
var inst_36119 = cljs.core.not_empty.call(null,inst_36091);
var state_36171__$1 = (function (){var statearr_36214 = state_36171;
(statearr_36214[(29)] = inst_36118);

return statearr_36214;
})();
if(cljs.core.truth_(inst_36119)){
var statearr_36215_36290 = state_36171__$1;
(statearr_36215_36290[(1)] = (29));

} else {
var statearr_36216_36291 = state_36171__$1;
(statearr_36216_36291[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (25))){
var inst_36089 = (state_36171[(24)]);
var inst_36105 = (state_36171[(2)]);
var inst_36106 = cljs.core.not_empty.call(null,inst_36089);
var state_36171__$1 = (function (){var statearr_36217 = state_36171;
(statearr_36217[(30)] = inst_36105);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36106)){
var statearr_36218_36292 = state_36171__$1;
(statearr_36218_36292[(1)] = (26));

} else {
var statearr_36219_36293 = state_36171__$1;
(statearr_36219_36293[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (34))){
var inst_36140 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36140)){
var statearr_36220_36294 = state_36171__$1;
(statearr_36220_36294[(1)] = (38));

} else {
var statearr_36221_36295 = state_36171__$1;
(statearr_36221_36295[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (17))){
var state_36171__$1 = state_36171;
var statearr_36222_36296 = state_36171__$1;
(statearr_36222_36296[(2)] = recompile_dependents);

(statearr_36222_36296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (3))){
var state_36171__$1 = state_36171;
var statearr_36223_36297 = state_36171__$1;
(statearr_36223_36297[(2)] = null);

(statearr_36223_36297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (12))){
var inst_36062 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36224_36298 = state_36171__$1;
(statearr_36224_36298[(2)] = inst_36062);

(statearr_36224_36298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (2))){
var inst_36024 = (state_36171[(13)]);
var inst_36031 = cljs.core.seq.call(null,inst_36024);
var inst_36032 = inst_36031;
var inst_36033 = null;
var inst_36034 = (0);
var inst_36035 = (0);
var state_36171__$1 = (function (){var statearr_36225 = state_36171;
(statearr_36225[(7)] = inst_36034);

(statearr_36225[(8)] = inst_36035);

(statearr_36225[(9)] = inst_36033);

(statearr_36225[(10)] = inst_36032);

return statearr_36225;
})();
var statearr_36226_36299 = state_36171__$1;
(statearr_36226_36299[(2)] = null);

(statearr_36226_36299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (23))){
var inst_36091 = (state_36171[(26)]);
var inst_36093 = (state_36171[(23)]);
var inst_36089 = (state_36171[(24)]);
var inst_36088 = (state_36171[(25)]);
var inst_36085 = (state_36171[(19)]);
var inst_36096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36098 = (function (){var all_files = inst_36085;
var res_SINGLEQUOTE_ = inst_36088;
var res = inst_36089;
var files_not_loaded = inst_36091;
var dependencies_that_loaded = inst_36093;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36096,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36097){
var map__36227 = p__36097;
var map__36227__$1 = ((((!((map__36227 == null)))?((((map__36227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36227):map__36227);
var request_url = cljs.core.get.call(null,map__36227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36096,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36099 = cljs.core.reverse.call(null,inst_36093);
var inst_36100 = cljs.core.map.call(null,inst_36098,inst_36099);
var inst_36101 = cljs.core.pr_str.call(null,inst_36100);
var inst_36102 = figwheel.client.utils.log.call(null,inst_36101);
var state_36171__$1 = (function (){var statearr_36229 = state_36171;
(statearr_36229[(31)] = inst_36096);

return statearr_36229;
})();
var statearr_36230_36300 = state_36171__$1;
(statearr_36230_36300[(2)] = inst_36102);

(statearr_36230_36300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (35))){
var state_36171__$1 = state_36171;
var statearr_36231_36301 = state_36171__$1;
(statearr_36231_36301[(2)] = true);

(statearr_36231_36301[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (19))){
var inst_36075 = (state_36171[(12)]);
var inst_36081 = figwheel.client.file_reloading.expand_files.call(null,inst_36075);
var state_36171__$1 = state_36171;
var statearr_36232_36302 = state_36171__$1;
(statearr_36232_36302[(2)] = inst_36081);

(statearr_36232_36302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (11))){
var state_36171__$1 = state_36171;
var statearr_36233_36303 = state_36171__$1;
(statearr_36233_36303[(2)] = null);

(statearr_36233_36303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (9))){
var inst_36064 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36234_36304 = state_36171__$1;
(statearr_36234_36304[(2)] = inst_36064);

(statearr_36234_36304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (5))){
var inst_36034 = (state_36171[(7)]);
var inst_36035 = (state_36171[(8)]);
var inst_36037 = (inst_36035 < inst_36034);
var inst_36038 = inst_36037;
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36038)){
var statearr_36235_36305 = state_36171__$1;
(statearr_36235_36305[(1)] = (7));

} else {
var statearr_36236_36306 = state_36171__$1;
(statearr_36236_36306[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (14))){
var inst_36045 = (state_36171[(22)]);
var inst_36054 = cljs.core.first.call(null,inst_36045);
var inst_36055 = figwheel.client.file_reloading.eval_body.call(null,inst_36054,opts);
var inst_36056 = cljs.core.next.call(null,inst_36045);
var inst_36032 = inst_36056;
var inst_36033 = null;
var inst_36034 = (0);
var inst_36035 = (0);
var state_36171__$1 = (function (){var statearr_36237 = state_36171;
(statearr_36237[(32)] = inst_36055);

(statearr_36237[(7)] = inst_36034);

(statearr_36237[(8)] = inst_36035);

(statearr_36237[(9)] = inst_36033);

(statearr_36237[(10)] = inst_36032);

return statearr_36237;
})();
var statearr_36238_36307 = state_36171__$1;
(statearr_36238_36307[(2)] = null);

(statearr_36238_36307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (45))){
var state_36171__$1 = state_36171;
var statearr_36239_36308 = state_36171__$1;
(statearr_36239_36308[(2)] = null);

(statearr_36239_36308[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (26))){
var inst_36091 = (state_36171[(26)]);
var inst_36093 = (state_36171[(23)]);
var inst_36089 = (state_36171[(24)]);
var inst_36088 = (state_36171[(25)]);
var inst_36085 = (state_36171[(19)]);
var inst_36108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36110 = (function (){var all_files = inst_36085;
var res_SINGLEQUOTE_ = inst_36088;
var res = inst_36089;
var files_not_loaded = inst_36091;
var dependencies_that_loaded = inst_36093;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36108,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36109){
var map__36240 = p__36109;
var map__36240__$1 = ((((!((map__36240 == null)))?((((map__36240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36240):map__36240);
var namespace = cljs.core.get.call(null,map__36240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36108,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36111 = cljs.core.map.call(null,inst_36110,inst_36089);
var inst_36112 = cljs.core.pr_str.call(null,inst_36111);
var inst_36113 = figwheel.client.utils.log.call(null,inst_36112);
var inst_36114 = (function (){var all_files = inst_36085;
var res_SINGLEQUOTE_ = inst_36088;
var res = inst_36089;
var files_not_loaded = inst_36091;
var dependencies_that_loaded = inst_36093;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36108,inst_36110,inst_36111,inst_36112,inst_36113,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36091,inst_36093,inst_36089,inst_36088,inst_36085,inst_36108,inst_36110,inst_36111,inst_36112,inst_36113,state_val_36172,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36115 = setTimeout(inst_36114,(10));
var state_36171__$1 = (function (){var statearr_36242 = state_36171;
(statearr_36242[(33)] = inst_36113);

(statearr_36242[(34)] = inst_36108);

return statearr_36242;
})();
var statearr_36243_36309 = state_36171__$1;
(statearr_36243_36309[(2)] = inst_36115);

(statearr_36243_36309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (16))){
var state_36171__$1 = state_36171;
var statearr_36244_36310 = state_36171__$1;
(statearr_36244_36310[(2)] = reload_dependents);

(statearr_36244_36310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (38))){
var inst_36125 = (state_36171[(16)]);
var inst_36142 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36125);
var state_36171__$1 = state_36171;
var statearr_36245_36311 = state_36171__$1;
(statearr_36245_36311[(2)] = inst_36142);

(statearr_36245_36311[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (30))){
var state_36171__$1 = state_36171;
var statearr_36246_36312 = state_36171__$1;
(statearr_36246_36312[(2)] = null);

(statearr_36246_36312[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (10))){
var inst_36045 = (state_36171[(22)]);
var inst_36047 = cljs.core.chunked_seq_QMARK_.call(null,inst_36045);
var state_36171__$1 = state_36171;
if(inst_36047){
var statearr_36247_36313 = state_36171__$1;
(statearr_36247_36313[(1)] = (13));

} else {
var statearr_36248_36314 = state_36171__$1;
(statearr_36248_36314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (18))){
var inst_36079 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36079)){
var statearr_36249_36315 = state_36171__$1;
(statearr_36249_36315[(1)] = (19));

} else {
var statearr_36250_36316 = state_36171__$1;
(statearr_36250_36316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (42))){
var state_36171__$1 = state_36171;
var statearr_36251_36317 = state_36171__$1;
(statearr_36251_36317[(2)] = null);

(statearr_36251_36317[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (37))){
var inst_36137 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36252_36318 = state_36171__$1;
(statearr_36252_36318[(2)] = inst_36137);

(statearr_36252_36318[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (8))){
var inst_36032 = (state_36171[(10)]);
var inst_36045 = (state_36171[(22)]);
var inst_36045__$1 = cljs.core.seq.call(null,inst_36032);
var state_36171__$1 = (function (){var statearr_36253 = state_36171;
(statearr_36253[(22)] = inst_36045__$1);

return statearr_36253;
})();
if(inst_36045__$1){
var statearr_36254_36319 = state_36171__$1;
(statearr_36254_36319[(1)] = (10));

} else {
var statearr_36255_36320 = state_36171__$1;
(statearr_36255_36320[(1)] = (11));

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
}
});})(c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28252__auto__,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____0 = (function (){
var statearr_36259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36259[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__);

(statearr_36259[(1)] = (1));

return statearr_36259;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____1 = (function (state_36171){
while(true){
var ret_value__28254__auto__ = (function (){try{while(true){
var result__28255__auto__ = switch__28252__auto__.call(null,state_36171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28255__auto__;
}
break;
}
}catch (e36260){if((e36260 instanceof Object)){
var ex__28256__auto__ = e36260;
var statearr_36261_36321 = state_36171;
(statearr_36261_36321[(5)] = ex__28256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36322 = state_36171;
state_36171 = G__36322;
continue;
} else {
return ret_value__28254__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__ = function(state_36171){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____1.call(this,state_36171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28253__auto__;
})()
;})(switch__28252__auto__,c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28366__auto__ = (function (){var statearr_36262 = f__28365__auto__.call(null);
(statearr_36262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28364__auto__);

return statearr_36262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28366__auto__);
});})(c__28364__auto__,map__36017,map__36017__$1,opts,before_jsload,on_jsload,reload_dependents,map__36018,map__36018__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28364__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36325,link){
var map__36328 = p__36325;
var map__36328__$1 = ((((!((map__36328 == null)))?((((map__36328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36328):map__36328);
var file = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36328,map__36328__$1,file){
return (function (p1__36323_SHARP_,p2__36324_SHARP_){
if(cljs.core._EQ_.call(null,p1__36323_SHARP_,p2__36324_SHARP_)){
return p1__36323_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36328,map__36328__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36334){
var map__36335 = p__36334;
var map__36335__$1 = ((((!((map__36335 == null)))?((((map__36335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36335):map__36335);
var match_length = cljs.core.get.call(null,map__36335__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36335__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36330_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36330_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36337_SHARP_,p2__36338_SHARP_){
return cljs.core.assoc.call(null,p1__36337_SHARP_,cljs.core.get.call(null,p2__36338_SHARP_,key),p2__36338_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36339 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36339);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36339);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36340,p__36341){
var map__36346 = p__36340;
var map__36346__$1 = ((((!((map__36346 == null)))?((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36346):map__36346);
var on_cssload = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36347 = p__36341;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var files_msg = map__36347__$1;
var files = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1603199203243
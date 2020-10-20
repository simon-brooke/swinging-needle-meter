// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37649){
var map__37674 = p__37649;
var map__37674__$1 = ((((!((map__37674 == null)))?((((map__37674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37674):map__37674);
var m = map__37674__$1;
var n = cljs.core.get.call(null,map__37674__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37676_37698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37677_37699 = null;
var count__37678_37700 = (0);
var i__37679_37701 = (0);
while(true){
if((i__37679_37701 < count__37678_37700)){
var f_37702 = cljs.core._nth.call(null,chunk__37677_37699,i__37679_37701);
cljs.core.println.call(null,"  ",f_37702);

var G__37703 = seq__37676_37698;
var G__37704 = chunk__37677_37699;
var G__37705 = count__37678_37700;
var G__37706 = (i__37679_37701 + (1));
seq__37676_37698 = G__37703;
chunk__37677_37699 = G__37704;
count__37678_37700 = G__37705;
i__37679_37701 = G__37706;
continue;
} else {
var temp__4657__auto___37707 = cljs.core.seq.call(null,seq__37676_37698);
if(temp__4657__auto___37707){
var seq__37676_37708__$1 = temp__4657__auto___37707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37676_37708__$1)){
var c__25941__auto___37709 = cljs.core.chunk_first.call(null,seq__37676_37708__$1);
var G__37710 = cljs.core.chunk_rest.call(null,seq__37676_37708__$1);
var G__37711 = c__25941__auto___37709;
var G__37712 = cljs.core.count.call(null,c__25941__auto___37709);
var G__37713 = (0);
seq__37676_37698 = G__37710;
chunk__37677_37699 = G__37711;
count__37678_37700 = G__37712;
i__37679_37701 = G__37713;
continue;
} else {
var f_37714 = cljs.core.first.call(null,seq__37676_37708__$1);
cljs.core.println.call(null,"  ",f_37714);

var G__37715 = cljs.core.next.call(null,seq__37676_37708__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37676_37698 = G__37715;
chunk__37677_37699 = G__37716;
count__37678_37700 = G__37717;
i__37679_37701 = G__37718;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37719 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25130__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25130__auto__)){
return or__25130__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37719);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37719)))?cljs.core.second.call(null,arglists_37719):arglists_37719));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37680_37720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37681_37721 = null;
var count__37682_37722 = (0);
var i__37683_37723 = (0);
while(true){
if((i__37683_37723 < count__37682_37722)){
var vec__37684_37724 = cljs.core._nth.call(null,chunk__37681_37721,i__37683_37723);
var name_37725 = cljs.core.nth.call(null,vec__37684_37724,(0),null);
var map__37687_37726 = cljs.core.nth.call(null,vec__37684_37724,(1),null);
var map__37687_37727__$1 = ((((!((map__37687_37726 == null)))?((((map__37687_37726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37687_37726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687_37726):map__37687_37726);
var doc_37728 = cljs.core.get.call(null,map__37687_37727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37729 = cljs.core.get.call(null,map__37687_37727__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37725);

cljs.core.println.call(null," ",arglists_37729);

if(cljs.core.truth_(doc_37728)){
cljs.core.println.call(null," ",doc_37728);
} else {
}

var G__37730 = seq__37680_37720;
var G__37731 = chunk__37681_37721;
var G__37732 = count__37682_37722;
var G__37733 = (i__37683_37723 + (1));
seq__37680_37720 = G__37730;
chunk__37681_37721 = G__37731;
count__37682_37722 = G__37732;
i__37683_37723 = G__37733;
continue;
} else {
var temp__4657__auto___37734 = cljs.core.seq.call(null,seq__37680_37720);
if(temp__4657__auto___37734){
var seq__37680_37735__$1 = temp__4657__auto___37734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37680_37735__$1)){
var c__25941__auto___37736 = cljs.core.chunk_first.call(null,seq__37680_37735__$1);
var G__37737 = cljs.core.chunk_rest.call(null,seq__37680_37735__$1);
var G__37738 = c__25941__auto___37736;
var G__37739 = cljs.core.count.call(null,c__25941__auto___37736);
var G__37740 = (0);
seq__37680_37720 = G__37737;
chunk__37681_37721 = G__37738;
count__37682_37722 = G__37739;
i__37683_37723 = G__37740;
continue;
} else {
var vec__37689_37741 = cljs.core.first.call(null,seq__37680_37735__$1);
var name_37742 = cljs.core.nth.call(null,vec__37689_37741,(0),null);
var map__37692_37743 = cljs.core.nth.call(null,vec__37689_37741,(1),null);
var map__37692_37744__$1 = ((((!((map__37692_37743 == null)))?((((map__37692_37743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37692_37743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692_37743):map__37692_37743);
var doc_37745 = cljs.core.get.call(null,map__37692_37744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37746 = cljs.core.get.call(null,map__37692_37744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37742);

cljs.core.println.call(null," ",arglists_37746);

if(cljs.core.truth_(doc_37745)){
cljs.core.println.call(null," ",doc_37745);
} else {
}

var G__37747 = cljs.core.next.call(null,seq__37680_37735__$1);
var G__37748 = null;
var G__37749 = (0);
var G__37750 = (0);
seq__37680_37720 = G__37747;
chunk__37681_37721 = G__37748;
count__37682_37722 = G__37749;
i__37683_37723 = G__37750;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37694 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37695 = null;
var count__37696 = (0);
var i__37697 = (0);
while(true){
if((i__37697 < count__37696)){
var role = cljs.core._nth.call(null,chunk__37695,i__37697);
var temp__4657__auto___37751__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37751__$1)){
var spec_37752 = temp__4657__auto___37751__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37752));
} else {
}

var G__37753 = seq__37694;
var G__37754 = chunk__37695;
var G__37755 = count__37696;
var G__37756 = (i__37697 + (1));
seq__37694 = G__37753;
chunk__37695 = G__37754;
count__37696 = G__37755;
i__37697 = G__37756;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37694);
if(temp__4657__auto____$1){
var seq__37694__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37694__$1)){
var c__25941__auto__ = cljs.core.chunk_first.call(null,seq__37694__$1);
var G__37757 = cljs.core.chunk_rest.call(null,seq__37694__$1);
var G__37758 = c__25941__auto__;
var G__37759 = cljs.core.count.call(null,c__25941__auto__);
var G__37760 = (0);
seq__37694 = G__37757;
chunk__37695 = G__37758;
count__37696 = G__37759;
i__37697 = G__37760;
continue;
} else {
var role = cljs.core.first.call(null,seq__37694__$1);
var temp__4657__auto___37761__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37761__$2)){
var spec_37762 = temp__4657__auto___37761__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37762));
} else {
}

var G__37763 = cljs.core.next.call(null,seq__37694__$1);
var G__37764 = null;
var G__37765 = (0);
var G__37766 = (0);
seq__37694 = G__37763;
chunk__37695 = G__37764;
count__37696 = G__37765;
i__37697 = G__37766;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1603199205844
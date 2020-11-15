// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13819__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13820__i = 0, G__13820__a = new Array(arguments.length -  0);
while (G__13820__i < G__13820__a.length) {G__13820__a[G__13820__i] = arguments[G__13820__i + 0]; ++G__13820__i;}
  args = new cljs.core.IndexedSeq(G__13820__a,0,null);
} 
return G__13819__delegate.call(this,args);};
G__13819.cljs$lang$maxFixedArity = 0;
G__13819.cljs$lang$applyTo = (function (arglist__13821){
var args = cljs.core.seq(arglist__13821);
return G__13819__delegate(args);
});
G__13819.cljs$core$IFn$_invoke$arity$variadic = G__13819__delegate;
return G__13819;
})()
);

(o.error = (function() { 
var G__13822__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13823__i = 0, G__13823__a = new Array(arguments.length -  0);
while (G__13823__i < G__13823__a.length) {G__13823__a[G__13823__i] = arguments[G__13823__i + 0]; ++G__13823__i;}
  args = new cljs.core.IndexedSeq(G__13823__a,0,null);
} 
return G__13822__delegate.call(this,args);};
G__13822.cljs$lang$maxFixedArity = 0;
G__13822.cljs$lang$applyTo = (function (arglist__13824){
var args = cljs.core.seq(arglist__13824);
return G__13822__delegate(args);
});
G__13822.cljs$core$IFn$_invoke$arity$variadic = G__13822__delegate;
return G__13822;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

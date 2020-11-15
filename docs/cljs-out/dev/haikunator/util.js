// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('haikunator.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('haikunator.dictionary');
goog.require('clojure.string');
haikunator.util.toggle_BANG_ = (function haikunator$util$toggle_BANG_(val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.not);
});
haikunator.util.random_number = (function haikunator$util$random_number(){
return ((1000) + cljs.core.rand_int((9000)));
});
haikunator.util.first_letter = (function haikunator$util$first_letter(word){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(1));
});
haikunator.util.random_element = (function haikunator$util$random_element(var_args){
var G__14330 = arguments.length;
switch (G__14330) {
case 1:
return haikunator.util.random_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return haikunator.util.random_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(haikunator.util.random_element.cljs$core$IFn$_invoke$arity$1 = (function (options){
return cljs.core.rand_nth(options);
}));

(haikunator.util.random_element.cljs$core$IFn$_invoke$arity$2 = (function (options,starting_letter){
return haikunator.util.random_element.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14328_SHARP_){
return clojure.string.starts_with_QMARK_(p1__14328_SHARP_,starting_letter);
}),options));
}));

(haikunator.util.random_element.cljs$lang$maxFixedArity = 2);

haikunator.util.generate_name = (function haikunator$util$generate_name(with_number,with_same_first_letter){
var adjective = haikunator.util.random_element.cljs$core$IFn$_invoke$arity$1(haikunator.dictionary.adjectives);
var noun = (cljs.core.truth_(with_same_first_letter)?haikunator.util.random_element.cljs$core$IFn$_invoke$arity$2(haikunator.dictionary.nouns,haikunator.util.first_letter(adjective)):haikunator.util.random_element.cljs$core$IFn$_invoke$arity$1(haikunator.dictionary.nouns));
var number = (cljs.core.truth_(with_number)?haikunator.util.random_number():null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [adjective,noun,number], null)));
});

// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('haikunator.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('haikunator.util');
haikunator.core.with_number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
haikunator.core.with_same_first_letter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
haikunator.core.random_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(haikunator.util.generate_name(cljs.core.deref(haikunator.core.with_number),cljs.core.deref(haikunator.core.with_same_first_letter)));
haikunator.core.name_input = (function haikunator$core$name_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(haikunator.core.random_name),cljs.core.cst$kw$readOnly,true], null)], null);
});
haikunator.core.generate_button = (function haikunator$core$generate_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"generate",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(haikunator.core.random_name,haikunator.util.generate_name(cljs.core.deref(haikunator.core.with_number),cljs.core.deref(haikunator.core.with_same_first_letter)));
})], null)], null);
});
haikunator.core.with_number_checkbox = (function haikunator$core$with_number_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"with-digits",cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,cljs.core.deref(haikunator.core.with_number),cljs.core.cst$kw$on_DASH_change,(function (){
return haikunator.util.toggle_BANG_(haikunator.core.with_number);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"with-digits"], null),"add digits"], null)], null);
});
haikunator.core.with_same_first_letter_checkbox = (function haikunator$core$with_same_first_letter_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"with-same-first-letter",cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,cljs.core.deref(haikunator.core.with_same_first_letter),cljs.core.cst$kw$on_DASH_change,(function (){
return haikunator.util.toggle_BANG_(haikunator.core.with_same_first_letter);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"with-same-first-letter"], null),"same first letters"], null)], null);
});
haikunator.core.name_generator_component = (function haikunator$core$name_generator_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [haikunator.core.name_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [haikunator.core.generate_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checkboxes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [haikunator.core.with_number_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [haikunator.core.with_same_first_letter_checkbox], null)], null)], null);
});
haikunator.core.get_root_element = (function haikunator$core$get_root_element(){
return goog.dom.getElement("app");
});
haikunator.core.mount = (function haikunator$core$mount(element){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [haikunator.core.name_generator_component], null),element);
});
haikunator.core.mount_root = (function haikunator$core$mount_root(){
var temp__5720__auto__ = haikunator.core.get_root_element();
if(cljs.core.truth_(temp__5720__auto__)){
var element = temp__5720__auto__;
return haikunator.core.mount(element);
} else {
return null;
}
});
haikunator.core.mount_root();
haikunator.core.on_reload = (function haikunator$core$on_reload(){
return haikunator.core.mount_root();
});

(ns ^:figwheel-hooks haikunator.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [haikunator.util :refer [generate-name toggle!]]))

;; -------------------------
;; Define atomics

(def with-number (atom true))
(def with-same-first-letter (atom false))
(def random-name (atom (generate-name @with-number @with-same-first-letter)))

;; -------------------------
;; Form elements

(defn name-input [] 
  [:input {:type     "text"
           :value    @random-name
           :readOnly true}])

(defn generate-button [] 
  [:input {:type     "button"
           :value    "generate"
           :on-click #(reset! random-name (generate-name @with-number @with-same-first-letter))}])

(defn with-number-checkbox [] 
  [:div
   [:input {:id        "with-digits"
            :type      "checkbox"
            :checked   @with-number
            :on-change #(toggle! with-number)}]
   [:label {:for "with-digits"} "add digits"]])


(defn with-same-first-letter-checkbox [] 
  [:div
   [:input {:id        "with-same-first-letter"
            :type      "checkbox"
            :checked   @with-same-first-letter
            :on-change #(toggle! with-same-first-letter)}]
   [:label {:for "with-same-first-letter"} "same first letters"]])

(defn name-generator-component []
  [:div.container
   [name-input]
   [generate-button]
   [:div.checkboxes [with-number-checkbox]
    [with-same-first-letter-checkbox]]])

;; -------------------------
;; Initialize app

(defn get-root-element []
  (gdom/getElement "app"))

(defn mount [element]
  (rdom/render [name-generator-component] element))

(defn mount-root []
  (when-let [element (get-root-element)]
    (mount element)))

(mount-root)

(defn ^:after-load on-reload [] (mount-root))

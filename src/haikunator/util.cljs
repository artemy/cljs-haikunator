(ns haikunator.util
  (:require
   [haikunator.dictionary :refer [adjectives nouns]]
   [clojure.string :refer [blank? join starts-with?]]))

(defn toggle! [val] (swap! val not))

(defn random-number [] (+ 1000 (rand-int 9000)))

(defn first-letter [word] (subs word 0 1))

(defn random-element
  ([options] (rand-nth options))
  ([options starting-letter] (random-element (filter #(starts-with? % starting-letter) options))))

(defn generate-name [with-number with-same-first-letter]
  (let [adjective (random-element adjectives)
        noun      (if with-same-first-letter 
                    (random-element nouns (first-letter adjective))
                    (random-element nouns))
        number (when with-number (random-number))]
    (join "-" (remove blank? [adjective noun number]))))

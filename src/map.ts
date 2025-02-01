declare global {
  interface MapConstructor {
    empty<K, V>(): Map<K, V>
  }
  interface Map<K, V> {
    getOrElse(key: K, defaultVal: V): V
    incrementByKey(key: K): number
  }
}

Map.empty = function <K, V>() {
  return new Map<K, V>();
}

Map.prototype.getOrElse = function (key, defaultVal) {
  if (this.has(key)) {
    return this.get(key);
  }
  this.set(key, defaultVal);
  return defaultVal;
};

Map.prototype.incrementByKey = function (key) {
  const count = this.getOrElse(key, 0);
  this.set(key, count + 1)
  return this;
}

export { };    // without this, we errors like: "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."

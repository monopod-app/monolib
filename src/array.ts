export { };    // without this, we errors like: "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."

declare global {
  interface Array<T> {
    waitAll(): any;
    groupBy<U>(keyExtractionFn: (T) => U): Map<U, Array<T>>;
  }
}

Array.prototype.waitAll = async function () {
  return Promise.all(this);
};

Array.prototype.groupBy = function(keyExtractionFn) {
  const map = new Map();
  this.forEach(element => {
    const key = keyExtractionFn(element);
    if (map.has(key)) {
      const arr = map.get(key);
      arr.push(element);
      map.set(key, arr);
    } else {
      map.set(key, [element]);
    }
  });
  return map;
}

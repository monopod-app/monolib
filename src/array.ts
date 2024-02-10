export { };    // without this, we errors like: "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."

declare global {
  interface Array<T> {
    awaitAll(): any;
    count2(): number;
  }
}

Array.prototype.awaitAll = async function() {
  return Promise.all(this);
};

Array.prototype.count2 = function() { return this.length; }

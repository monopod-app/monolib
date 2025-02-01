export { };    // without this, we errors like: "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."

declare global {
  interface Object {
    toMap<T>(): Map<string, T>
  }
}

Object.prototype.toMap = function <T>(): Map<string, T> {
  if (this == null || this == undefined) {
    return null;
  }

  const map = new Map<string, T>();
  for (const [key, value] of Object.entries(this)) {
    map.set(key, value as T);
  }
  return map;
}

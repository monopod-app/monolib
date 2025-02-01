import './map'
import './object'

describe('Map', () => {
  describe('.empty', () => {
    it('returns a new empty map', () => {
      expect(Map.empty<string, number>()).toEqual(new Map<string, number>());
    });
  });

  describe('#getOrElse', () => {
    it('returns the value associated with the given key or returns the default value if the key is absent', () => {
      const name = 'Marlin';
      const fish = {
        name,
        source: 'ocean'
      }.toMap();
      const size = 'medium';
      expect(fish.getOrElse('name', 'foo')).toBe(name);
      expect(fish.getOrElse('size', size)).toBe(size);

      const expectedMap = new Map();
      expectedMap.set('name', name);
      expectedMap.set('source', 'ocean');
      expectedMap.set('size', size);

      expect(fish).toEqual(expectedMap);
      expect(fish.getOrElse('name', name)).toBe(name);
      expect(fish.getOrElse('size', size)).toBe(size);
    });
  });

  describe('#incrementByKey', () => {
    it('increments the counts associated with a key', () => {
      const map = new Map();
      map.incrementByKey('a');
      map.incrementByKey('b');

      const expectedMap = new Map();
      expectedMap.set('a', 1);
      expectedMap.set('b', 2);

      expect(map.incrementByKey('b')).toEqual(expectedMap);
    });
  });
});

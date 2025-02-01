import './array'
import './object'

describe('Array', () => {
  describe('groupBy', () => {
    it('key returned by key extraction function', () => {
      const marlin = {
        name: 'Marlin',
        source: 'ocean'
      }
      const bass = {
        name: 'Bass',
        source: 'lake'
      }
      const trout = {
        name: 'Trout',
        source: 'lake'
      }
      const fish = [marlin, bass, trout];

      const expectedMap = { 'ocean': [marlin], 'lake': [bass, trout] }.toMap();

      expect(fish.groupBy(f => f.source)).toEqual(expectedMap);
    });
  });

  describe('waitAll', () => {
    it('transforms Array<Promise<T>> into Promise<Array<T>>', () => {
      const marlin = {
        name: 'Marlin',
        source: 'ocean'
      }
      const bass = {
        name: 'Bass',
        source: 'lake'
      }
      const marlinP = Promise.resolve(marlin);
      const bassP = Promise.resolve(bass);

      const arrayOfPromises = [marlinP, bassP];

      const expectedPromiseOfArray = Promise.all(arrayOfPromises);

      expect(arrayOfPromises.waitAll()).toEqual(expectedPromiseOfArray);
    });
  });
});

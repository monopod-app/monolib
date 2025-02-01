import './object'

describe('Object', () => {
  describe('toMap', () => {
    it('returns a Map representing the key value pairs in this object', () => {
      const marlin = {
        name: 'Marlin',
        source: 'ocean'
      }

      const expectedMap = new Map();
      expectedMap.set('name', 'Marlin');
      expectedMap.set('source', 'ocean');

      expect(marlin.toMap()).toEqual(expectedMap);
    });
  });
});

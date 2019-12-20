import {
  one,
  two,
} from '../index';


describe('index.js', () => {
  describe('one', () => {
    it('should be a function with proper signature', async () => {
      expect(typeof one).toEqual('function');
    });
  });

  describe('two', () => {
    it('should be a function with proper signature', async () => {
      expect(typeof two).toEqual('function');
    });
  });
});

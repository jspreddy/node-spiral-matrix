import {
  spiralMatrix,
  initEmptySquareMatrix,
  incrementalMatrix,
} from '../index';


describe('index.js', () => {
  describe('initSquareMatrix', () => {
    it('should return undefined for size 0', async () => {
      expect(initEmptySquareMatrix(0)).toEqual(undefined);
    });
    it('should return proper matrix for size 1', async () => {
      expect(initEmptySquareMatrix(1)).toEqual([
        [null],
      ]);
    });

    it('should return proper matrix for size 2', async () => {
      expect(initEmptySquareMatrix(2)).toEqual([
        [null, null],
        [null, null],
      ]);
    });

    it('should return proper matrix for size 3', async () => {
      expect(initEmptySquareMatrix(3)).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
    });
  });

  describe('incrementalMatrix', () => {
    it('should be a function with proper signature', async () => {
      expect(typeof incrementalMatrix).toEqual('function');
      expect(incrementalMatrix.length).toEqual(1);
    });

    it('should return a square matrix with values in a +1 sequence starting at 1', async () => {
      const matrix = incrementalMatrix(4);
      expect(matrix).toEqual([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]);
    });
  });

  describe('spiralMatrix', () => {
    it('should be a function with proper signature', async () => {
      expect(typeof spiralMatrix).toEqual('function');
    });

    it('should go in a circle if I am not setting values.', async () => {
      const spiral = spiralMatrix(4);

      // first loop on the outer rim of matrix.
      expect(spiral.currentIndex()).toEqual({ x: 0, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 1, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 2, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 1 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 2 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 2, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 1, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 2 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 1 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 0 });


      // second loop on the outer rim of matrix.
      expect(spiral.currentIndex()).toEqual({ x: 0, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 1, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 2, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 0 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 1 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 2 });
      expect(spiral.goToNext()).toEqual({ x: 3, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 2, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 1, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 3 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 2 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 1 });
      expect(spiral.goToNext()).toEqual({ x: 0, y: 0 });

      // ten loops around the empty matrix's outer rim.
      for (let i = 0; i < 10; i += 1) {
        expect(spiral.currentIndex()).toEqual({ x: 0, y: 0 });
        expect(spiral.goToNext()).toEqual({ x: 1, y: 0 });
        expect(spiral.goToNext()).toEqual({ x: 2, y: 0 });
        expect(spiral.goToNext()).toEqual({ x: 3, y: 0 });
        expect(spiral.goToNext()).toEqual({ x: 3, y: 1 });
        expect(spiral.goToNext()).toEqual({ x: 3, y: 2 });
        expect(spiral.goToNext()).toEqual({ x: 3, y: 3 });
        expect(spiral.goToNext()).toEqual({ x: 2, y: 3 });
        expect(spiral.goToNext()).toEqual({ x: 1, y: 3 });
        expect(spiral.goToNext()).toEqual({ x: 0, y: 3 });
        expect(spiral.goToNext()).toEqual({ x: 0, y: 2 });
        expect(spiral.goToNext()).toEqual({ x: 0, y: 1 });
        expect(spiral.goToNext()).toEqual({ x: 0, y: 0 });
      }
    });

    it('should form a spiral if I put values and then goToNext ', async () => {
      const spiral = spiralMatrix(4);

      expect(spiral.currentIndex()).toEqual({ x: 0, y: 0 });
      spiral.putCurrentValue(1);

      expect(spiral.goToNext()).toEqual({ x: 1, y: 0 });
      spiral.putCurrentValue(2);

      expect(spiral.goToNext()).toEqual({ x: 2, y: 0 });
      spiral.putCurrentValue(3);

      expect(spiral.goToNext()).toEqual({ x: 3, y: 0 });
      spiral.putCurrentValue(4);

      expect(spiral.goToNext()).toEqual({ x: 3, y: 1 });
      spiral.putCurrentValue(5);

      expect(spiral.goToNext()).toEqual({ x: 3, y: 2 });
      spiral.putCurrentValue(6);

      expect(spiral.goToNext()).toEqual({ x: 3, y: 3 });
      spiral.putCurrentValue(7);

      expect(spiral.getMatrix()).toEqual([
        [1, 2, 3, 4],
        [null, null, null, 5],
        [null, null, null, 6],
        [null, null, null, 7],
      ]);

      expect(spiral.goToNext()).toEqual({ x: 2, y: 3 });
      spiral.putCurrentValue(8);

      expect(spiral.goToNext()).toEqual({ x: 1, y: 3 });
      spiral.putCurrentValue(9);

      expect(spiral.goToNext()).toEqual({ x: 0, y: 3 });
      spiral.putCurrentValue(10);

      expect(spiral.goToNext()).toEqual({ x: 0, y: 2 });
      spiral.putCurrentValue(11);

      expect(spiral.goToNext()).toEqual({ x: 0, y: 1 });
      spiral.putCurrentValue(12);

      expect(spiral.goToNext()).toEqual({ x: 1, y: 1 });
      spiral.putCurrentValue(13);

      expect(spiral.getMatrix()).toEqual([
        [1, 2, 3, 4],
        [12, 13, null, 5],
        [11, null, null, 6],
        [10, 9, 8, 7],
      ]);

      expect(spiral.goToNext()).toEqual({ x: 2, y: 1 });
      spiral.putCurrentValue(14);

      expect(spiral.goToNext()).toEqual({ x: 2, y: 2 });
      spiral.putCurrentValue(15);

      expect(spiral.goToNext()).toEqual({ x: 1, y: 2 });
      spiral.putCurrentValue(16);

      expect(spiral.getMatrix()).toEqual([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ]);
    });

    it('should create a spiral matrix of size 5', async () => {
      const spiral = spiralMatrix(5);
      expect(spiral.fillIncrementalIntegers()).toEqual([
        [1, 2, 3, 4, 5],
        [16, 17, 18, 19, 6],
        [15, 24, 25, 20, 7],
        [14, 23, 22, 21, 8],
        [13, 12, 11, 10, 9],
      ]);
    });

    it('should create a spiral matrix of size 4', async () => {
      const spiral = spiralMatrix(4);
      expect(spiral.fillIncrementalIntegers()).toEqual([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ]);
    });

    it('should create a spiral matrix of size 3', async () => {
      const spiral = spiralMatrix(3);
      expect(spiral.fillIncrementalIntegers()).toEqual([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ]);
    });

    it('should create a spiral matrix of size 2', async () => {
      const spiral = spiralMatrix(2);
      expect(spiral.fillIncrementalIntegers()).toEqual([
        [1, 2],
        [4, 3],
      ]);
    });

    it('should create a spiral matrix of size 1', async () => {
      const spiral = spiralMatrix(1);
      expect(spiral.fillIncrementalIntegers()).toEqual([
        [1],
      ]);
    });

    it('should log a spiral matrix of size 8', async () => {
      const spiral = spiralMatrix(8);
      console.table(spiral.fillIncrementalIntegers());
    });

    it('should log a spiral matrix of size 10', async () => {
      const spiral = spiralMatrix(10);
      console.table(spiral.fillIncrementalIntegers());
    });
  });
});

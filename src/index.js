
function directLog(...params) {
  process.stdout.write(params.toString());
}

// const log = directLog;
const { log } = console;

export function initEmptySquareMatrix(size) {
  const matrix = [];
  if (size <= 0) return undefined;
  for (let x = 0; x < size; x += 1) {
    const row = [];
    for (let y = 0; y < size; y += 1) {
      row.push(null);
    }
    matrix.push(row);
  }
  return matrix;
}

export function incrementalMatrix(size) {
  const matrix = initEmptySquareMatrix(size);
  let number = 0;

  for (let x = 0; x < size; x += 1) {
    for (let y = 0; y < size; y += 1) {
      number += 1;
      matrix[x][y] = number;
    }
  }

  return matrix;
}


export function spiralMatrix(size) {
  const matrix = initEmptySquareMatrix(size);
  let x = 0;
  let y = 0;

  let direction = 'right';

  function currentIndex() {
    return { x, y };
  }

  function goToNext() {
    switch (direction) {
      default:
      case 'right': {
        const nextx = x + 1;
        if (nextx < size && matrix[y][nextx] == null) {
          x = nextx;
          return { x, y };
        }
        if ((nextx < size && matrix[y][nextx] !== null) || nextx === size) {
          direction = 'down';
          return goToNext();
        }

        break;
      }

      case 'down': {
        const nexty = y + 1;
        if (nexty < size && matrix[nexty][x] == null) {
          y = nexty;
          return { x, y };
        }

        if ((nexty < size && matrix[nexty][x] !== null) || nexty === size) {
          direction = 'left';
          return goToNext();
        }

        break;
      }

      case 'left': {
        const prevx = x - 1;
        if (prevx >= 0 && matrix[y][prevx] == null) {
          x = prevx;
          return { x, y };
        }

        if ((prevx >= 0 && matrix[y][prevx] !== null) || prevx < 0) {
          direction = 'up';
          return goToNext();
        }

        break;
      }
      case 'up': {
        const prevy = y - 1;
        if (prevy >= 0 && matrix[prevy][x] == null) {
          y = prevy;
          return { x, y };
        }

        if ((prevy >= 0 && matrix[prevy][x] !== null) || prevy < 0) {
          direction = 'right';
          return goToNext();
        }

        break;
      }
    }

    return { x, y };
  }

  function getCurrentValue() {
    return matrix[y][x];
  }

  function putCurrentValue(val) {
    matrix[y][x] = val;
  }

  function getMatrix() {
    return matrix;
  }

  function fillIncrementalIntegers() {
    const length = size * size;

    let i = 1;
    putCurrentValue(i);
    while (i < length) {
      i += 1;
      goToNext();
      putCurrentValue(i);
    }

    return getMatrix();
  }

  return {
    currentIndex,
    goToNext,
    getCurrentValue,
    putCurrentValue,
    getMatrix,
    fillIncrementalIntegers,
  };
}

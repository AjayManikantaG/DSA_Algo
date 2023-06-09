const array = [2, 2, 2, 2];

const isMonotonic = (array) => {
  if (array.length === 0 || array.length === 1) return true;

  let arrayPattern = array[0] > array[array.length - 1] ? 'MI' : 'MD';
  if (array[0] === array[array.length - 1]) {
    arrayPattern = 'NA';
  }

  for (let i = 0; i < array.length; i++) {
    if (arrayPattern === 'MI') {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }

    if (arrayPattern === 'MD') {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }

    if (arrayPattern === 'NA') {
      if (array[i] > array[i + 1]) {
        arrayPattern === 'MI';
      } else if (array[i] < array[i + 1]) {
        arrayPattern === 'MD';
      }
    }

    if (i + 1 === array.length - 1) {
      return true;
    }
  }
};

const monotonicFlag = isMonotonic(array);

console.log(monotonicFlag);

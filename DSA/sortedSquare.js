const nonSortedArray = [-8, -4, 8, 65];

// Brute Force method
const unsortedSquare = (inputArray) => {
  const sortedSquareArray = new Array(inputArray.length).fill(0);

  for (let i = 0; i < inputArray.length; i++) {
    sortedSquareArray[i] = Math.pow(inputArray[i], 2);
  }

  sortedSquareArray.sort((a, b) => a - b);

  console.log(sortedSquareArray);
};

unsortedSquare(nonSortedArray);

// Optimised method
const sortedArray = [-12, -6, -4, -1, 2, 6, 8];

const sortedSquare = (array) => {
  const newArray = new Array(array.length).fill(0);
  leftPointer = 0;
  rightPointer = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    leftSquaredItem = Math.pow(array[leftPointer], 2);
    rightSquaredItem = Math.pow(array[rightPointer], 2);

    if (leftSquaredItem >= rightSquaredItem) {
      newArray[i] = leftSquaredItem;
      leftPointer++;
    } else if (rightSquaredItem > leftSquaredItem) {
      newArray[i] = rightSquaredItem;
      rightPointer--;
    }
    console.log(leftSquaredItem, rightSquaredItem);
    console.log(newArray);
  }
};

sortedSquare(sortedArray);

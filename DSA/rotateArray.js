const inputArray = [1, 3, 4, 6]; // 0, 1, 2, 3

// if k = 1; then [6,1,3,4];
// if k = 2; then [4,6,1,3];

const rotateArray = (inputArray, rotationCount = 0) => {
  const rotatedArray = new Array(inputArray.length).fill(0);
  const indexLength = inputArray.length - 1;

  if (rotationCount === 0) {
    return inputArray;
  } else if (inputArray.length === 0 || inputArray.length === 1) {
    return inputArray;
  }

  for (let i = 0; i < inputArray.length; i++) {
    
  }
};

// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function (data) {
  //TODO implement me
  //Questions:
  //1. Are the numbers in array in ascending order.
  //2. Can we have more than 2 duplicate Numbers.

  let neighbours = {};
  let cnt = 0;
  let i = 0;
  let originalLength = data.length;
  while (cnt < originalLength) {
    let neighbour1 = data[i] - 1;
    let neighbour2 = data[i] + 1;
    data.splice(i, 1, neighbour1, neighbour2);
    i += 2;
    cnt += 1;

    if (neighbours[neighbour1]) {
      neighbours[neighbour1] += 1;
    } else {
      neighbours[neighbour1] = 1;
    }
    if (neighbours[neighbour2]) {
      neighbours[neighbour2] += 1;
    } else {
      neighbours[neighbour2] = 1;
    }
  }

  let duplicates = Object.entries(neighbours).filter((entry) => entry[1] >= 2);

  if (duplicates.length >= 2) {
    return (
      (isNaN(duplicates[0][0]) ? 0 : parseInt(duplicates[0][0])) +
      (isNaN(duplicates[1][0]) ? 0 : parseInt(duplicates[1][0]))
    );
  } else if (duplicates.length >= 1) {
    return duplicates[0][0];
  }
  return 0;
};

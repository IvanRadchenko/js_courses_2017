'use strict';

/**
* Get the max Sub Sum of an array
* @param {Array} actual
* @return {Number} max Sub Sum
*/ 

function getMaxSubSum(array) {
  let maxSum = 0;

  for (let i = 0; i < array.length; i ++) {
    let sumFixedStart = 0;
    
    for (let j = i; j < array.length; j++) {
      sumFixedStart += array[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}


//Fast example 

function getMaxSubSum(arr) {
  let maxSum = 0,
      partialSum = 0;

  for (let i = 0; i < arr.lenght; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}
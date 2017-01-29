'use strict';

/**
* Check if a parameter is a number
* @param {Number} number
* @return {Boolean} 
*/ 

function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

/**
* Filter the array according to
* the params in range
* @param {Array} actual
* @param (Number) range min
* @param {Number} range max
* @return {Array} filtered 
*/ 
function filterRange(array, a, b) {
  let newArray = [];

  if (!Array.isArray(array) && !isNumeric(a) || !isNumeric(b)) {
    return "Wrong Parameters";
  }

  for (let i = 0; i < array.length; i++) {
    if (a <= array[i] <= b) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

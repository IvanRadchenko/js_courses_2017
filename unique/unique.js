'use strict';
/**
* Get Array with Unique items
* @property {Array} actual
* @return {Array} with unique items 
*/ 


function unique(arr) {
  let newArr = [],
      index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr[index] = arr[i];
      index++;
    }
  }

  return newArr;
}

console.log(unique(["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
]))


//A more faster example

function unique(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    obj[str] = true;
  }

  return Object.keys(obj);
}
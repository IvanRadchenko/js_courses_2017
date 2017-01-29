'use strict';
/**
* Solve eratosthene task
* @param {Array} array
* @param {Number} predefined simple number
* @return {Number} sum of simple numbers
*/ 

//Step 1
let arr = [];

for (let i = 2; i <= 100; i++) {
  arr[i] = true;
}


//Step 2
let p = 2;

do {
  //Step 3
  for (let i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  //Step 4

  let ind = p + 1;
  
  for (ind ; ind < 100; ind++) {
    if (arr[ind]) break;
  }

  p = ind;
} while (p * p < 100); // Step 5

//Step 6
let  sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert( sum );
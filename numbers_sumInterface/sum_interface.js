'use strict';

//Interface for the sum function

/**
* Typing two numbers in order to get the sum
* @properties a and b numbers
* @return alert function with a sum of a and b
*/ 

function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function sumInterface() {
  let a = prompt("Type any number", "0");
  let b = prompt("Type any second number", "0");

 if (!isNumeric(a) || !isNumeric(b)) { 
    sumInterface();
  } else {
    return alert(Number(a) + Number(b));
  }  
}

sumInterface();
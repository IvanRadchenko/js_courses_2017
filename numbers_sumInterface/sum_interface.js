'use strict';

//Interface for the sum function

/**
* Check if a parameter is a number
* @property {Number} number
* @return {Boolean} 
*/ 

function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}


/**
* Typing two numbers in order to get the sum
* @return {String} sum of numbers
*/ 

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
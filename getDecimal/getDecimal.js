'use strict';

//getDecimal function

/**
* Check if a parameter is a number
* @property {Number} number
* @return {Boolean} 
*/ 

function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

/**
* Get decimal of a number
* @property 'number'
* @return {number} 
*/ 
function getDecimal(number) {
  return Math.abs(number) - parseInt(number);
}

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2
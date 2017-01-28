'use strict';

/**
* Type a number
* @orarameter {Number} number
* @return {Number} 
*/ 

function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, n)) / Math.sqrt(5);
}

fibBinet();
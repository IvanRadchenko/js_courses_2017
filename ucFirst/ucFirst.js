'use strict';
/**
* Get UpperCase of a first Letter in string
* @property {String} string
* @return {String} with upperCase of a first Letter 
*/ 

function ucFirst(str) {

  if (!str ||
      typeof str === "undefined" ||
      typeof str === "number" ||
      typeof str === "boolean" ||
      typeof str === "object") {
  return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("вася");
ucFirst("");

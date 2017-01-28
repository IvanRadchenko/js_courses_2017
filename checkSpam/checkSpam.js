'use strict';
/**
* Check if spam is in
* @param {String} actual
* @param {String} spam expected
* @return {Boolean} true or false
* @return {Alert function} no spam alert
*/ 

function checkSpam(str, spam) {

  if (!str ||
      typeof str === "object" ||
      typeof str === "number" ||
      typeof str === "undefined" ||
      typeof str === "boolean") {
    alert("No String is In my lord");
  }

  if (str.toLowerCase().indexOf(spam.toLowerCase()) !== -1) {
    return true;
  }

  return false;
}

console.log(checkSpam("djkjf flkg  xxxx", "XXX"));
console.log(checkSpam("djkjf flkg", "213"));
console.log(checkSpam("djkjf flkg 213", "213"));
console.log(checkSpam("undefined", "213"));

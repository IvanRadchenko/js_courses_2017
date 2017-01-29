
arr = ["test", 2, 1.5, false];
  
//Creating an empy array and check the support of
// infexOf method
if ([].indexOf) {

//If indexOf exists, use it for Index find
  let find = function (array, value) {
    return array.indexOf(value);
  }

} else {
  //If no indexOf, use a custom for in search
  let find = function (array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }

    return -1;
  }
}

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2

console.log(find(arr, 0)); // -1


//Option #2
function find(array, value) {
  if (array.indexOf) {
    return array.indexOf(value);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

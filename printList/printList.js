let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};



//PrintList function with a while loop
function printList(list) {
 let tmp = list;

 while (tmp) {
  alert(tmp.value);
  tmp = tmp.next;
 }
}

// printList(list);

//PrintList function with a recursion
function printRecList(list) {
  alert(list.value);

  if (list.next) {
    printRecList(list.next);
  }
}


//PrintList function with a reversed recursion
function printReversedRecList(list) {

  if (list.next) {
    printReversedRecList(list.next);
  }

  alert( list.value )
}


//PrintList function with a reversed array method
function printReversedList(list) {

  let arr = [],
      tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmo = tmp.next;
  }   

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}
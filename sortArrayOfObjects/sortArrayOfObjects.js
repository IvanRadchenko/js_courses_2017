"use strict";
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];

function sortArrayOfObjects(array) {
  array.sort(function(a, b) {
    return a.age - b.age;
  });
}
sortArrayOfObjects(people)

for (let i = 0; i < people.length; i++) {
  alert ( people[i].name );
}

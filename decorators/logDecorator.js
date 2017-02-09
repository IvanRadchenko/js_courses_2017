  "use strict";

//Loggin decorator with one argument

function work(a) {
  console.log(a * 2);
}

function makeLogging(f, log) { 
  return function() {
    log.push(arguments[0]);
    return f.apply(this, arguments);
  }  
}

let log = [];
work = makeLogging(work, log);

work(1); // 1, added to log array
work(5); // 5, added to log array

for (let i = 0; i < log.length; i++) {
  alert( 'Log:' + log[i] ); // "Log:1", added "Log:5"
}

//Log decorator with several argumens

function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) { 
  return function() {
    log.push([].slice.call(arguments));

    return f.apply(this, arguments);
  };
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // array of i-argumens
  alert( 'Log:' + args.join() ); // "Log:1,2", "Log:4,5"
}
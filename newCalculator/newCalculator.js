function Calculator() {
  this.read = function() {
    this.firstParam = prompt("Type a first number", "");
    this.secondPram = prompt("Type a second number", "");
  };

  this.sum = function() {
    return Number(this.firstParam) + Number(this.secondPram);
  };

  this.mul = function() {
    return this.firstParam * this.secondPram;
  };

  this.calculate = function(str) {

    let strSplit = str.split(" ");
    let a = +strSplit[0];
    let op = strSplit[1];
    let b = +strSplit[2];

    if (op in methods) {
      return methods[op](a, b);
    } else {
      alert("No such method, add it");
    }
  };


  let methods = {
    "+": function (a, b) {
      return a + b;
    },

    "-": function (a, b) {
      return a - b;
    }
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  }

}



let calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
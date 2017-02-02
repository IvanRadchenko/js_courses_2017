let calculator = {

  read: function() {
    this.firstParam = prompt("Type a first number", "");
    this.secondPram = prompt("Type a second number", "");
  },

  sum: function() {
    return (this.firstParam + this.secondPram);
  },

  mul: function() {
    return this.firstParam * this.secondPram;
  }

};


calculator.read();




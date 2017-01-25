describe("Prompt two numbers and return their sum", function() {

function askFirstNumber() {
  let a = Math.round(10 + Math.random() * (100 - 10 + 1));
  
  return a;
}

function askSecondNumber() {
    let b = Math.round(10 + Math.random() * (100 - 10 + 1));
 
    return b;
}
  
  function makeTest(a, b) { 
    let expected = a + b;

    it("summarasing " + a + " and " + b + " gives us: " + expected, function() {
      assert.equal(sumInterface(a, b), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(askFirstNumber(), askSecondNumber());
  }
});
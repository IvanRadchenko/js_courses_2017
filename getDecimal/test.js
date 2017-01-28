describe("Get back the decimal of a number", function() {
  
  function makeTest(a) {
    let expected = Math.abs(a) - Math.abs(parseInt(a));

    it("The decimal of an " + a + " :" + expected, function() {
      assert.equal(getDecimal(a), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    let rand = (-6 + Math.random() * (100 + 1 - 6)) / x;
    makeTest(rand);
  }
});
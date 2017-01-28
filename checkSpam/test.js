describe("Check Spam in a String", function() {
  
  function makeTest() {
    it("If null just falsy cry", function() {
      assert.isFalse(checkSpam(""));
    });

    it("If Object is instead of String give him some Falsy cry", function() {
      assert.isFalse(checkSpam({1: 2}));
    });

    it("If Number crumbled here we send it Falsy hey", function() {
      assert.isFalse(checkSpam(2434));
    });

    it("If Undefined got we in, lets push him False away", function() {
      assert.isFalse(checkSpam(undefined));
    });

    it("If Boolean has visited the miserable String we cry a Falsy river", function() {
      assert.isFalse(checkSpam(true));
    });
  }

  makeTest();
});
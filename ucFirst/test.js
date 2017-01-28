describe("Uppercase the first letter of a string", function() {
  
  function makeTest() {
    it("String returned with first Letter uppercased", function() {
      assert.equal(ucFirst("hack me"), "Hack me");
    });

    it("Null returns an empty string", function() {
      assert.equal(ucFirst(""), "")
    });

    it("Number returns number", function() {
      assert.equal(ucFirst(23), 23)
    });

    it("Boolean returns boolean", function() {
      assert.equal(ucFirst(true), true)
    });

    it("Object returns object", function() {
      assert.isObject(ucFirst({1: "Hey", 2: "Night"}), "We got an object")
    });
  }

  makeTest();
});

//Might be a completely screwed test in my case
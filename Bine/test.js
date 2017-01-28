describe("Bine formula with Fibbonachi sequence ", function() {

  function makeTest() { 
    it("Fib of 8 equals" , function() {
      assert.equal(fibBinet(8), 21);
    });


    it("If fib of 2 then: ", function() {
      assert.equal(fibBinet(2), 1)
    })

    it("If fib of 77 then: ", function() {
      assert.equal(fibBinet(77), 5527939700884755)
    })

  }

  makeTest();


});
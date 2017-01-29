describe("Filter Range function", function() {
  
  describe("Returns the filtered array", function() {
    it("Return [5, 4, 3] if range is 3, 5", function() {
      assert.deepEqual(filterRange([5, 4, 3, 8, 0], 3, 5), [5, 4, 3]);
    })
  });


  it("If not an Array returns \"Wrong paramaters\"", function() {
    assert.equal(filterRange({}, 3, 4), "Wrong Parameters");
  });

  it("If false returns \"Wrong paramaters\"", function() {
    assert.equal(filterRange(false, 3, 4),"Wrong Parameters");
  });

  it("If NaN returns \"Wrong paramaters\"", function() {
    assert.equal(filterRange(NaN, 3 , 0), "Wrong Parameters");
  });

  it("If Number returns \"Wrong paramaters\"", function() {
    assert.equal(filterRange(3, 3 , 0), "Wrong Parameters");
  });  

});
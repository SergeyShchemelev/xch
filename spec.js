describe("test", function() { 
it("should be", function() { 
    expect(isEmpty("a")).toEqual(false); 
}); 
it("should be", function() { 
    expect(isEmpty(undefined)).toEqual(true);
}); 
it("should be", function() { 
    expect(isEmpty("dsfadsfadsfasdf")).toEqual(false); 
}); 
it("should be", function() { 
    expect(isEmpty("")).toEqual(true); 
}); 
it("should be", function() { 
    expect(isEmpty(" ")).toEqual(false); 
}); 
it("should be", function() { 
    expect(isEmpty("12323dsa")).toEqual(false); 
}); 
});
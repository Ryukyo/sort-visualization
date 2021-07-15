const { expect } = require("chai");
const Sort = require("../src/Sort");

describe("Insertion Sort", () => {
  const simpleUnsortedArray = [3, 7, 2, 4, 0, 9];
  const expectedArray = [0, 2, 3, 4, 7, 9];
  let arrayToSort = new Sort(simpleUnsortedArray);
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should sort the given array correctly in ascending order", () => {
    let sortedArray = arrayToSort.sort();
    expect(sortedArray).to.include.ordered.members(expectedArray);
  });
});

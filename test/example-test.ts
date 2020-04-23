import { expect } from "chai";

describe("First passing test suite", () => {
  it("should pass", () => {
    expect(true).to.be.true;
  });
});

describe("Second passing test suite", () => {
  it("should pass", () => {
    expect(true).to.be.true;
  });
});

describe("First failing test suite", () => {
  it("should fail", () => {
    expect(false).to.be.true;
  });
  it("should pass", () => {
    expect(true).to.be.true;
  });
});
describe("Second failing test suite", () => {
  it("should fail", () => {
    expect(false).to.be.true;
  });
  it("should pass", () => {
    expect(true).to.be.true;
  });
});
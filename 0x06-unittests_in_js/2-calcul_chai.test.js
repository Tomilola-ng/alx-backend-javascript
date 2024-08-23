var chai = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  describe("SUM without rounding", function () {
    it("should equal 5", function () {
      chai.expect(calculateNumber("SUM", 1, 4)).to.equal(5);
    });
  });

  describe("SUM with first parameter rounded", function () {
    it("should equal 6", function () {
      chai.expect(calculateNumber("SUM", 2.4, 4)).to.equal(6);
    });
  });

  describe("SUM with second parameter rounded", function () {
    it("should equal 6", function () {
      chai.expect(calculateNumber("SUM", 4, 2.4)).to.equal(6);
    });
  });

  describe("SUM with both parameters rounded", function () {
    it("should equal 6", function () {
      chai.expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT without rounding", function () {
    it("should equal 2", function () {
      chai.expect(calculateNumber("SUBTRACT", 5, 3)).to.equal(2);
    });
  });

  describe("SUBTRACT with first parameter rounded", function () {
    it("should equal -3", function () {
      chai.expect(calculateNumber("SUBTRACT", 2, 4.5)).to.equal(-3);
    });
  });

  describe("SUBTRACT with second parameter rounded", function () {
    it("should equal 3", function () {
      chai.expect(calculateNumber("SUBTRACT", 4.5, 2)).to.equal(3);
    });
  });

  describe("SUBTRACT with both parameters rounded", function () {
    it("should equal -4", function () {
      chai.expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    });
  });

  describe("DIVIDE without rounding", function () {
    it("should equal 2", function () {
      chai.expect(calculateNumber("DIVIDE", 8, 4)).to.equal(2);
    });
  });

  describe("DIVIDE with first parameter rounded", function () {
    it("should equal 5", function () {
      chai.expect(calculateNumber("DIVIDE", 9.5, 2)).to.equal(5);
    });
  });

  describe("DIVIDE with second parameter rounded", function () {
    it("should equal 0.2", function () {
      chai.expect(calculateNumber("DIVIDE", 2, 9.5)).to.equal(0.2);
    });
  });

  describe("DIVIDE with both parameters rounded", function () {
    it("should equal 0.2", function () {
      chai.expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe("DIVIDE with division by zero", function () {
    it("should return Error", function () {
      chai.expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });
  });
});

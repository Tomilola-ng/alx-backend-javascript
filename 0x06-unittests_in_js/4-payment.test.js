//  Test framework
const { expect } = require("chai");
const sinon = require("sinon");

// Circular dependency
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should call calculateNumber", () => {
    const stub = sinon.stub(utils, "calculateNumber");
    stub.returns(10);

    const spy = sinon.spy(console, "log");

    const apiRequestRes = sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(spy.calledOnceWithExactly("The total is: 10"));
    expect(utils.calculateNumber("SUM", 100, 20)).to.equal(apiRequestRes);

    stub.restore();
    spy.restore();
  });
});

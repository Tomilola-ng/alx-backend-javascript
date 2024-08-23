const utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  /**
   * Sends a payment request to the API
   * @param {number} totalAmount - The total amount to be paid
   * @param {number} totalShipping - The total shipping cost
   * @returns {number} The total amount to be paid
   */
  const total = utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${total}`);

  return total;
}

module.exports = sendPaymentRequestToApi;

function getPaymentTokenFromAPI(success) {
  /**
   * Gets a payment token from the API
   * @param {boolean} success - Whether the request was successful
   * @returns {Promise} A promise that resolves with the payment token
   */
  if (success === true)
    return Promise.resolve({ data: "Successful response from the API" });
}

module.exports = getPaymentTokenFromAPI;

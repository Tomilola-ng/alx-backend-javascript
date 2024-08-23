const Utils = {
  /**
   * Checks if a number is negative zero
   * @param {number} n - The number to check
   * @returns {boolean} True if the number is negative zero, false otherwise
   */
  isNegZero(n) {
    const num = Number(n);
    return num === 0 && 1 / num === -Infinity;
  },
  /**
   * Calculates the result of a mathematical operation
   * @param {string} type - The type of operation to perform
   * @param {number} a - The first number
   * @param {number} b - The second number
   * @returns {number} The result of the operation
   */
  calculateNumber(type, a, b = 0) {
    let aNum = Number(a);
    let bNum = Number(b);

    if (Number.isNaN(aNum) || Number.isNaN(bNum))
      throw TypeError('Parameters must be numbers or able to coerce to number');

    aNum = Math.round(aNum);
    bNum = Math.round(bNum);

    let quotient;

    switch (type) {
      case 'SUM':
        return aNum + bNum;
      case 'SUBTRACT':
        return aNum - bNum;
      case 'DIVIDE':
        if (bNum === 0) return 'ERROR';
        quotient = aNum / bNum;
        return this.isNegZero(quotient) ? 0 : quotient;
      default:
        throw Error(
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
        );
    }
  }
};

module.exports = Utils;

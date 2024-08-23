module.exports = function calculateNumber(type, a, b) {
  /**
   * Calculates the result of a mathematical operation
   * @param {string} type - The type of operation to perform
   * @param {number} a - The first number
   * @param {number} b - The second number
   * @returns {number} The result of the operation
   */
  const aNum = Math.round(a);
  const bNum = Math.round(b);

  if (type === "SUBTRACT") {
    return aNum - bNum;
  }

  if (type === "DIVIDE") {
    if (bNum === 0) {
      return "Error";
    }
    return aNum / bNum;
  }

  return aNum + bNum;
};

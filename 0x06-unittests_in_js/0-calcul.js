module.exports = function calculateNumber(a, b = 0) {
  /**
   * Sums two numbers and rounds the result
   */
  const aNum = Number(a);
  const bNum = Number(b);

  if (Number.isNaN(bNum)) throw TypeError("Parameters must be numbers");
  if (Number.isNaN(aNum)) throw TypeError("Parameters must be numbers");

  return Math.round(Number(a)) + Math.round(Number(b));
};

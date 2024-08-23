module.exports = function calculateNumber(type, a, b) {
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

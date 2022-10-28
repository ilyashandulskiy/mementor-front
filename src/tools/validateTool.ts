const validateTool = {
  isPositiveNumber(val: number) {
    return val >= 0 && val < 1000000;
  },
};

export default validateTool;

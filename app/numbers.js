exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    num = num.toString(2);
    const res = num[num.length - bit];
    return parseInt(res);
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    num = num.toString(2);
    if (num.length < 8) {
      num = '0' + num;
    }
    return num;
  },

  multiply: function (a, b) {
    const count = ('' + b).length - 2;
    const res = +(a * b).toFixed(count);
    return res;
  },
};

exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  // 1
  containsNumber: function (str) {
    return /[0-9]/.test(str) ? true : false;
  },
  // 2
  containsRepeatingLetter: function (str) {
    return /([A-Za-z])\1/.test(str);
  },
  // 3
  endsWithVowel: function (str) {
    return /[aeiou]$/i.test(str);
  },
  // 4
  captureThreeNumbers: function (str) {
    var matches = /\d{3}/.exec(str);
    return matches ? matches[0] : false;
  },
  // 5
  matchesPattern: function (str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },
  // 6
  isUSD: function (str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
  },
};

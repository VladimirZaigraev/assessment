exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let resStr = '';
    let counter = 1;
    resStr += str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] == str[i]) {
        if (counter < amount) {
          resStr += str[i];
          counter++;
        }
      } else {
        counter = 1;
        resStr += str[i];
      }
    }
    return resStr;
  },

  wordWrap: function (str, cols) {
    let resStr = '';
    let arr = [];

    arr = str.split(' ');

    resStr = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length > cols) {
        resStr += '\n' + arr[i];
      } else {
        if (resStr.length + arr[i].length > cols) {
          resStr += '\n' + arr[i];
        } else {
          resStr += ' ' + arr[i];
        }
      }
    }
    return resStr;
  },

  reverseString: function (str) {
    return str.split('').reverse().join('');
  },
};

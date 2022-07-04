exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  // 1
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },
  // 2
  sum: function (arr) {
    return arr.reduce((a, b) => a + b);
  },
  // 3
  remove: function (arr, item) {
    return arr.filter((n) => n != item);
  },
  // 4
  removeWithoutCopy: function (arr, item) {
    let len;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },
  // 5
  append: function (arr, item) {
    arr.push(item);
    return arr;
  },
  // 6
  truncate: function (arr) {
    arr.pop();
    return arr;
  },
  // 7
  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },
  // 8
  curtail: function (arr) {
    arr.splice(0, 1);
    return arr;
  },
  // 9
  concat: function (arr1, arr2) {
    const arr = [].concat(arr1, arr2);
    return arr;
  },
  // 10
  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },
  // 11
  count: function (arr, item) {
    let count = 0;
    for (let elem of arr) {
      if (elem == item) {
        count++;
      }
    }
    return count;
  },
  // 12
  duplicates: function (arr) {
    const seen = {};
    const duplecate = [];
    for (let i = 0; i < arr.length; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }
    for (let item in seen) {
      if (seen[item] > 1) {
        duplecate.push(+item);
      }
    }
    return duplecate;
  },
  // 13
  square: function (arr) {
    return arr.map((elem) => elem * elem);
  },
  // 14
  findAllOccurrences: function (arr, target) {
    const resArr = [];
    for (let i = 0; arr.length > i; i++) {
      if (arr[i] === target) {
        resArr.push(i);
      }
    }
    return resArr;
  },
};

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  // 1
  listFiles: function (data, dirName) {
    const arr = [];
    function arrFn(objData) {
      const files = objData.files;
      for (let i = 0; i < files.length; i++) {
        if (typeof files[i] === 'string') {
          if (dirName) {
            if (objData.dir === dirName) {
              arr.push(files[i]);
            }
          } else {
            arr.push(files[i]);
          }
        } else {
          if (objData.dir === dirName) {
            files[i].dir = dirName;
          }
          arrFn(files[i]);
        }
      }
      return arr;
    }
    return arrFn(data);
  },
  // 2
  permute: function (arr) {
    let res = [];
    const helper = (arr2) => {
      if (arr2.length == arr.length) {
        return res.push(arr2);
      }
      for (let e of arr) {
        if (!arr2.includes(e)) {
          helper([...arr2, e]);
        }
      }
    };
    helper([]);
    return res;
  },
  // 3
  fibonacci: function (n) {
    function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n);
  },
  // 4
  validParentheses: function (n) {
    const recurse = (n) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        const left = recurse(i);
        const right = recurse(n - i - 1);
        for (let l = 0; l < left.length; l++) {
          for (let r = 0; r < right.length; r++) {
            result.push('(' + left[l] + ')' + right[r]);
          }
        }
      }
      if (n === 0) {
        return [''];
      }
      return result;
    };
    return recurse(n);
  },
};

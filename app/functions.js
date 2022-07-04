exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  //1
  argsAsArray: function (fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },
  //2
  speak: function (fn, obj) {
    return fn.call(obj);
  },
  //3
  functionFunction: function (str) {
    return function (arg) {
      return str + ', ' + arg;
    };
  },
  //4
  makeClosures: function (arr, fn) {
    const res = [];
    var makeFn = function (val) {
      return function () {
        return fn(val);
      };
    };
    arr.map((elem) => {
      res.push(makeFn(elem));
    });
    return res;
  },
  //5
  partial: function (fn, str1, str2) {
    return function (arg) {
      return fn(str1, str2, arg);
    };
  },
  //6
  useArguments: function () {
    return [].reduce.call(arguments, function (a, b) {
      return a + b;
    });
  },
  //7
  callIt: function (fn) {
    const arr = [].slice.call(arguments, 1, arguments.length);
    return fn.apply(null, arr);
  },
  //8
  partialUsingArguments: function (fn) {
    const arr = [].slice.call(arguments, 1, arguments.length);
    return function () {
      const newArr = [...arr, ...[].slice.call(arguments)];
      return fn.apply(null, newArr);
    };
  },
  //9
  curryIt: function (fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);
        if (accumulatedArguments.length === expectedArgumentsCount) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }
    return getArgumentAccumulator([], fn.length);
  },
};

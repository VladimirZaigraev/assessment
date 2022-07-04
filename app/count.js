exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout = 0;
    function counter() {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(counter, 100);
      }
    }
    counter();
    return {
      cancel: function () {
        clearTimeout(timeout);
      },
    };
  },
};

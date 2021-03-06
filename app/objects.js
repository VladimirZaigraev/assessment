exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  // 1
  alterContext: function (fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },
  // 2
  iterate: function (obj) {
    const props = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        props.push(prop + ': ' + obj[prop]);
      }
    }
    return props;
  },
};

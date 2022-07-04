exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    let promise = new Promise(function (res, rej) {
      res(value);
    });
    return promise;
  },

  manipulateRemoteData: function (url) {
    return fetch(url)
      .then((res) => res.json().then((newRes) => newRes.people))
      .then((people) => people.map((p) => p.name))
      .then((names) => names.sort());
  },
};

cordova.define('cordova-plugin-fetchdata.fetchdata', function (require, exports, module) {
  var exec = require('cordova/exec');

  exports.fetchDataFromNative = function (successFn, errorFn) {
    var setStore = function (data) {
      try {
        for (key in data) {
          window.localStorage.setItem(key, data[key])
        }
      } catch (e) {
        console.error(e);
      }
    }

    var _success = function () {
      setStore.apply(null, arguments)
      successFn.apply(null, arguments)
    }

    if (successFn) {
      exec(_success, errorFn || function () {}, 'LocalDataShare', 'acquire', [])
      return
    }

    return new Promise(function (resolve, reject) {
        exec(resolve, reject, 'LocalDataShare', 'acquire', [])
      })
      .then(function (data) {
        setStore(data)
        return data
      });
  };
});

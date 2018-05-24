'use strict';

cordova.define("cordova-plugin-oriente-router.router", function (require, exports, module) {
  var exec = require('cordova/exec');
  var utils = require('cordova/utils');

  exports.push = function (location) {
    var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var url = location.path.replace(/^(\/@|@)/, '');
    var query = location.query;
    var options = {};
    if (utils.typeName(arguments[1]) === 'Object') {
      options = arguments[1];
      success = arguments[2] || null;
      error = arguments[3] || null;
    }
    exec(success, error, 'CDVNavigator', 'routeToPage', [url, query, options]);
  };

  exports.back = function (success, error) {
    exec(success, error, 'CDVNavigator', 'routeToPage', ['@cashalo://goback/page', {}, {}]);
  }

  exports.isNative = function () {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return (/^\/@.*:/.test(url)
    );
  };
});

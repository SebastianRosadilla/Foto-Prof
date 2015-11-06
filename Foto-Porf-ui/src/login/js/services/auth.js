(function (ng) {
  'use strict';

  var AuthProvider = function () {
    var Auth = { isAuthenticated: false };

    Auth.login = function (username, password) {
      if (username === 'projecthalo' && password === 'messpent77') {
        Auth.isAuthenticated = true;
        return true;
      }

      return false;
    };

    return Auth;
  };

  ng.module('sl.admin.login')
    .service('Auth', AuthProvider);
})(angular);

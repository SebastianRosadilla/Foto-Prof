(function (ng) {
  'use strict';

  var LoginCtrl = function (Auth, $state) {
    this._Auth = Auth;
    this._$state = $state;

    this.username = 'projecthalo';
    this.password = 'messpent77';
  };

  LoginCtrl.prototype.login = function () {
    var Auth = this._Auth;
    var $state = this._$state;

    if (Auth.login(this.username, this.password)) {
      $state.go('main');
    }
  }

  ng.module('sl.admin.login')
    .controller('LoginCtrl', LoginCtrl);
})(angular);

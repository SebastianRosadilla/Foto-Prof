(function (ng) {
  'use strict';

  var LandingCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('landing')
    .controller('LandingCtrl', LandingCtrl);
})(angular);

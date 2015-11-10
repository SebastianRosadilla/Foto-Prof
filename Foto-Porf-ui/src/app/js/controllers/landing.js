(function (ng) {
  'use strict';

  var LandingCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('foto-prof')
    .controller('LandingCtrl', LandingCtrl);
})(angular);

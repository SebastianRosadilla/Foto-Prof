(function (ng) {
  'use strict';

  var AboutCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('foto-prof')
    .controller('AboutCtrl', AboutCtrl);
})(angular);

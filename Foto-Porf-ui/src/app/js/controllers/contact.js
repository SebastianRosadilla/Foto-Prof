(function (ng) {
  'use strict';

  var ContactCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('foto-prof')
    .controller('ContactCtrl', ContactCtrl);
})(angular);

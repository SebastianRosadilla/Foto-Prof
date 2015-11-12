(function (ng) {
  'use strict';

  var ContactCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('contact')
    .controller('ContactCtrl', ContactCtrl);
})(angular);

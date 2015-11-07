(function (ng) {
  'use strict';

  var AppCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('Foto-Prof')
    .controller('AppCtrl', AppCtrl);
})(angular);

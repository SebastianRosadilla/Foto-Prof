(function (ng) {
  'use strict';

  var Lista2Ctrl = function () {
    for(var i = 1; i <= 90; i++) {
      this['algo' + i] = 2;
    }
  };

  ng.module('sl.admin.lista2')
    .controller('Lista2Ctrl',Lista2Ctrl);
})(angular);

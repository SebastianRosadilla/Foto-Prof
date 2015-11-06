(function (ng) {
  'use strict';

  var Lista1Ctrl = function (DataStore) {
    this.DataStore = DataStore;
    for(var i = 1; i <= 90; i++) {
      this['algo' + i] = 1;
    }
  };

  Lista1Ctrl.prototype.save = function () {
    for(var i = 1; i <= 90; i++) {
      this.DataStore.add(this['algo' + i]);
    }
  }

  ng.module('sl.admin.lista1')
    .controller('Lista1Ctrl',Lista1Ctrl);
})(angular);

(function (ng) {
  'use strict';

  var EditCtrl = function ($stateParams, Model) {
    this.name = $stateParams.name;
    this.id = $stateParams.id;
    this.model = Model.create(this.name);

    this.getData();
  };

  /**
   * Update the data on the API.
   */
  EditCtrl.prototype.save = function () {
    var ctrl = this;
    this.data.$save( function () {
      ctrl.getData();
    });
  }

  /**
   * Get the data from the API.
   */
  EditCtrl.prototype.getData = function () {
    var ctrl = this;

    this.data = this.model.get({ id: ctrl.id }, function() {
      var properties = Object.keys(ctrl.data);
      ctrl.element = ctrl.data[properties[1]];
    })
  };


  ng.module('sl.admin.edit')
    .controller('EditCtrl', EditCtrl);
})(angular);

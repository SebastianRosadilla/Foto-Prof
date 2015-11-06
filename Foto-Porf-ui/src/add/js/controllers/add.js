(function (ng) {
  'use strict';

  var schemas = {
    users: ['id', 'username', 'roles', 'lastLogin'],
    portfolios: ['id', 'name', 'cosas'],
    countries: ['id', 'name', 'isoCode'],
    scenarios: ['id', 'name']
  };

  var AddCtrl = function ($stateParams, Model,  $state) {
    this.name = $stateParams.name;
    this._$state = $state;
    this.properties = schemas[this.name];
    this.data = {};

    this.model = Model.create(this.name);
  };

  AddCtrl.prototype.getData = function () {
    this.data = this.model.query(function (data) {
    });
  }

  AddCtrl.prototype.save = function () {
    var instances = new this.model(this.data);
    var ctrl = this,
    $state = this._$state;
    instances.$save( function () {
      console.log('saved');
      $state.go("section", ({name: ctrl.name}))
    })
  }

  ng.module('sl.admin.add')
    .controller('AddCtrl', AddCtrl);
})(angular);

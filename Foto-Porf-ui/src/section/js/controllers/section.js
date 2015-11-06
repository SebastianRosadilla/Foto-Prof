(function (ng) {
  'use strict';

  var headers = {
    users: ['Username', 'Roles', 'Last Login'],
    countries: ['Name', 'ISO Code'],
    portfolios: ['Name', 'Cosas'],
    scenarios: ['Name']
  };

  var SectionCtrl = function ($stateParams, Model) {
    this.name = $stateParams.name;
    this.header = headers[$stateParams.name];

    this.model = Model.create(this.name);
    this.getData();
  };

  /**
  *Get the data from API.
  */
  SectionCtrl.prototype.getData = function () {
    var ctrl = this;
    this.data = this.model.query(function() {
      if (ctrl.name === "users") {
        for(var i = 0; i < ctrl.data.length; i++) {
          ctrl.data[i].roles = ctrl.data[i].roles.join(', ');
        }
      }
    });
  }

  /**
  *Delete the data to API.
  */
  SectionCtrl.prototype.delete = function (item) {
    var ctrl = this;
    var instance =  new this.model({ id: item.id });
    instance.$delete( function () {
      ctrl.getData();
    });
  }

  ng.module('sl.admin.section')
    .controller('SectionCtrl', SectionCtrl);
})(angular);

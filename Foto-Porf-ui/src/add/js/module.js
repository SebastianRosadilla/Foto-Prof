(function (ng) {
  'use strict';

  //Module dependencies
  var dependencies = [
    'ui.router',
    'ngResource',
    'sl.admin.edit',
    'sl.admin.add'
  ];

  ng.module('sl.admin.add', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('add', {
          url: '/adding/:name',
          views: {
            main: {
              templateUrl: 'add/templates/add.html',
              controller: 'AddCtrl as adding'
            },
            header: {
              templateUrl: 'add/templates/header.html'
            }
          },
          data: { requiresLogin: true }
        });
    });
})(angular);

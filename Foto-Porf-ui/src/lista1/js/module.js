(function (ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource',
    'sl.admin.lista2',
    'sl.admin'
  ];

  ng.module('sl.admin.lista1', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('lista1', {
          utl:'/lista1',
          views: {
            main: {
              templateUrl: 'lista1/templates/lista1.html',
              controller: 'Lista1Ctrl as l1'
            }
          },
          data: { requiresLogin: true }
        });
    });
})(angular);

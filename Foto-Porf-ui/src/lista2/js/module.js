(function (ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource',
    'sl.admin.lista1'
  ];

  ng.module('sl.admin.lista2', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('lista2', {
          utl:'/lista2',
          views: {
            main: {
              templateUrl: 'lista2/templates/lista2.html',
              controller: 'Lista2Ctrl as l2'
            }
          },
          data: { requiresLogin: true }
        });
    });
})(angular);

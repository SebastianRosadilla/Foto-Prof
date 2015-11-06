(function (ng) {
  'use strict';

  // Module dependencies.
  var dependencies = [
    'ui.router',
    'sl.admin.section',
    'sl.admin.edit',
    'sl.admin.add',
    'sl.admin.login',
    'sl.admin.lista1',
    'sl.admin.lista2'
  ];

  ng.module('sl.admin', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          views: {
            main: {
              templateUrl: 'app/templates/mainTable.html'
            },
            header: {
              templateUrl: 'app/templates/header.html'
            }
          },
          data: { requiresLogin: true }
        });
    })
    .run(function ($rootScope, $state, Auth) {
      $rootScope.$on('$stateChangeStart', function (e, toState) {
        if (toState.data.requiresLogin && !Auth.isAuthenticated) {
          e.preventDefault();
          $state.go('login');
        }
      })
    });
})(angular);

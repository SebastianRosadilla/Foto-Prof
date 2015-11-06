(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource'
  ];

  ng.module('sl.admin.login', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          views: {
            main: {
              templateUrl: 'login/templates/login.html',
              controller: 'LoginCtrl as login'
            },
            header: {
              templateUrl: 'login/templates/header.html'
            }
          },
          data: { requiresLogin: false }
        });
    });
})(angular);

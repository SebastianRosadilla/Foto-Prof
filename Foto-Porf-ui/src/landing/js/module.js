(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource'
  ];

  ng.module('landing', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('landing', {
          url: '/Home',
          views: {
            main: {
              templateUrl: 'landing/templates/landing.html',
              controller: 'LandingCtrl as landing'
            }
          }
        });
    });
})(angular);

(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource',
    'gallery',
    'contact'
  ];

  ng.module('foto-prof', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('landing', {
          url: '',
          views: {
            main: {
              templateUrl: 'app/templates/landing.html',
              controller: 'LandingCtrl as landing'
            },
            contact: {
              templateUrl: 'app/templates/contact.html',
              controller: 'ContactCtrl as contact'
            },
            about: {
              templateUrl: 'app/templates/about.html',
              controller: 'AboutCtrl as about'
            }
          }
        });
    });
})(angular);

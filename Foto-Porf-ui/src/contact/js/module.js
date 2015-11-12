(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource',
    'foto-prof',
    'gallery'
  ];

  ng.module('contact', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('contact', {
          url: '/Contact',
          views: {
            main: {
              templateUrl: 'contact/templates/contact.html',
              controller: 'ContactCtrl as contact'
            }
          }
        });
    });
})(angular);

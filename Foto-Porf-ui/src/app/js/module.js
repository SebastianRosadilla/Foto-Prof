(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource'
  ];

  ng.module('Foto-Prof', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '',
          views: {
            main: {
              templateUrl: 'app/templates/app.html',
              controller: 'AppCtrl as app'
            }
          }
        });
    });
})(angular);

(function (ng) {
  'use strict';

  // Module dependencies.
  var dependencies = [
    'ui.router',
    'ngResource',
    'sl.admin.edit'
  ];

  ng.module('sl.admin.section', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('section', {
          url: '/section/:name',
          views: {
            main: {
              templateUrl: 'section/templates/section.html',
              controller: 'SectionCtrl as section'
            },
            header: {
              templateUrl: 'section/templates/header.html'
            }
          },
          data: { requiresLogin: true }
        });
    });
})(angular);

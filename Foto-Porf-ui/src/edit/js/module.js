(function (ng) {
  'use strict';

  //Module dependencies
  var dependencies = [
    'ui.router',
    'ngResource'
  ];

  ng.module('sl.admin.edit', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('edit', {
          url: '/section/:name/edit/:id',
          views: {
            main: {
              templateUrl: 'edit/templates/edit.html',
              controller: 'EditCtrl as edit'
            },
            header: {
              templateUrl: 'edit/templates/header.html' 
            }
          },
          data: { requiresLogin: true }
        });
    });
})(angular);

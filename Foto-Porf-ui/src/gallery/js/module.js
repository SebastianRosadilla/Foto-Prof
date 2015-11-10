(function(ng) {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngResource',
    'foto-prof'
  ];

  ng.module('gallery', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('gallery', {
          url: '/Gallery',
          views: {
            main: {
              templateUrl: 'gallery/templates/gallery.html',
              controller: 'GalleryCtrl as gallery'
            }
          }
        });
    });
})(angular);

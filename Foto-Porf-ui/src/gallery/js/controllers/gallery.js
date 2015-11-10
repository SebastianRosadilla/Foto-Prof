(function (ng) {
  'use strict';

  var GalleryCtrl = function ($state) {
    this._$state = $state;
  };

  ng.module('foto-prof')
    .controller('GalleryCtrl', GalleryCtrl);
})(angular);

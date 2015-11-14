(function (ng) {
  'use strict';

  var GalleryCtrl = function ($state) {
    this._$state = $state;

    // Run the galleries
    this.galleries();

  };

  GalleryCtrl.prototype.galleries = function () {
    new Photostack( document.getElementById( 'photostack-1' ));
    new Photostack( document.getElementById( 'photostack-2' ));
    new Photostack( document.getElementById( 'photostack-3' ));
  };

  ng.module('foto-prof')
    .controller('GalleryCtrl', GalleryCtrl);
})(angular);

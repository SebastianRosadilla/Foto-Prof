(function (ng) {
  'use strict';

  var GalleryCtrl = function ($state, $document) {
    this._$state = $state;
    this._$document = $document;

    // Run the galleries
    this.galleries();

    //Prints
    this.obteinPrints();
  };

  GalleryCtrl.prototype.galleries = function () {
    new Photostack( document.getElementById( 'photostack-1' ));
    new Photostack( document.getElementById( 'photostack-2' ));
    new Photostack( document.getElementById( 'photostack-3' ));
  };

  GalleryCtrl.prototype.obteinPrints = function () {
    // console.log(this);
  };

  ng.module('foto-prof')
    .controller('GalleryCtrl', GalleryCtrl);
})(angular);

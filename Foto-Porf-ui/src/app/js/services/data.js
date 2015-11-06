(function (ng) {
  'use strict';

  var DataStoreProvider = function () {
    var items = [];
    for(var i = 0; i < 91; i++) {
      items[i] = 0;
    }

    var DataStore = {};

    DataStore.getAll = function () {
      return items;
    };

    DataStore.add = function (item) {
      var pos = items.indexOf(item);
      if (pos === -1) {
      var pos0 = items.indexOf(0);
        items[pos0] = item;
        console.log(items)
      }
    };

    DataStore.remove = function (item) {
      var pos = items.indexOf(item);
      if (pos !== -1) {
        items[pos] = 0;
      };
    };

    DataStore.isEmpty = function () {
      return items.length === 0;
    };

    return DataStore;
  };

  ng.module('sl.admin')
    .service('DataStore', DataStoreProvider);
})(angular);

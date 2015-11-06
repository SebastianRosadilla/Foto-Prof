(function (ng) {
  'use strict';

  var Model = function ($resource) {
    return {
      create: function (name) {
        var resource = $resource(
          'http://localhost:8000/' + name + '/:id',
          {id: "@id"},
          {
            get: { method: "GET" },
            query: { method: "GET", isArray: true },
            update: { method: "PUT" },
            create: { method: "POST" },
            delete: { method: "DELETE" }
          }
        );

        resource.prototype.$save = function (cb) {
          if (this.id) return this.$update(cb);

          return this.$create(cb);
        };

        return resource;
      }
    };
  };

  ng.module('sl.admin.edit')
    .service('Model', Model);
})(angular);

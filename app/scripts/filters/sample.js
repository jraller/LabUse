'use strict';

angular.module('jraller.Labuse')

  .filter('time', function() {
    return function(obj) {
      return +new Date(obj);
    };
  })

  .filter('startFrom', function() {
    return function(obj, index) {
      return obj && obj.slice(index);
    };
  });

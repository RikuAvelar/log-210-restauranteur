'use strict';

angular.module('clientApp')
  .factory('CurrencyFormatter', function () {
    var filterFloat = function (value) {
        if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    };

    var formatDecimal = function(val){
      return val.toFixed(2);
    };

    var formatCurrency = function(value, defaultVal){
      var filteredVal = filterFloat(value);
      if(_.isNaN(filteredVal)) {
        return defaultVal || 'N/A';
      } else {
        return formatDecimal(filteredVal) + ' $';
      }
    };

    // Public API here
    return {
      currency: formatCurrency
    };
  });

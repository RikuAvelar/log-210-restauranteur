'use strict';

angular.module('clientApp')
  .factory('DateFormatter', function () {
    // Service logic
    // ...

    var dateObj = _.memoize(function(dateString){
      return new Date(dateString);
    });

    var leftPad = function(string, length){
      var str = '' + string;
      if(str.length < length){
        str = '0' + str;
      }
      return str;
    };

    var date = function(dateString){
      var date = dateObj(dateString)
      return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    };

    var time = function(dateString){
      var date = dateObj(dateString);
      return leftPad(date.getHours(), 2) + ':' + leftPad(date.getMinutes(), 2);
    };

    // Public API here
    return {
      datetime: function (dateString) {
        return date(dateString) + ' ' + time(dateString);
      },
      date: date,
      time: time
    };
  });

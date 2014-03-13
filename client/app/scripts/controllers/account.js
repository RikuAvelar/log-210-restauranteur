'use strict';

angular.module('clientApp')
  .controller('AccountCtrl', function ($scope, AuthService) {
    $scope.addresses = [{
      address: '155 Mart Street',
      city: 'Bergingham',
      province: 'Minneberta',
      postalCode: 'n0n 0n0',
      country: 'CA',
      isDefault: true
    }];

    $scope.fullAddress = function(address){
      var shownAddress = _.clone(address);

      if(shownAddress.isDefault) {
        shownAddress.isDefault = ' (Default) ';
      } else {
        delete shownAddress.isDefault;
      }

      return _.toArray(shownAddress).join(', ');
    };

  });

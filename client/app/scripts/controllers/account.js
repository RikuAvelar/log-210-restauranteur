'use strict';

angular.module('clientApp')
  .controller('AccountCtrl', function ($scope, AuthService) {
    AuthService.requireLogin();

    $scope.editForm = true;
    $scope.submitValue = 'Save';
    $scope.requiredInputs = [];
    $scope.disabledInputs = ['name', 'username', 'birthDate'];
    $scope.addresses = [{
      address: '155 Mart Street',
      city: 'Bergingham',
      province: 'Minneberta',
      postalCode: 'n0n 0n0',
      country: 'CA',
      isDefault: true
    }];

    $scope.isRequired = function(input){
      return _.some($scope.requiredInputs, function(req){ return req === input; });
    };

    $scope.isDisabled = function(input){
      return _.some($scope.disabledInputs, function(dis){ return dis === input; });
    };

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

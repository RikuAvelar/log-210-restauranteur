'use strict';

angular.module('clientApp')
  .factory('AddressFormatter', function () {
    // Service logic
    // ...

    var formatAddress = function(address){
      var address = address || {};
      var addressArray = [address.street_address, address.city, address.province, address.country, address.postal_code];
      // Recipe for address: remove undefined, join array with ,
      return _.compact(addressArray).join(', ');
    };

    var formatUserAddress = function(address){
      return formatAddress(address) + ( address.is_default ? ' [Default]' : '' );
    }

    // Public API here
    return {
      address: formatAddress,
      userAddress: formatUserAddress
    };
  });

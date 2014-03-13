'use strict';

angular.module('clientApp')
  .service('Cart', function Cart() {
    var cartKey = 'RETAURMINATOR-CART';
    var cart = [];

    var saveCart = function(){
      localStorage.setItem(cartKey, JSON.stringify(cart));
    };

    var loadCart = function(){
      cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    };

    return {
      get: function(index) {
        loadCart();
        return cart[index];
      },
      getAll: function(){
        return _.cloneDeep(cart);
      },
      push: function(item) {
        loadCart();
        cart.push(item);
        saveCart();
      }
    };
  });

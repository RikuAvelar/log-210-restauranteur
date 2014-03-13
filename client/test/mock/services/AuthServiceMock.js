angular.mock.AuthService = function() {
  var users = {
    entrepreneur: {
      type: 'entrepreneur',
      name: 'Mr. Enterprise',
      id: 1
    },
    restaurateur: {
      type: 'restaurateur',
      name: 'Mr. Restauman',
      id: 2
    },
    client: {
      type: 'client',
      name: 'Sir. Hungry',
      id: 3
    },
    livreur: {
      type: 'livreur',
      name: 'Mr. Speedy',
      id: 4
    }
  };

  var currentUser = {};

  this.isAuthenticated = function(){
    return !_.isEmpty(currentUser);
  };

  this.requireLogin = function(){
    return !currentUser.id;
  };

  this.isAuthRoute = function(routeName){
    return routeName === '/login' || routeName === '/signup';
  };

  this.currentUser = function(){
    return currentUser;
  };

  this.authenticate = function(authData){
    currentUser = users[authData.username] || {};
  };

  this.logout = function(){
    currentUser = {};
  };

  this.getAuthData = function(){};
  this._setUser = function(user){
    if(typeof user === 'string') {
      currentUser = users[user] || {};
    } else {
      currentUser = user;
    }
  };
}

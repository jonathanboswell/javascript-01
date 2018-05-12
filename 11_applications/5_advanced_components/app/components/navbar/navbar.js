angular
.module('app')
.component('navbar', {
    templateUrl: "components/navbar/navbar.html",
    controller: "NavbarController",
})
.controller('NavbarController', function($scope, NavbarFactory){
  $scope.navbar = NavbarFactory;
})
.factory('NavbarFactory', function() {

  var navbar = {
    isLoggedIn: false,
    name: 'Your Name',
    login: function(){
      this.isLoggedIn = true;
    },
    logout: function(){
      this.isLoggedIn = false;
    }
  }

  return navbar;
});

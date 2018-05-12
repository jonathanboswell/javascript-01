angular
.module('app')
.component('navbar', {
    templateUrl: "components/navbar/navbar.html",
    controller: "NavbarController"
})
.controller('NavbarController', function($scope, NavbarFactory){
  $scope.navbar = NavbarFactory;
})
.factory('NavbarFactory', function($state) {

  var navbar = {
    menu: [
      {state:'admin.users',name:'Users'},
      {state:'admin.clients',name:'Clients'}
    ],
    isLoggedIn: false,
    name: 'Jonathan',
    login: function(){
      this.isLoggedIn = true;
      $state.go('admin.users');
    },
    logout: function(){
      this.isLoggedIn = false;
      $state.go('home');
    }
  }

  return navbar;
});

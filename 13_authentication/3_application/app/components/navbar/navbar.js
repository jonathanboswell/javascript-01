angular
.module('app')
.component('navbar', {
    templateUrl: "components/navbar/navbar.html",
    controller: "NavbarController"
})
.controller('NavbarController', function($scope, NavbarFactory, UserFactory){
  $scope.navbar = NavbarFactory;
  $scope.user = UserFactory;
})
.factory('NavbarFactory', function($state) {

  var navbar = {
    menu: [
      {state:'admin.users',name:'Users'},
      {state:'admin.clients',name:'Clients'}
    ]
  }

  return navbar;
});

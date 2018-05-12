angular
.module('app')
.controller('HomeController', function($scope, NavbarFactory){
  $scope.navbar = NavbarFactory;
});

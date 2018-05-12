angular
.module('app.admin')
.controller('AdminController',function($scope, NavbarFactory){
  $scope.navbar = NavbarFactory;
  $scope.title = "Boom!";
});

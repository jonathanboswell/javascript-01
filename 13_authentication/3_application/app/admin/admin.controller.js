angular
.module('app.admin')
.controller('AdminController',function($scope, $state, NavbarFactory){
  $scope.navbar = NavbarFactory;
  $scope.$state = $state;
});

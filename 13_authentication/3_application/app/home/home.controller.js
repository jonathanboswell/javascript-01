angular
.module('app')
.controller('HomeController', function($scope, UserFactory){
  $scope.user = UserFactory;
});

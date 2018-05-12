angular
.module('app')
.controller("HomeController", function($scope, $http){
  $scope.title = "Home Page";
  console.log("here");

  $http.get('https://api.coinmarketcap.com/v2/listings/').then(function(response){
    console.log("here2", response);
    $scope.grid.data = response.data.data;
  });

  $scope.grid = {
    enableFiltering: true,
    data: []
  }
});

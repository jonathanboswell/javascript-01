angular
.module('app')
.controller("HomeController", function($scope,$http){
  console.log($http);
  $scope.title = "Home Page";
  $scope.grid = {
    enableFiltering: true,
    data: [
      {
          firstName: "Cox",
          lastName: "Carney",
          company: "Enormo",
          employed: true
      },
      {
          firstName: "Lorraine",
          lastName: "Wise",
          company: "Comveyer",
          employed: false
      },
      {
          firstName: "Nancy",
          lastName: "Waters",
          company: "Fuelton",
          employed: false
      }
    ]
  }
});

angular
.module('app.admin')
.controller('ClientsController', function($scope){
  $scope.clients = [
    {name:"Bill the client"},
    {name:"Melissa the client"}
  ];
});

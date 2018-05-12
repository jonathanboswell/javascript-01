angular
.module('app.admin')
.controller('ClientsController',function($scope, $firebaseArray){
  console.log("here");
  //Default client
  $scope.client = {
    name: null
  }

  //Load clients
  var database = firebase.database();
  var ref = database.ref('clients');
  var data = $firebaseArray(ref);
  console.log(data);
  var grid = {
    enableFiltering: true,
    columnDefs: [
      {field:"name"},
      {field:"location"}
    ],
    data: data
  }
  $scope.grid = grid;

  //Add client
  $scope.add = function()
  {
    if($scope.client.name)
    {
      ref.push($scope.client);
    }
  }

  $scope.delete = function(key){
    database.ref('clients/' + key).remove();
  }

});

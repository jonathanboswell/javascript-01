angular
.module('app.admin')
.controller('ClientsController',function($scope, $firebaseArray){

  //Default client
  $scope.client = {
    name: null
  }

  //Load clients
  var database = firebase.database();
  var ref = database.ref('clients');
  $scope.clients = $firebaseArray(ref);

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

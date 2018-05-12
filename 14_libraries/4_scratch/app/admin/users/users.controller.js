angular
.module('app.admin')
.controller('UsersController',function($scope, $firebaseArray, UsersFactory){
  $scope.users = UsersFactory;

  //var ref = firebase.database().ref('songs');
  //$scope.songs = $firebaseArray(ref);

})
.factory('UsersFactory', function(){
  var users = {
    list: [
      {name:'Jessica'},
      {name:'Joey'},
      {name:'Frank'},
      {name:'Stephanie'}
    ]
  }

  return users;
});

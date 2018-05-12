angular
.module('app.admin')
.controller('UsersController',function($scope, UsersFactory){
  $scope.users = UsersFactory;
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

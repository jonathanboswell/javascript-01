angular
.module('app.admin',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'admin',
    url: '/admin',
    controller: 'AdminController',
    templateUrl: '/admin/admin.html'
  })
  .state({
    name: 'admin.users',
    url: '/users',
    controller: 'UsersController',
    templateUrl: '/admin/users/users.html'
  })
})

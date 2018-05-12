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
  .state({
    name: 'admin.clients',
    url: '/clients',
    controller: 'ClientsController',
    templateUrl: '/admin/clients/clients.html'
  })
})

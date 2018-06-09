angular
.module('app.admin',[])
.config(function($stateProvider){
    $stateProvider
    .state({
        name: 'admin',
        url: '/admin',
        templateUrl: 'app/admin/admin.html'
    })
    .state({
        name: 'admin.dashboard',
        url: '/dashboard',
        templateUrl: 'app/admin/dashboard.html'
    })
    .state({
      name: 'admin.users',
      url: '/users',
      controller: 'UsersController',
      templateUrl: 'app/admin/users/users.html'
  });
});

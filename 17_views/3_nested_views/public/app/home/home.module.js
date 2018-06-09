angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html'
  })
  .state({
    name: 'about',
    url: '/about',
    controller: 'HomeController',
    templateUrl: 'app/home/about.html'
  });
})

angular
.module('app.home', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'home',
    url: '/home',
    templateUrl: '/home/home.html',
    controller: "HomeController",
  })
  .state({
    name: 'home.features',
    url: '/features',
    templateUrl: '/home/features.html'
  })
  .state({
    name: 'home.pricing',
    url: '/pricing',
    templateUrl: '/home/pricing.html'
  })
});

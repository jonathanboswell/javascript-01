angular
.module('app', ['ui.router','app.home'])
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})

'use strict';

angular
.module('app',['ui.router','ui.grid'])
.config(function($stateProvider) {
  $stateProvider
  .state({
    name:'home',
    url:'',
    controller:'HomeController',
    templateUrl:'home/home.html'
  })
});

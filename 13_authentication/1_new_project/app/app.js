'use strict';

angular
.module('app', [
  //External
  'ui.router',

  //Internal
  'app.home',
  'app.admin'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
});

'use strict';

angular
.module('app', [
  //External
  'ui.router',

  //Internal
  'app.home'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
});

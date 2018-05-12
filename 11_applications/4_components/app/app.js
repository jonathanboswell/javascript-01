'use strict';

angular
.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'store',
    url: '/store',
    templateUrl: '/store/store.html',
    controller: 'StoreController',
  })
  .state({
    name: 'checkout',
    url: '/checkout',
    templateUrl: '/checkout/checkout.html'
  });

  $urlRouterProvider.otherwise("/store");
});

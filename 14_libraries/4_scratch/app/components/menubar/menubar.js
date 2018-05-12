angular
.module('app')
.component('menubar', {
    templateUrl: "components/menubar/menubar.html",
    controller: "MenuBarController",
})
.controller('MenuBarController', function($scope){
  //Build a menu
  $scope.menu = [
    {state:'home.features',name:'Features'},
    {state:'home.pricing',name:'Pricing'}
  ];
});

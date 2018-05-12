angular
.module('app')
.component('greeting', {
    templateUrl: "components/greeting/greeting.html",
    controller: "GreetingController",
})
.controller('GreetingController', function($scope) {
    $scope.name = "Jonathan";
    $scope.yourName = "Harry Potter"
});

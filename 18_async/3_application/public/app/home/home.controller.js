angular
.module('app.home')
.controller('HomeController', function($scope, $http){
  $scope.address = '1520 2nd St, Santa Monica, CA'; //default

  $scope.lookup = function()
  {
    var encoded_address = encodeURIComponent($scope.address);
    var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address

    //Make an API request to the request_url and write an anonymous function to handle the response
    $http.get(request_url).then(function(response){
        console.log(response);

        $scope.output = JSON.stringify(response, null, 2);
    });
    $scope.lat = 'waiting...';
    $scope.lng = 'waiting...';
  }
});

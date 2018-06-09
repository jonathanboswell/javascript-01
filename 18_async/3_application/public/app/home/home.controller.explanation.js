angular
.module('app.home')
.controller('HomeController', function($scope, $http){
  $scope.address = '1520 2nd St, Santa Monica, CA'; //default

  $scope.lookup = function()
  {
    var address = $scope.address;
    var encoded_address = encodeURIComponent(address);
    console.log("Without Encoding", $('#address').val());
    console.log("With Encoding", encoded_address);

    //The GET request that Google expects:
    //https://maps.googleapis.com/maps/api/geocode/json?&address=360%20E%202nd%20Street%2C%20Los%20Angeles%2C%20CA
    var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address
    console.log(request_url);

    //Make an API request to the request_url and write an anonymous function to handle the response
    $http.get(request_url).then(function(response){
        console.log(response);

        // var lat = response.value[index].value.value.value
        // NOT
        // var lat = response.value.value.value.value.value

        var lat = null;
        var lng = null;

        $scope.lat = lat;
        $scope.lng = lng;

        $scope.output = JSON.stringify(response, null, 2);
    });
  }
});

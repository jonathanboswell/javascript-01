angular
.module('app.home')
.controller('HomeController', function($scope, AnimalFactory){

  $scope.title = "Ms. Rabbit: Promise me you'll let the turtle win?";

  $scope.race = function()
  {
    AnimalFactory.turtle.run();
    AnimalFactory.rabbit.run(); //WHAT?! I let him START first

    // AnimalFactory.turtle.promiseRun().then(function(response){
    //   console.log(response);
    //   AnimalFactory.rabbit.run();
    // });
  }
})
.factory('AnimalFactory', function(){
  var AnimalFactory = {
    turtle: {
      run: function()
      {
        setTimeout(function(){
          console.log("Turtle crosses the finish line");
        }, 2000);
      },
      promiseRun: function()
      {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            console.log("Turtle crosses the finish line")
            resolve("Turtle wins!!!");
          }, 2000);
        });
      }
    },
    rabbit: {
      run: function()
      {
        console.log("Rabbit crosses the finish line");
      }
    }
  };
  return AnimalFactory;
});

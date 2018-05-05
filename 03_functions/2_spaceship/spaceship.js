var spaceship = {
    location: 'Earth',
    destination: null,
    milesToDestination: 0,
    speed: 100,
    launch: function() {
        this.location = "Outer space";
    },
    setDestination: function(destination, miles) {
      this.destination = destination;
      this.milesToDestination = miles;
    },
    go: function() {
      interval = setInterval(function(){
        if(this.milesToDestination > 0)
        {
          this.milesToDestination -= this.speed;
          console.log("Miles to destination", this.milesToDestination);
        } else {
          clearInterval(interval);
        }
      }, 500);
    },
    land: function() {
        this.location = this.destination;
    },
}

//Can you invoke a function expression to launch the spaceship?
spaceship.launch();
spaceship.setDestination("Mars",1000);
spaceship.go();
spaceship.land();
console.log("Your location: " + spaceship.location);

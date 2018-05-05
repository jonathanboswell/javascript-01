// Object
var rocket = {
    maxSpeed: 34000
}

var bike = {
    maxSpeed: 20
}

// Class
class Human {
    constructor(name, destination, distance) {
        this.name = name;
        this.destination = destination;
        this.distanceToDestination = distance;
    }

    drive(vehicleObject) {
        var distanceTravelled = vehicleObject.maxSpeed / 60 / 60; //Speed per second
        var self = this;
        setInterval(function(){
            self.distanceToDestination -= distanceTravelled;
        }, 1000);
    }

    getProgress(seconds) {
        var self = this;
        setInterval(function(){
            console.log(self.name + " is " + self.distanceToDestination.toFixed(4) + " km from " + self.destination);
        }, seconds*1000);
    }
};

var me = new Human("[Enter your name]","[Enter your destination]", 100);

//Start driving, pick a vehicle
me.drive(bike);

//Check on progress - pass how often you wanna be updated in number of seconds 
me.getProgress(2);

var human = {
    name: "Rebel",
    age: 21,
    distanceFromHome: 0,
    currentLocation: 'home',

    location: function(place){

        // SET the currentLocation
        if(typeof(place) == 'string') {
            this.currentLocation = place;

        // Otherwise GET the currentLocation
        } else {
            return this.currentLocation;
        }
    }
}

// Very often it's helpful to have a method be a "getter" and a "setter"
//Can you use human.location() as a setter?



//Using it as a "getter";
console.log(human.name + " is located at " + human.location() );
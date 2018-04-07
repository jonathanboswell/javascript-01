var spaceship = {
    location: 'Earth',
    launch: function() {
        this.location = "Outer space";
    },
}

//Can you invoke a function expression to launch the spaceship?

console.log("Your location: " + spaceship.location);

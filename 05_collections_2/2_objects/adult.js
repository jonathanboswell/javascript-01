var human = {
    name: "Pat Smith",
    age: 26,
    bankAccount: 0,
    distanceFromHome: 0,
    currentLocation: "Home",
    driveTo: function(location){
        this.distanceFromHome += location.distance;
        this.currentLocation = location.name;
    }
}

var locations = {
    work: {
        distance: 8.4,
        name: "Cool Programmer Company"
    },
    club: {
        distance: 2.7,
        name: "Cool People Hangout"
    }
}

//Can you get Pat to work in 1 line of code, invoking only 1 function and accessing only 1 variable?


// This will show us where Pat is
console.log(human.name + " is at " + human.currentLocation + " which is " + human.distanceFromHome + " km from home.");

//Some locations cost us money, others might be free and some might earn us money...how might we incorporate money into our OOP design?
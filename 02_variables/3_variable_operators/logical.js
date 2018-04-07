// Let's look at two variables
var hero = "your name";
var villan = "your archenemy";

// if/else statements

// See if a variable exists
if(hero) {
    console.log("We have a hero!");
} else {
    console.log("We do not have a hero :(");
}

// See if a variable has the same value as another variable
if(hero == villan)
{
    console.log("We all have a dark side");
}

// See if a variable has the same value AND data type as another variable
if(hero === villan)
{
    console.log("Ok, nope. Not looking good. Looks like the city is doomed.")
}
// Variable Types

// String
var string = "Words in quotes";

// Boolean
var isBoolean = true;

// Number
var numPuppies = 8;

// Array
var myArray = ["Cheese", "Milk", "Eggs", true, 23 ];

// Object Literals
// Access properties of the object with dot notation. person.firstName, person.lastName, etc.
var person = {
  firstName: "Lee",
  lastName: "Richardson",
  isInstructor: true
};

// Functions just execute a block of code when they're called. Below we define a function, then call it.

// Define a function called sayHi
function sayHi() {
  alert("Hi!");
}

// Call the function
sayHi();

// Loops

// For Loop
var numBottles = 99;

for(var i = 99; i > 0; i--){
  console.log(numBottles + " bottles of beer on the wall");
  numBottles = numBottles - 1;
}

// While Loop
var numBottles = 99;

while(numBottles > 0) {
	console.log(numBottles + " bottles of beer on the wall");
	numBottles = numBottles -1;
}

// Conditionals

// If statement
var color = "purple";

// if the code in between the parenthesis evaluates to true, execute the code below
if(color == "purple"){
  console.log("This code will be executed");
}

// If/Else statement

var metal = "gold";
// if the code in between the parenthesis evaluates to true, execute the code below
if(metal == "silver"){
  console.log("This will not be executed");
}
// otherwise execute this code
else {
  console.log("This will be executed");
}

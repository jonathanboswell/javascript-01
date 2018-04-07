// Declare a variable
var snack = "nothing";

// Define a function
function vendingMachine(money) {
    if(money >= 1)
    {
        return "Jalapeno kettle chips";
    } else {
        return money;
    }
}

//Does this do anything?
vendingMachine;

console.log("You are eating " + snack);

//Can you write a function allowance() which returns the number 1?
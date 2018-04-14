var snack = vendingMachine(1);

// Function expression
var vendingMachine = function(money) {
    if(money >= 1)
    {
        return "Jalapeno kettle chips";
    } else {
        return money;
    }
}

// Declare a variable and access the vendingMachine function expression variable


console.log("You are eating " + snack);

// An object with function expressions
var vendingMachine = {
    item: 'Jalapeno kettle chips',
    cost: 1,
    change: 0,
    dispense: function(money) {
        if(money >= this.cost) {
            this.change = money - this.cost;
            return this.item;
        }
    },
    getChange: function() {
        return this.change;
    }
}

// Declare a variable and access the vendingMachine OBJECT
var snack = vendingMachine.dispense(2);
var change = vendingMachine.getChange();

console.log("You are eating " + snack);
console.log("You have change that amounts to $" + change);
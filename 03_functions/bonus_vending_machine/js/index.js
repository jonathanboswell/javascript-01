// Object
var vendingMachine = {
    item: "Jalapeno kettle chips",
    cost: 1,
    deposited: 0,
    add: function(amount) {
        this.deposited += amount;
        $('#deposited').html(currencyFormat(this.deposited));
    },
    dispense: function() {

        if(this.deposited < this.cost) {
            $('#output').html('<h3>Not enough money.</h3>');
        } else {
            // subtract the cost
            this.deposited -= this.cost;

            // update the DOM
            $('#output').html('<h3>' + this.item + '</h3>');
            $('#deposited').html(currencyFormat(this.deposited));
        }
    }
}

// Function Definitions
function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}

// Event Listeners
$('#addMoney').on('click', function(){
    vendingMachine.add(.25);
});

$('#purchase').on('click', function(){
    vendingMachine.dispense();
});

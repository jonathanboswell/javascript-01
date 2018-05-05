// An object with function expressions
var vendingMachine = {
  balance: 0,
  cost: 1,
  snacks: [
    'Puff Cheetos',
    'Lenny & Larry Protein Cookies'
  ],
  deposit: function(money){
    this.balance += money;
  },
  selectSnack: function(index){
    if(this.balance >= this.cost) {
      this.balance -= this.cost;
      return this.snacks[index];
    }
  },
  getChange: function(){
    return this.balance;
  }
}

// Declare a variable and access the vendingMachine OBJECT
//var snack = vendingMachine.getSnack(.25, 1);

var hand = "nothing";
vendingMachine.deposit(1);
vendingMachine.selectSnack(1);
vendingMachine.selectSnack(0);
vendingMaching.getChange();

console.log("You are eating " + hand);
//console.log("You have change that amounts to $" + change);

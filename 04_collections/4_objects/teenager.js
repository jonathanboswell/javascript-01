// An object with properties and methods
var human = {
    name: "put your name here",
    age: 14,
    wallet: 0,
    talkBack: function(){
        return "I don't have to listen to you!";
    },
    giveAllowance: function()
    {
        this.wallet += 5;
    }
}

// A function definition
function currencyFormat(num) {
    return "$" + num.toFixed(2);
}

//Can you give the teenager an allowance?

//Can you make the teenager talkBack?

//How might you effect their allowance if they talkBack?


// Output
console.log(human.name + " has " + currencyFormat(human.wallet) + " in their wallet.");
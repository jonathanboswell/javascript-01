//Objects
var pizza = {
  description: 'Jalepeno & Pineapple Pizza',
  cooked: false
};

//Magic oven which instantly cooks all food and passes it back to you
var magicOven = {
  cook: function(food) {
    food.cooked = true;
    return pizza;
  }
}

//This is a real oven that cooks your food for as many seconds as you tell it
var realOven = {
  cook: function(food, seconds) {
    return setTimeout(function(){
      food.cooked = true;
    }, (seconds * 1000));
  }
}

//This is you eating food :)
var human = {
  eat: function(food)
  {
    console.log("Eating " + food.description)
    if(food.cooked)
    {
      console.log("It is warm and delicious");
    } else {
      console.log("Eww! This is raw!");
    }
  }
}

//This is a magic pizza oven which eats itself
var magicPizza = {
  description: 'weird AF pizza',
  cooked: false,
  oven: function(){
    this.cooked = true;
    return this;
  },
  eat: function()
  {
    console.log("Eating " + this.description)
    if(this.cooked)
    {
      console.log("I am warm and delicious");
    } else {
      console.log("Eww! I ate myself raw!");
    }
  }
}
// //Object Interactions without callbacks, nesting or chaining
magicOven.cook(pizza);
human.eat(pizza);

//Nesting
//human.eat(magicOven.cook(pizza));
//human.eat(realOven.cook(pizza,2));

//Chaining
//magicPizza.oven().eat();

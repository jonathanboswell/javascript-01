var pizza = {
  description: 'Pepperoni Pizza',
  cooked: false
}

var oven = {
  cook: function(food, seconds, callback) {
    console.log("Cooking...");
    setTimeout(function(){
      food.cooked = true;
      if(callback)
      {
        callback(food);
      }
    }, (seconds*1000));
  }
}

var human = {
  eat: function(food) {
    console.log("Eating " + food.description)
    if(food.cooked)
    {
      console.log("It is warm and delicious");
    } else {
      console.log("Eww! It's raw!");
    }
  },
  drive: function(location, item, callback)
  {
    console.log("Driving to " + location);
    setTimeout(function(){
      console.log("Arrived at " + location);
      if(callback)
      {
        callback(item);
      }
    }, 2000);
  }
}

//Callbacks
oven.cook(pizza, 2, human.eat);

// //Don't let your brain explode!
// oven.cook(pizza,1, function(food){
//   human.drive('home', food, human.eat);
// });

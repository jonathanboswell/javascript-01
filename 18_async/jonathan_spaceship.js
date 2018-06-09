var spaceship = {
  countdown: function(seconds, callback)
  {
    var timer = setInterval(function(){
      console.log(seconds);
      seconds--;
      if(seconds==0)
      {
        callback(); //invoke the function you passed in!
        clearInterval(timer);
      }
    }, 1000);
  },
  launch: function()
  {
    console.log("Cool. I launched. Whatever. No big deal.");
  },
  explode: function()
  {
    console.log("BOOM!!!! EVERYTHING IS DESTROYED!!!!");
  }
};

var cb = (Math.random() >= .5) ? spaceship.explode:spaceship.launch;
spaceship.countdown(3, cb);

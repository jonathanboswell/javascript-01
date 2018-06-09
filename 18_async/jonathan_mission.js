var spaceship = {
  location: 'Earth',
  destination: null,
  setMission: function(mission)
  {
    this.mission = mission;
  },
  openMission: function()
  {
    this.destination = this.mission.open(this);
  },
  launch: function(callback)
  {
    if(this.mission)
    {
      console.log("Launching!")
      this.location = "Space";
      this.openMission();
      console.log("Your destination is: " + this.destination);
      callback();
    } else {
      console.log("I'm not dying in space!");
    }
  },
  explode: function()
  {
    console.log("EVERYONE DIES!!!");
  },
  warpDrive: function()
  {
    console.log("Warp speed!");
  },
  thrusters: function()
  {
    console.log("Slow thrusters");
  }
}

var mission = {
  destination: "Alpha Centauri",
  speed: spaceship.thrusters,
  open: function(spaceship)
  {
    if(spaceship.location=="Earth")
    {
      console.log("YOU TRAITOR!!!");
      spaceship.explode();
    } else {
      return this.destination;
    }
  }
}

spaceship.setMission(mission);
spaceship.launch(mission.speed);

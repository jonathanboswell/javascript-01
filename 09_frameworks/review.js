var racecar = {
  fuel: 0,
  addGas: function(){
  },
  driver: {
    name: 'Sean',
    racesuit: {
      design: 'Sparko',
      change: function(designer)
      {
        this.design = designer;
      }
    }
  }
}

console.log("Who is driving this car?", racecar.driver.name);
racecar.driver.racesuit.change('Levis');
console.log("What is the driver wearing?", racecar.driver.racesuit.design);

//Global variable
var $scope = {}

//Define our framework
var jangular = {
  name: null,
  libraries: [],
  controllers: {},
  view: {},
  module: function(name, libraries)
  {
    this.name = name;
    if(libraries)
    {
      this.libraries = libraries;
    }
    return this;
  },
  controller: function(name, callback)
  {
    this.controllers[name] = callback;
    return this;
  },
  run: function()
  {
    console.log("Running Angular");
    console.log("Application:", this.name);

    //load libraries
    if(this.libraries.length > 0)
    {
      console.log("Loading libraries:")
    }
    for(index in this.libraries)
    {
      console.log('\tLoaded:', this.libraries[index]);
    }

    //invoke controllers
    for(key in this.controllers)
    {
      console.log("Invoking Controller:", key);
      var callback = this.controllers[key];
      callback($scope);
    }

    //build the view
    console.log("Build the view");

    //build the context from $scope
    for(key in $scope)
    {
      console.log("\tPassing " + key + " to the view");
      this.view[key] = $scope[key];
    }
    return this;
  },
  renderToDom: function()
  {
    var source   = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var html    = template(this.view);
    document.body.innerHTML = html;
  }
}

//Global variable
var $scope = {}

//Controller
function userController($scope){
  $scope.user = userFactory();
}

//Factory
function userFactory() {
  var user = {
    name: "Luca",
    awesomeFactor: "Through the roof"
  };
  return user;
}

//Invoke the userController
userController($scope);

//$scope
console.log($scope);

//Render Template
var source   = document.getElementById("template").innerHTML;
var template = Handlebars.compile(source);
var context = {user: $scope.user};
var html    = template(context);
document.body.innerHTML = html;

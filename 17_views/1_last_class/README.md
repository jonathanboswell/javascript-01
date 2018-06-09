firebase init

cd public

rm *

cp ../_blank/ ./

firebase serve

##################
# Next go to here:
# https://github.com/firebase/angularfire/blob/master/docs/quickstart.md

# Add this line to your index.html
<script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>

# Go to public/app/app.js in your new application

# Go to https://firebase.google.com/
# Go to the console and click the button that says "Add Firebase to your web app"
# Add something like this to app.js:
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvyyYlDBN7fey",
  authDomain: "message-board-adc.firebaseapp.com",
  databaseURL: "https://message-board-adc.firebaseio.com",
  projectId: "message-board-adc",
  storageBucket: "message-board-adc.appspot.com",
  messagingSenderId: "62664376749"
};
firebase.initializeApp(config);

# Next change this line in app.js:
# From:
.module('app', ['ui.router','app.home'])

# To:
.module('app', ['ui.router','app.home','firebase'])

############
# Next open public/app/home/home.controller.js

# Change this line from:
.controller('HomeController', function($scope){

# To:
.controller('HomeController', function($scope, $firebaseArray){

# and add something like this inside the controller:
var ref = firebase.database().ref().child("clients");
$scope.clients = $firebaseArray(ref);


# Next open public/app/home/home.html and do something like this:
<ul>
  <li ng-repeat="client in clients">{{client.name}}</li>
</ul>

#################

CTRL + C to stop firebase serve

firebase deploy

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvyyYlDBN7feyXbLvQBvmZLQN80i3Lcoo",
  authDomain: "message-board-ad58c.firebaseapp.com",
  databaseURL: "https://message-board-ad58c.firebaseio.com",
  projectId: "message-board-ad58c",
  storageBucket: "message-board-ad58c.appspot.com",
  messagingSenderId: "626643767496"
};
firebase.initializeApp(config);

//Connect to the database
var database = firebase.database().ref('wallet');
var wallet = {};

//On page load
$(function(){

  // Event Listeners
  $("#add").on("click", function(){
    wallet.money++;
    database.set(wallet);
  });

  $("#subtract").on("click", function(){
    wallet.money--;
    database.set(wallet);
  });

  // Firebase Event Listeners
  database.on('value', function(response) {
    wallet = response.val();
    var money =  "$" + wallet.money.toFixed(2);
    $('#wallet').html(money);
  });

});

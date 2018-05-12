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

// Firebase Event Listeners
// On any value changes to wallet, invoke an annonymous function and pass it a response
database.on('value', function(response) {
  wallet = response.val();
  document.getElementById('wallet').innerHTML = "$" + wallet.money.toFixed(2);
});

// JavaScript Event Listeners
document.getElementById("add").addEventListener("click", function(){
  wallet.money++;
  database.set(wallet);
});

document.getElementById("subtract").addEventListener("click", function(){
  wallet.money--;
  database.set(wallet);
});

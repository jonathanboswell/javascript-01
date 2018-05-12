'use strict';
//Configure Firebase
var config = {
  apiKey: "AIzaSyCvyyYlDBN7feyXbLvQBvmZLQN80i3Lcoo",
  authDomain: "message-board-ad58c.firebaseapp.com",
  databaseURL: "https://message-board-ad58c.firebaseio.com",
  projectId: "message-board-ad58c",
  storageBucket: "message-board-ad58c.appspot.com",
  messagingSenderId: "626643767496"
};
//Initialize
firebase.initializeApp(config);

angular
.module('app',['ui.router','ui.grid','firebase','app.admin'])
.config(function($stateProvider) {
  $stateProvider
  .state({
    name:'home',
    url:'',
    controller:'ClientsController',
    templateUrl:'admin/clients/clients.html'
  })
});

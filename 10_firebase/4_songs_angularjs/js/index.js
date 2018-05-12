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
var database = firebase.database();

angular
.module('app',[])
.controller('SongsController', function($scope){
  $scope.band = "Your Awesome Band";
  $scope.editing = false;

  $scope.song = {
    title:''
  }

  //CREATE
  $scope.addSong = function() {
    var songsTable = database.ref('songs');
    songsTable.push($scope.song);
    $scope.song.title = "";
  }

  //READ
  database.ref('songs').on('value', function(response) {
    $scope.songs = response.val();
    $scope._safeApply(); //IGNORE ME!
  });

  //UPDATE
  $scope.edit = function(key, song)
  {
    $scope.editing = key;
    $scope.song = song;
  }
  $scope.update = function()
  {
    database.ref('songs/' + $scope.editing).set($scope.song);
    $scope.song = {};
    $scope.editing = false;
  }
  $scope.cancel = function()
  {
    $scope.song = {};
    $scope.editing = false;
  }

  //DELETE
  $scope.delete = function(key){
    database.ref('songs/' + key).remove();
  }

  //IGNORE ME!
  $scope._safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});

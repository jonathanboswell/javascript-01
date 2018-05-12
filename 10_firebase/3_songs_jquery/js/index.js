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

$(function(){
  var database = firebase.database();

  // Firebase Event Listeners
  // READ
  database.ref('songs').on('value', function(response) {
    var songs = response.val();

    $('#song-list').html('');
    for(key in songs) {
      //what is key?
      //console.log(key);
      var song = songs[key];
      var s = '';
      s += '<li data-id="' + key + '" class="list-group-item">';
      s += '  ' + song.title + ' ';
      s += '  <i class="fa fa-trash pull-right delete"></i>';
      s += '</li>';
      $('#song-list').append(s)
    }

  });

  // jQuery Event Listeners
  // CREATE
  $('#add-song').on('click', function(event) {
    var songsTable = database.ref('songs');
    var song = {
        title: $('#song').val(),
        artist: 'You'
    };

    $('#song').val('')

    songsTable.push(song);
  });

  //DELETE
  $('#song-list').on('click', '.delete', function(){
    var id = $(this).parent().data('id');
    database.ref('songs/' + id).remove();
  });

});

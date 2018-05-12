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
  database.ref('messages').on('value', function(response) {
    console.log(response);

    var messages = response.val(); // This is an OBJECT

    $('#message-board').html(''); // Start with a clean message board

    // Iterate messages object 
    $.each(messages, function(key, message){
      var s = '';

      s += '<li data-id="' + key + '" class="list-group-item">';
      s += '  ' + message.content + ' ';
      s += '  <i class="fa fa-trash pull-right delete"></i>';
      s += '  <i class="fa fa-thumbs-up pull-right"></i>';
      s += '  <i class="fa fa-thumbs-down pull-right"></i>';
      s += '  <div class="vote-count pull-right">' + message.votes + '</div>';
      s += '</li>';

      $('#message-board').append(s);
    });

  });

  // jQuery Event Listeners
  $('#add-message').on('click', function() {
    // Connect to the database
    // Basically messages is just an array at this point :)
    var messages = database.ref('messages'); 

    //Create an object
    var message = {
        'content': $('#content').val(),
        'votes': 0
    };

    //Push the object into the array
    messages.push(message);

    //Reset the input
    $('#content').val('')
  });

  $('#message-board').on('click', '.delete', function (event) {
    var id = $(this).parent().data('id');
    database.ref('messages/' + id).remove();
  });

  $('#message-board').on('click', '.fa-thumbs-up', function (event) {
    changeVote($(this), 'up');
  });

  $('#message-board').on('click', '.fa-thumbs-down', function (event) {
    changeVote($(this), 'down');
  });

  function changeVote(jQueryObject, direction)
  {
    if(jQueryObject && direction)
    {
      var id = jQueryObject.parent().data('id');
      var voteCount = parseInt(jQueryObject.siblings('.vote-count').text());

      voteCount = (direction=="down") ? voteCount - 1:voteCount + 1;

      database.ref('messages/' + id).update({
        votes: parseInt(voteCount)
      });
    }
  }

});

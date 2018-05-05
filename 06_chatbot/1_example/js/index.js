var conversation = {
  currentQuestion: 0,
  script: [
    "What is your name?",
    "How's your day?",
    "What can I help you with today?",
  ],
  end: "OK, let me look into that for you",
  messages: [],
  responses: [
    "Hi",
    "That's wonderful!",
    "Yeah, I'm with ya",
    "I'm sorry to hear that :(",
    "Thank you for sharing",
    "Awesome!"
  ],
  ask: function()
  {
    //Store the current question in str
    var str = `
      <li class="left clearfix">
        <span class="chat-img pull-left">
          <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
        </span>
        <div class="chat-body clearfix">
          <div class="header">
            <strong class="primary-font">Their name</strong>
            <small class=" text-muted">&nbsp;</small>
          </div>
          <p>` + this.script[this.currentQuestion] + `</p>
        </div>
      </li>
    `;

    //Move to the next question in the script
    this.currentQuestion++;

    return str;
  },
  reply: function(message)
  {
    return `
      <li class="left clearfix">
        <span class="chat-img pull-left">
          <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
        </span>
        <div class="chat-body clearfix">
          <div class="header">
            <strong class="primary-font">Their name</strong>
            <small class=" text-muted">&nbsp;</small>
          </div>
          <p>` + message + `</p>
        </div>
      </li>
    `;
  },
  send: function(message)
  {
    this.messages.push(message);
    var str = `
      <li class="right clearfix">
        <span class="chat-img pull-right">
          <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
        </span>
        <div class="chat-body clearfix">
          <div class="header">
            <strong class="pull-right primary-font">Your Name</strong>
            <small class="text-muted">&nbsp;</small>
          </div>
          <p class="pull-right">` + message + `</p>
        </div>
      </li>
    `;
    var response = this.lookupResponse();

    if(response) {
      str += this.reply(response);
      str += this.ask();
    } else {
      str += this.reply(this.end);
    }
    return str;
  },
  lookupResponse: function()
  {
    var response = false;

    //Asking name
    if(this.currentQuestion == 1)
    {
      response = this.responses[0] + " " + this.messages[0];

    //Asking about their Day
    } else if(this.currentQuestion == 2) {
      answer = this.messages[1].toLowerCase();
      if (answer == "good") {
        response = this.responses[1]; //say something good back
      } else if(answer == "ok") {
        response = this.responses[2]; //say something agreeable
      } else if(answer == "bad") {
        response = this.responses[3]; //say something emphatetic
      } else {
        response = this.responses[4]; //say something neutral
      }
    }

    return response;
  }

}

$(function(){

    //Event Listeners
    $('#chat-send').on('click', function(){
        var message = $('#chat-message').val();
        var output = conversation.send(message);
        addToChat(output);
    });

    $('#chat-message').on('keypress', function(e){
      var key = e.which;
      if(key == 13)  // the enter key code
      {
        var message = $('#chat-message').val();
        var output = conversation.send(message);
        addToChat(output);
      }
    })

    //Initialize
    addToChat(conversation.ask());

});

function addToChat(message)
{
  if(message)
  {
    $('#chat-message').val('');
    $('.chat').append(message);
    $('.panel-body').scrollTop($('.panel-body').prop('scrollHeight'));
  }
}

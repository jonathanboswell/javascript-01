// jQuery Method
// WTF is a Method?! Don't worry, we'll get to that.
// For now - it's MAGIC - kinda like turning the key in your car :)
$('#magic-button').text('This is a button');

// Event Listener
// What "event" do you think we are "listening" for?
$('#magic-button').on('click', disappear);

// Functions
// "We started this class like an hour ago you're giving me a freak'n function?!"
// "Yep. Don't worry. You'll love functions. I promise. Seriously, they're magic spells that YOU write. Seriously."
function disappear() {
  $('#magic-button').hide();
}

function turnRed() {
  //Notice how these methods are passed a value?
  $('#magic-button').removeClass('btn-success');
  $('#magic-button').addClass('btn-danger');
}

function grow() {
  //Notice how these methods are passed 2 values?
  $('#magic-button').css('height', 200);
  $('#magic-button').css('width', 400);
}

function slowlyVanish() {
  $('#magic-button').fadeOut(3000);
}

// Event Listeners
$('#boring-button').on('click', boring);
$('#better-button').on('click', better);
$('#fire-button').on('click', lightItUp);


// Functions
function boring()
{
  //Update CSS using raw Javascript:
  document.getElementsByTagName('body')[0].style.backgroundColor = '#eee';

  //Update the DOM using raw JavaScript:
  document.getElementById('description').innerHTML = 'Kinda hard <i class="far fa-frown"></i>';
}

function better()
{
  //Update CSS using jQuery:
  $('body').css('background-color', '#eee');

  //Update the DOM using the jQuery JavaScript library:
  $('#description').html('Awesome & easy! <i class="far fa-smile"></i>');
}

// Let's just show off now
function lightItUp()
{
  $('body').css('background-color', '#000');
  
  $('#description').html(`
    <svg viewBox="0 0 600 300">
      <!-- Pattern -->
      <pattern id="p-fire" viewBox="30 100 186 200" patternUnits="userSpaceOnUse" width="216" height="200" x="-70" y="35">
        <!-- Fire -->
        <image xlink:href="https://upload.wikimedia.org/wikipedia/commons/2/22/Animated_fire_by_nevit.gif" width="480" height="360"/>
      </pattern>

      <!-- Text -->
      <text text-anchor="middle" x="50%" y="20%" dy=".35em" class="fire-text">
        Heck Yeah!
      </text>
    </svg>
  `);
}

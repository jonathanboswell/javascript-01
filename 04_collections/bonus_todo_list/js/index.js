// Global Variables
var songs = [
  {
    title: 'Titanium',
    artist: 'David Guetta & Sia'
  },
  {
    title: 'Insane',
    artist: 'Flume'
  },
  {
    title: 'All That I Had',
    artist: 'Mt. Eden'
  }
];

// Add items when the page loads
for(index in songs) {
    var song = songs[index];
    addItemToDom(song);
}

// Event Listeners
$('#addButton').on('click', function(){
  var item = {
    title: "",
    artist: "",
    year: ""
  };
  for(key in item)
  {
    item[key] = $("#" + key).val();
    $('#' + key).val("");
  }
  addItemToDom(item);
});

$('#songs').on('click', '.btn-primary', function(){
    $(this).parent().remove(); //Remove the list-group-item from the DOM
});

// Function Definitions
function addItemToDom(song)
{
    var output = "";
    output += '<li class="list-group-item">';
    output += '<button class="btn btn-primary">X</button> ';
    output += song.title + " by " + song.artist;
    output += '</li>';

    $('#songs').append(output);
}

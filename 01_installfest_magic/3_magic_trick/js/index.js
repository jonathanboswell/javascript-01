// This is a variable - more on what those are later
var circle_is_showing = true;

$('#moveLeft').on('click', moveLeft);
$('#moveRight').on('click', moveRight);

function moveLeft(){
    var config = {"marginLeft": "50%"};
    $('#coin').animate(config, 1000);
}

function moveRight(){    
    var config = {"marginLeft": "85%"};
    $('#coin').animate(config, 1000);
}

// Setup variables
var total = 15;
var level = 1;
var gameOver = false;

// Event Listeners
$('#punch').on('click', punch);
$('#getPunched').on('click', getPunched);
$('#rest').on('click', rest);
$('#startOver').on('click', startOver);

// Functions
function start()
{
    //Set your health to the variable in line2
    $('#your-health').html(total);

    //Set his health to the variable in line2
    $('#his-health').html(total);

    //Set the actionImage to the main banner
    $('#actionImage').attr('src','./images/banner.jpg');
}

function punch()
{
    //Get the value of his health
    var hisHealth = parseInt($('#his-health').html());

    //Set the value of the punch strength
    var punchStrength = 2 * level;

    //If his health after a punch is less than or equal to 0 then Game Over
    if(hisHealth - punchStrength <= 0)
    {
        $('#end').html("Game Over - You Win!");
        $('#his-health').html(0);

    //Else...go ahead and take away some of his health
    } else {
        hisHealth = hisHealth - punchStrength;
        $('#his-health').html(hisHealth);
    }

    //Set the actionImage to you punching him
    $('#actionImage').attr('src','./images/punch.gif');
}

function getPunched()
{
    var yourHealth = parseInt($('#your-health').html());
    var punchStrength = 2 * level;

    if(yourHealth - punchStrength <= 0)
    {
        $('#end').html("Game Over - You LOSE!");
        $('#your-health').html(0);
    } else {
        yourHealth = yourHealth - punchStrength;
        $('#your-health').html(yourHealth);
    }
    $('#actionImage').attr('src','./images/getPunched.gif');
}

function rest()
{
    var yourHealth = parseInt($('#your-health').html());
    yourHealth = yourHealth + 2;
    $('#your-health').html(yourHealth);
    $('#actionImage').attr('src','./images/rest.png');
}

function gameOver()
{
    //what should we do?
}

function startOver()
{
    start();
}

//Start game by "invoking" the start function with ()
start();

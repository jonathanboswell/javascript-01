console.log("On your mark, get set...GO!");

turtleRuns();
rabbitRuns();

console.log("Who won?");


function turtleRuns()
{
    setTimeout(function(){
      console.log("Turtle finishes");
    }, 2000 );
}

function rabbitRuns()
{
    console.log("Rabit finishes");
}


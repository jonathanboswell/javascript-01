var human = {
    name: "your name"
}

var you = human;
var hippie = human;

hippie.name = "Lucy";

// We might think this should log your name...but does it?!
console.log(you.name);

// WTF?!
if(you.name === hippie.name)
{
    console.log("We're all the same human, my friend!");
}
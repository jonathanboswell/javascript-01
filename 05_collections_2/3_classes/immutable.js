class Human {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

var you = new Human("Your name");
var hippie = new Human("Lucy");


// We might think this should log your name...but does it?!
console.log(you.name);

// WTF?!
if(you.name === hippie.name)
{
    console.log("We're all the same human, my friend!");
} else {
    console.log("Same but different, my friend!");
}
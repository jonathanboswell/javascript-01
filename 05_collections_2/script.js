var cookie = {
    type: 'chocolate chip',
    isDipped: false
}

var milk = {
    isDelicious: true,
    dip: function(cookie)
    {
        cookie.isDipped = true;
    }
}

console.log("Is my " + cookie.type + " cookie dipped in milk?", cookie.isDipped);
milk.dip(cookie);
console.log("Is my " + cookie.type + " cookie dipped in milk?", cookie.isDipped);

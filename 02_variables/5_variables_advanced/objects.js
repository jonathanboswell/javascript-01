var hero = {
    'name': 'your name',
    'ability': 'your super-power',
    'sidekick': false
}

function suitUp()
{
    console.log(JSON.stringify(hero, null, 4));
}

suitUp();
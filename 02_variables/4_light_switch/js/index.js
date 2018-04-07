var lights = "off"; //are the lights on or off when we load the webpage?

$('#lightSwitch').on('click', function(){
    console.log(lights);

    //If the lights are off, turn them on
    if(lights == "off")
    {
        $('#lightSwitch').attr('src','./images/on.png');
        $('body').removeClass('dark');
        $('body').addClass('light');

    //Otherwise, the lights must be on, so turn them off
    } else if(lights == "on") {
        $('#lightSwitch').attr('src','./images/off.png');
        $('body').removeClass('light');
        $('body').addClass('dark');
    }
});
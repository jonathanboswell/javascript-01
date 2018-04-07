//Declare our variable and assign it a value
var cup = "water"

//Access our variable, determine the data type and pass it into the HTML
$('#dataType').html(typeof(cup));

//Ignore me for now - nothing to see - keep moving along :)
cup = convertObjectToString(cup);

//Access our variable and pass it into the HTML
$('#value').html(cup);


function convertObjectToString(value)
{
    if(typeof(value)=='object')
    {
        return JSON.stringify(value, null, 4);
    } else if (typeof(value)=='function') {
        return value.toString();
    } else {
        return value;
    }
}

// Global Variables
var tasks = ["Wake-up","Eat breakfast","Shower","Get dressed"];

// Add items when the page loads
for(index in tasks) {
    var task = tasks[index];
    addItemToDom(task)
}

// Event Listeners
$('#addButton').on('click', addItem);
$('#todos').on('click', '.btn-primary', function(){
    $(this).parent().remove(); //Remove the list-group-item from the DOM
});

// Function Definitions
function addItem()
{
    var item = $('#todo').val(); 
    addItemToDom(item);
    $('#todo').val("");
}

function addItemToDom(value)
{
    var output = "";
    output += '<li class="list-group-item">';
    output += '<button class="btn btn-primary">X</button> ';
    output += value;
    output += '</li>';

    $('#todos').append(output);
}

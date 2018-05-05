var human = {
  eyes: 'green',
  hair: 'black',
  isMine: false,
  cry: function()
  {
    console.log("I am crying");
  }
}

console.log("Congratulations! Your new human has:");
// Describe this human
for(key in human)
{
  var value = human[key];
  if(typeof(value)=='function')
  {
    value();
  } else {
    console.log(key + " = " + value);  
  }
}

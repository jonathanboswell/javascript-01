var friends = [
  {name:'Luca'},
  'Jenna',
  'Tom',
  'Michelle'
];

for(index in friends)
{
  var friend = friends[index];
  if(typeof(friend)=='object'){
    console.log(friend.name);
  } else {
    console.log(friend);
  }
}

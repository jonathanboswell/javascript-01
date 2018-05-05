var a = 0;
var b = 4;
var c = 10;
function doMath(a,b)
{
  var b = 2;
  return function(){
    a = 0;
    b = 7;
    return a + b + c;
  }();
}
c = 5;
a = doMath(a,b);
console.log(a);

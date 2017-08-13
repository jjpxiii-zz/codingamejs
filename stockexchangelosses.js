var n = '6';
var p = '3 2 4 2 1 5';   
// var p = '1 2 4 4 5'
// var p = '5 3 4 2 3 1';
var p = '3 2 10 7 15 14'
var inputs = p.split(' ');

var start = inputs[n - 1];
var gap = 0;
var biggestGap =0;
var highest = start;
var lowest = start;
for (var i = n - 2; i >= 0; i--) {
    var pint = parseInt(inputs[i])
    var pintplus = parseInt(inputs[i+1])
    if (pint > pintplus)
    {
        gap =  lowest - inputs[i]
    }
    else 
    {
        if(pint < lowest) {
            lowest = pint;
           
        }
        else highest = pint
         if (gap < biggestGap) {
            
          biggestGap = gap;
          gap = 0;
         }
    }
}
        if (gap < biggestGap) 
            
          biggestGap = gap;

console.log(biggestGap);


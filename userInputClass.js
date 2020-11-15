var readline = require('readline')
var TakeInput = readline.createInterface(process.stdin,process.stdout
);

function Sum(value){
    console.log("A + B = " + value)
}

TakeInput.question("Enter First Number?    ", function(x){
    TakeInput.question("Enter Second Number?   ", function(y){
        
    var sum = parseInt(x) + parseInt(y);
    
    Sum(sum);
  
    TakeInput.close();

   })

})

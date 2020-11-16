var readline = require('readline'); 
var takeInput = readline.createInterface(process.stdin, process.stdout);

takeInput.question("Enter first value??? ", function(x){
    takeInput.question("Enter second value", function(y){

        var count = parseInt(x) + parseInt(y); 

        console.log("the addition of x + y = " +count);

        takeInput.close();
    })
});
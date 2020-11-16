var readline = require('readline'); 
var takeInput = readline.createInterface(process.stdin, process.stdout);

takeInput.question("Enter first value??? ", function(x){
    
        console.log("you entered "+ x)

        takeInput.close();
 
});

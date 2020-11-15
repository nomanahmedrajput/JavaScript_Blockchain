var readline = require('readline');
var takeInput = readline.createInterface(process.stdin, process.stdout);


function Sum(value){
    console.log("The result of A + B = " + value)
}

takeInput.question("Enter first value   ", function(x){
    takeInput.question("Enter second value   ", function(y){

        var sum = parseInt(x) + parseInt(y);

        Sum(sum)

        takeInput.close()

    })

})
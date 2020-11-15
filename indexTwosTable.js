
document.getElementById("greetings").innerText="Welcome to JavaScript course";


const UserInput = parseInt(prompt('Enter an integer: '));

for(let count = 1; count <= 10; count++) {

    const output = count * UserInput;

    document.write(`${UserInput} * ${count} = ${output} <br>`);
}
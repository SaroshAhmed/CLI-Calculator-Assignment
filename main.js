/*Name: Sarosh Ahmed
Id: PIAIC183267
Batch: 51
Calculator Using Inquirer*/
import inquirer from "inquirer"; //importing inquirer module
const answer = await inquirer.prompt([
    {
        type: 'number', //created a type 'number' to set the datatype as number
        name: 'n1', //created a name 'n1' to save the first number in
        message: 'First number' //created a display message 'First number' to prompt user
    },
    {
        type: 'number', //created a type 'number' to set the datatype as number
        name: 'n2', //created a name 'n2' to save the first number in
        message: 'Second number' //created a display message 'Second number' to prompt user
    },
    {
        type: 'list', //created a list type to add multiple choices for user
        name: 'operator', //created a name 'operator' to save user's operator selection
        message: 'Select an operation', //displays the message for users
        choices: ['Addition', 'Subtraction', //choices are given to users to select their desired operation
            'Multiplication', 'Division']
    }
]);
let displayResult; //an empty variable is created with datatype number to save & display
switch (answer.operator) { //switch cases are used to change the result and lines of code based on operator selection
    case 'Addition': //argument is given as 'Addition'/
        displayResult = answer.n1 + answer.n2; //displayResult will save the addition values
        console.log(answer.n1 + '+' + answer.n2 + //displays user's entered numbers with their operation selection & result
            '=' + displayResult);
        break; //break is used to end case 1
    case 'Subtraction': //argument is given as 'Subtraction'/
        displayResult = answer.n1 - answer.n2; //displayResult will save the subtracted values
        console.log(answer.n1 + '-' + answer.n2 + //displays user's entered numbers with their operation selection & result
            '=' + displayResult);
        break; //break is used to end case 2
    case 'Multiplication': //argument is given as 'Multiplication'/
        displayResult = answer.n1 * answer.n2; //displayResult will save the multiplied values
        console.log(answer.n1 + 'x' + answer.n2 + //displays user's entered numbers with their operation selection & result
            '=' + displayResult);
        break; //break is used to end case 3
    case 'Division': //argument is given as 'Division'/
        displayResult = answer.n1 / answer.n2; //displayResult will save the divided values
        console.log(answer.n1 + '/' + answer.n2 + //displays user's entered numbers with their operation selection & result
            '=' + displayResult);
        break; //break is used to end case 4
}

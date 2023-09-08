//function declaration

// start with the function keyword
//think of what information you need in order to make the program work: these are the parameters
// you name the parameters and put them in a comma separated list inside the parentheses
//open up a pair of curly braces
//inside the curly braces you put the code that will actually run
//this is called a code block
//finally you create a return statement

//ARROW FUNCTION
//Doesn't use the 'function' keyword
//Define a variable with variable name
// that variable name is how you call the function
//you put the parameter inside parentheses
//then you have and 'arrow' (angle bracket and equals sing)
//then you have the return value

// function addTwoNumbers(num1, num2){
//      return num1 + num2;
//      }
const addTwoNumbers = (num1, num2) => num1 + num2;

//If I have multiple lines of logic inside my arrow function,I need curly braces
//If I have curly braces, I have to have a 'return' keyword to define the return value


//FUNCTION EXPRESSION

//These have basically been replaced by arrow functions
// The value of this is that you have a variable name that is a reference to a function
//That is useful if you ever need to pass a function to another function, or return a function from a function

const add = function(num1, num2){
    return num1 + num2;
}
//let result = add(5, 5);
//console.log(result);

//console.log(add(5, 5));

//don't forget to create some output for your function calls
add(5, 5);

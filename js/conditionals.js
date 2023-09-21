"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName){
// 	if (colorName ==='blue'){
// 		return "Blue is the color of the sky.";
// 	} else if (colorName === 'red'){
// 		return "Strawberries are red.";
// 	} else if (colorName === 'cyan'){
// 		return "I dont know anything about cyan."
// 	} else {
// 		return "that is an ugly color."
// 	}
// }
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// console.log(analyzeColor(randomColor))
//
//
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//  function analyzeColor(colorName) {
// 	switch (colorName) {
// 		case ('blue'):
// 			return  "Blue is the color of the sky.";
// 		case ('red'):
// 			return "Strawberries are red.";
// 		case ('cyan'):
// 			return "I don'/t know anything about cyan.";
// 		default:
// 			return "That is an ugly color.";
// 	}
// }
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// let colorName = prompt("What color do you like?");
//
// switch (colorName) {
// 	case "blue":
// 		alert("Blue is the color of the sky.");
// 		break;
// 	case "red":
// 		alert("Strawberries are red.");
// 		break;
// 	case "cyan":
// 		alert("I don'/t know anything about cyan.");
// 		break;
// 	default:
// 		alert("That is an ugly color.");
// 		break;
// 	}

//////OTHER WAY
/*const userColor = prompt ("Tell me a color");
const colorSentence = analyzeColor(userColor);
alert (colorSentence);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly generated "lucky number" between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%, and
 * if it's 5 you'll get everything for free!.
 * Write a function named `calculateTotal` which accepts a lucky number and total amount, and returns the discounted price.
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 * Test your function by passing it various values and checking for the expected return value.
 */

function calculateTotal (luckyNumber, total){
	switch (luckyNumber){
		case 0:
			return total;
		case 1:
			return total * .9;
		case 2:
			return total * .75;
		case 3:
			return total * .65;
		case 4:
			return total * .5;
		case 5:
			return 0;
	}
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 6);

// const userBill = prompt("What was your total bill?")
// alert(`Your lucky number was ${luckyNumber}`)
// alert(`Your price before discount was ${userBill}`);
// alert(`Your price after discount is $${calculateTotal(luckyNumber, userBill)}`);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if(confirm("Would you like to enter a number?")){
   const num = Number(prompt("Enter a number:"));
   if (isNaN(num)){
       alert("That is not the correct data type.");
   } else {
       if (isEven(num)){
           alert("That is an even number");
       } else {
           alert("That is an odd number");
       }

       alert(`${num} plus 100 equals ${add100(num)}`);

       if (!isPositive(num)){
           alert("That number is negative.");
       } else {
           alert("That number is positive.");
       }
   }
}

	function isEven(number){
		return number % 2 === 0;
	}

	function isPositive(number){
		return number >= 0;
	}

	function add100(number){
		return number + 100;
	}
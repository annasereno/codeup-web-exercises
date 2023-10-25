// the '*' allows you to select all functions in a js
import * as Anna from "./dice.js"

/*
this is the js main for my dice app
 */

"use strict"
//by making a main it defines the starting point for your script


function main (){
// 	insert code here
	document.querySelector("#my-d6").innerText= "you rolled a " + Anna.rollD6();

	console.log(Anna.rollD20());
}
main();//starts your function. place at bottom of everything

// console.log(Anna.rollD6());

/*
----------------------------------------------------
   make dice.js

   hook it up to an html file

   test it

   now move randomNumber to a separate file
   export randomNumber
   import in dice.js  (LET INTELLIJ DO IT FOR US AND ADD THE .js)

   try to test it

   how to fix?

	   script tag type="module"
   test it

   create a variable called randomNumber
   name collision
   change the function name on import to randomNum

   don't forget the ".js" at the end of the import statement
   see if you can get intellij to create the import for you
	   to demonstrate

   -------------------

	   make dice-roller.js that will roll the dice and then set vals in DOM elements

   export roll1d6 and roll1d20

   import them in dice-roller.js
   can use a wild card for import instead

   use them and set vals in the html
   don't forget type="module" for dice-roller.js

   */


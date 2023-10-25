import randomNum from "./number-utils.js"
//gets function from number-utils

"use strict";
/*
my dice rolling functions
*/

let randomNumber = 5;


export function rollD6(){
	const d6 = randomNum(1, 6);
	return d6;
}
//export default rollD6()

export function rollD20(){
	return randomNum(1, 20);
}
// export default rollD20()
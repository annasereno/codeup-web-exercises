"use strict"
/*
handy number functions
*/

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export default randomNumber;//this says function is available for anyone to use it
//default allows you to rename function in the future. you can not have more than one default
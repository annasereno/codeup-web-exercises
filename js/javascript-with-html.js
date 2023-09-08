"use strict";

let myNumber= 7

/*===== ALERT =====*/
//alert("Hello, i am an alert")

//*==== CONFIRM ====*//
//let userChoice = confirm ("Wait! Don't Leave yet! Can I chat with you!");

//if (userChoice === true){
//    console.log("yay!");
//} else {
//  console.log ("booo");
// }

/*===== PROMPT =====*/
let currentSpeed = prompt ("How fast are you driving?");
let plannedSpeed = prompt("How fast do you want to drive?");
let distanceLeft = prompt("How many miles do you have left?");

let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
let timeAtPlannedSpeed = (distanceLeft/currentSpeed) * 60;

let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;
// Output with template literals
console.log(`At your current speed you will take ${timeAtCurrentSpeed .toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved} minutes. `);



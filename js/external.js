console.log ("Hello from external JavaScript");

alert("Welcome to my Website!");

/*
let userInput = prompt('What is your favorite color?');
console.log (`Great, ${userInput} is my favorite color too!`);
*/

/* let ariel = prompt ('How many days did you rent The Little Mermaid for?');
let brotherBear = prompt ('How many days did you rent Brother Bear for?')
let hercules = prompt ('How may days did you rent Hercules for?')
let totalPrice = ((parseInt(ariel) + parseInt(brotherBear) + parseInt(hercules))* 3)

console.log(totalPrice)*/

/* let googleHours = prompt ('How many hours did you work for Google?');
let amazonHours = prompt ('How many hours did  you work for Amazon?');
let facebookHours = prompt ('How many hours did you work for Facebook?');
let googlePay = googleHours * 400
let amazonPay = amazonHours * 380
let facebookPay = facebookHours * 350

console.log (googlePay + amazonPay + facebookPay) */

/*
let classIsFull = confirm("Is the class full?");
let scheduleConflicts = confirm("Does the class conflict with your schedule?");
let studentCanEnroll = !classIsFull && !scheduleConflicts;

alert(`It is ${studentCanEnroll} that you can enroll in this class`);
*/

let personBoughtMoreThanTwoItems = confirm("Did the person buy more than 2 items?");
let offerHasExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the person a premium member?");

let productOfferCanBeApplied =(personBoughtMoreThanTwoItems || premiumMember) && !offerHasExpired;

alert(`It is ${productOfferCanBeApplied} that we can applythe offer.`)
console.log(productOfferCanBeApplied);



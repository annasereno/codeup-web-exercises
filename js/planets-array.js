(function(){
	"use strict";

	let planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune'
	];

	/**
	 * TODO:
	 * Read each console log below, and write some javascript code to perform
	 * the step that it describes
	 */
//Adding "The Sun" to the beginning
planets.unshift("The Sun");
	console.log('Adding "The Sun" to the beginning of the planets array.');
	console.log(planets);

//Adding "Pluto" to the end
planets.push("Pluto");
	console.log('Adding "Pluto" to the end of the planets array.');
	console.log(planets);

//Removing "The Sun" from the beginning
planets.shift();
	console.log('Removing "The Sun" from the beginning of the planets array.');
	console.log(planets);

//Removing "Pluto" from the end
planets.pop();
	console.log('Removing "Pluto" from the end of the planets array.');
	console.log(planets);

//Finding and logging the index of "Earth"
console.log(planets.indexOf("Earth"));
console.log('Finding and logging the index of "Earth" in the planets array.');

//Reversing the order
planets.reverse();
	console.log("Reversing the order of the planets array.");
	console.log(planets);

//Sorting the array
planets.sort();
	console.log("Sorting the planets array.");
	console.log(planets);
})();

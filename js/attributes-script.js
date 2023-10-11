
//** Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
function changeProfilePic(){
	 document.querySelector("#profile-pic").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesIZWqhm8cBsqUbxrJXFIIPl5mAwUSKuA5wbDBTKcr1oJ5tvMIOL8T0_V7Xyqx3F9Je4&usqp=CAU"
}
//changeProfilePic()
//setInterval(changeProfilePic, 2000);


//** Four seconds after the page loads, use innerHTML to change the name in "profile-name".
function changeProfileName(){
	//document.querySelector("#profile-name").innerHTML = "Stitch"
	const profileName = document.getElementById("profile-name");
	profileName.innerHTML = "Stitch"
}
//setInterval(changeProfileName,4000);


//** Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
function descriptionText(){
	const profileDesc = document.querySelector("#profile-desc");
	profileDesc.classList.add("profile-description");
}
// setInterval(descriptionText, 6000);


//** Use setTimeout to create these behaviors
// 	setTimeout(changeProfilePic,2000);
// 	setTimeout(changeProfileName,4000);
// 	setTimeout(descriptionText,6000);



//** Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
// function changeCardBackgroundColor(){
// 	document.querySelector("#profile-card").classList.toggle("card-background");
// }
// function changeCardBackgroundColor(){
// 	profileCardColor = document.getElementById("profile-card");
// 	profileCardColor.classList.toggle("card-background")
// }
//setInterval(changeCardBackgroundColor,2000)

		//// BONUS ////
// Encapsulate all your timers in a single function.
let count = 0;
function doEvents(){
	count++;
	if(count === 1){
		changeProfilePic();
	} else if(count === 2){
		changeProfileName();
	} else if(count === 3){
		descriptionText();
	} else if(count === 4) {
		const newName = prompt("Enter a new profile name");
		document.querySelector("#profile-name").innerHTML = newName

		//change card color every 2secs
	}changeCardBackgroundColor()
}
window.setInterval(doEvents, 2000);


// Instead of toggling the background color every two seconds for the "profile-card", create an array of colors and programmatically change the background color every two seconds.
// Hint: You will have to choose a RANDOM index from the array of colors.
let currentColorIndex = -1;
const colors = ["purple", "pink", "saddlebrown", "cyan", "yellow"];
function changeCardBackgroundColor(){
	currentColorIndex++;
	// if (currentColorIndex >= colors.length){
	// 	currentColorIndex = 0;
	// }
	// restrict currentColorIndex to just the indexes in colors this wraps values >= colors.length back to 0
	currentColorIndex = currentColorIndex % colors.length;
	document.querySelector("#profile-card").style.backgroundColor = colors[currentColorIndex];
}


// After all of your timeouts have expired, bring up a prompt that will change "profile-name" text to whatever the user inputs.
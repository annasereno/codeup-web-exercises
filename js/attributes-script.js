
//** Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
function changeProfilePic(){
	const img =document.querySelector("#profile-pic");
	img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesIZWqhm8cBsqUbxrJXFIIPl5mAwUSKuA5wbDBTKcr1oJ5tvMIOL8T0_V7Xyqx3F9Je4&usqp=CAU"
}
//changeProfilePic()
//setInterval(changeProfilePic, 2000);


//** Four seconds after the page loads, use innerHTML to change the name in "profile-name".
function changeProfileName(){
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
function timeOut() {
	setTimeout(changeProfilePic,2000);
	setTimeout(changeProfileName,4000);
	setTimeout(descriptionText,6000);
}
timeOut()


//** Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
function changeCardBackgroundColor(){
	profileCardColor = document.getElementById("profile-card");
	profileCardColor.classList.toggle("card-background")
}
setInterval(changeCardBackgroundColor,2000)
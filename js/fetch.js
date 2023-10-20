"use strict";

// for tokens  setings / developer settings on git hub
const ghOptions = {
	method: "GET",
	header: {
		"Authorization" : "token " + GITHUB_API_KEY
	}
}

// fetch("https://api.github.com/users", ghOptions)
// 	.then(response =>
// 		response.json())
// 	.then(data =>
// 		console.log(data));


//all my events
// fetch("https://api.github.com/users/annasereno/events/public", ghOptions)
// 	.then(response =>
// 		response.json())
// 	.then(data =>
// 		console.log(data));

// can make it reusable to plug in a username
function getGHUserLastCommitDate(userName){
	return fetch(`https://api.github.com/users/${userName}/events/public`, ghOptions)
	.then(response =>
		response.json())
}

g

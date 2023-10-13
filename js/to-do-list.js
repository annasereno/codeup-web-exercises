const addToDoBtn = document.querySelector("#add-to-do-btn")

const createNewToDo = function (event) {
	event.preventDefault()
	//const toDoInput = document.querySelector(".form-label").value

	const createLI = document.createElement("li");
	createLI.innerHTML = "<li class=\"to-do-item list-group-item d-flex justify-content-between align-items-center\">\n" +
		"<p class=\"m-0\">Finish this exercise</p>\n" +
		"<button class=\"btn btn-danger\">Done</button>\n" +
		"</li>";
	document.querySelector("ul").appendChild(createLI)

	// const newTask = document.querySelector("li").value;
}

addToDoBtn.addEventListener("click", createNewToDo)
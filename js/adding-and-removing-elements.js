const editButtons = document.querySelectorAll(".gizmo button");

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

addCardButton.addEventListener("click", () => {
    document.querySelector("#addCardFormWrapper").classList.toggle("hideForm:")
    document.querySelector("#addCardFormWrapper").classList.toggle("showForm:")
})

addCardSubmitButton.addEventListener("click", () =>{
    const newCardTitle = document.querySelector("#title").value
})

// function handleEditButtonClick(event){
//     const cardElements = event.target.parentElement.children;
//     for (let cardElement of cardElements) {
//         cardElement.addEventListener('mouseenter', ()=> {
//             cardElement.style.transform = "scale(1.2)";
//             cardElement.style.backgroundColor = "rgba(91, 83, 83, 1.0)";
//             cardElement.style.transition = "transform 0.4s ease-in, background-color 0.4s ease-in";
//         });
//         cardElement.addEventListener('mouseout', ()=> {
//             cardElement.style.transform = "unset";
//             cardElement.style.backgroundColor = "unset";
//         });
//     }
// }

function handleEditButtonClick(event){
    const headingText = event.target.parentElement.firstElementChild.innerText;
    console.log(headingText);

    const imageLink = event.target.parentElement.querySelector("img").getAttribute("src");
    console.log(imageLink);

    const description = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    console.log(description);

    event.target.parentElement.firstElementChild.innerText = prompt("Enter the new title");

}

editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});


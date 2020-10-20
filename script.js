// variables
//containers
const welcomeContainerOne = document.querySelector('.welcomeOne');
const welcomeContainerTwo = document.querySelector('.welcomeTwo');

//buttons
const beginBtn = document.querySelector('.beginBtn');
const startBtn = document.querySelector('.startBtn');

//elements to be hidden on page load 
window.addEventListener("load",  () => {
    welcomeContainerTwo.style.visibility = "hidden";
    // TODO: add elements here as i create them 
});






//event listeners for buttons
beginBtn.addEventListener("click", () => {
    welcomeContainerTwo.style.visibility = "visible";
    welcomeContainerOne.style.visibility = "hidden"
});
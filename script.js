// variables
//containers
const welcomeContainerOne = document.querySelector('.welcomeOne');
const welcomeContainerTwo = document.querySelector('.welcomeTwo');
const mainContainer = document.querySelector('.mainContainer');
const titleContainer = document.querySelector('.titleContainer');
const subtitleContainer = document.querySelector('.subtitleContainer');
const startingContainer = document.querySelector('.startingContainer');
const userContainer = document.querySelector('.userContainer');


//buttons
const beginBtn = document.querySelector('.beginBtn');
const startBtn = document.querySelector('.startBtn');

// //elements to be hidden on page load 
// window.addEventListener("load",  () => {
//     //welcomeContainerTwo.style.visibility = "hidden";
//     // TODO: add elements here as i create them 
// });






//event listeners for buttons
beginBtn.addEventListener("click", () => {
   startingContainer.textContent = `How this app works`;
   userContainer.textContent = `it works like um dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsu`;
   
});

startBtn
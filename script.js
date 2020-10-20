'use strict'

// variables
//containers
const welcomeContainerOne = document.querySelector('.welcomeOne');
const formContainer = document.querySelector('.formContainer');
const mainContainer = document.querySelector('.mainContainer');
const titleContainer = document.querySelector('.titleContainer');
const subtitleContainer = document.querySelector('.subtitleContainer');
const startingContainer = document.querySelector('.startingContainer');
const userContainer = document.querySelector('.userContainer');

//form input
const userInput = `
<textarea rows="5"></textarea>
`

//buttons
const beginBtn = document.querySelector('.beginBtn');
const startBtn = document.querySelector('.startBtn');

//elements to be hidden on page load 
 window.addEventListener("load",  () => {
     formContainer.style.visibility = "hidden";
     // TODO: add elements here as i create them 
// });



// .transform translate(0px, -500px)


//event listeners for buttons
beginBtn.addEventListener("click", () => {
   startingContainer.textContent = `How this app works`;
   userContainer.textContent = `it works like um dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsu`;
   beginBtn.textContent = `Let's get started!`;
   beginBtn.style.backgroundColor = "red";
   // TODO: add animation to buttons on clicks
});

// startBtn.addEventListener("click", () => {
//     startingContainer.textContent = `How this app works`;
//     userContainer.innerHTML = userInput;
//     beginBtn.textContent = `Let's get started!`;
//     beginBtn.style.backgroundColor = "red";
//     // TODO: add animation to buttons on clicks
//  
'use strict';

// variables
//containers
const welcomeContainerOne = document.querySelector('.welcomeOne');
const formContainer = document.querySelector('.formContainer');
const mainContainer = document.querySelector('.mainContainer');
const titleContainer = document.querySelector('.titleContainer');
const subtitleContainer = document.querySelector('.subtitleContainer');
const startingContainer = document.querySelector('.startingContainer');
const userContainer = document.querySelector('.userContainer');
const btnContainer = document.querySelector('.btnContainer');

//form input
const userInput = `
<textarea rows="5"></textarea>
`

//buttons
const beginBtn = document.querySelector('.beginBtn');
const startBtn = document.querySelector('.startBtn');
// const startBtn = `
// <a class="btn btn-primary btn-lg beginBtn" href="#" role="button"
// >Let's get started!</a
// >
// `

//elements to be hidden on page load 
 window.addEventListener("load",  () => {
     startBtn.style.visibility = "hidden";
     console.log("loaded");
     // TODO: add elements here as i create them 
 });



// .transform translate(0px, -500px)


//event listeners for buttons
beginBtn.addEventListener("click", () => {
   startingContainer.textContent = `How this app works`;
   userContainer.textContent = `it works like um dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsu`;
   beginBtn.style.visibility = 'hidden';
   startBtn.style.visibility = 'visible';
   // beginBtn.textContent = `Let's get started!`;
   startBtn.style.backgroundColor = "red";
   // TODO: add animation to buttons on clicks
});

// startBtn.addEventListener("click", () => {
//     startingContainer.textContent = `How this app works`;
//     userContainer.innerHTML = userInput;
//     beginBtn.textContent = `Let's get started!`;
//     beginBtn.style.backgroundColor = "red";
//     // TODO: add animation to buttons on clicks

/** @format */

"use strict";
const activities = [
	{
		id: 1,
		name: "G",
		meaning: "Gentle With Self",
		start:
			"Pick a simple activity that is kind to yourself. Think about yourself with pride, acceptance, and forgiveness.",
		suggestions: [
			{
				id: 1,
				name: "Talk more kindly to self",
			},
			{
				id: 2,
				name: "Practice positive affirmations",
			},
			{
				id: 3,
				name: "Reflect on something you’re thankful for",
			},
			{
				id: 4,
				name: "Drink enough water",
			},
			{
				id: 5,
				name: "Forgive yourself for something",
			},
			{
				id: 6,
				name: "Think about your dreams",
			},
			{
				id: 7,
				name: "Communicate needs to a loved one",
			},
			{
				id: 8,
				name: "Say no to an inconvenient request",
			},
		],
	},
	{
		id: 2,
		name: "R",
		meaning: "Relaxation",
		start: "Take time to relax and unwind from stress.",
		suggestions: [
			{
				id: 1,
				name: "Deep breathing exercises",
			},
			{
				id: 2,
				name: "Watch the sunset or sunrise",
			},
			{
				id: 3,
				name: "Progressive muscle relaxation",
			},
			{
				id: 4,
				name: "Guided Imagery",
			},
			{
				id: 5,
				name: "Massage",
			},
			{
				id: 6,
				name: "Yoga",
			},
			{
				id: 7,
				name: "Meditation",
			},
			{
				id: 8,
				name: "Acupuncture",
			},
		],
	},
	{
		id: 3,
		name: "A",
		meaning: "Accomplishment",
		start: "Commit to completing at least one task of any size.",
		suggestions: [
			{
				id: 1,
				name: "Do laundry",
			},
			{
				id: 2,
				name: "Get the mail",
			},
			{
				id: 3,
				name: "Leave the house",
			},
			{
				id: 4,
				name: "Check off something from your to-do list",
			},
			{
				id: 5,
				name: "Clean part of your home",
			},
			{
				id: 6,
				name: "Make a healthy meal",
			},
			{
				id: 7,
				name: "Pay bills",
			},
			{
				id: 8,
				name: "Make a phone call that you've been putting off",
			},
		],
	},
	{
		id: 4,
		name: "P",
		meaning: "Pleasure",
		start: "Do something that makes you feel good.",
		suggestions: [
			{
				id: 1,
				name: "Watch a movie or favorite tv show",
			},
			{
				id: 2,
				name: "Read a book or comic",
			},
			{
				id: 3,
				name: "Do a puzzle or play a game",
			},
			{
				id: 4,
				name: "Play with your pets",
			},
			{
				id: 5,
				name: "Sign up for a fun class",
			},
			{
				id: 6,
				name: "Dance to your favorite song",
			},
			{
				id: 7,
				name: "Take a trip to a park or the beach",
			},
			{
				id: 8,
				name: "Hula-hoop or jump-rope",
			},
		],
	},
	{
		id: 5,
		name: "E",
		meaning: "Exercise",
		start: "Get moving to improve your mood and health.",
		suggestions: [
			{
				id: 1,
				name: "Go for a 10-20 minute walk",
			},
			{
				id: 2,
				name: "Do some stretching",
			},
			{
				id: 3,
				name: "Do 20 lunges",
			},
			{
				id: 4,
				name: "Do a hike or bike ride",
			},
			{
				id: 5,
				name: "Take an online yoga, zumba, or pilates class",
			},
			{
				id: 6,
				name: "Do 15 pushups",
			},
			{
				id: 7,
				name: "Do 100 jumping jacks",
			},
			{
				id: 8,
				name: "Do some gardening",
			},
		],
	},
	{
		id: 6,
		name: "S",
		meaning: "Social",
		start: "Connect and interact with others.",
		suggestions: [
			{
				id: 1,
				name: "Call/Zoom a friend or family member",
			},
			{
				id: 2,
				name: "Ask the cashier how their day is going",
			},
			{
				id: 3,
				name: "Have a picnic outside with a friend",
			},
			{
				id: 4,
				name: "Go to a virtual meetup on meetup.com",
			},
			{
				id: 5,
				name: "Tell someone how you feel about them",
			},
			{
				id: 6,
				name: "Take an online class or workshop(video on!)",
			},
			{
				id: 7,
				name: "Strike a conversation with your roommate or neighbor",
			},
			{
				id: 8,
				name: "Ask your mailman how their day is going",
			},
		],
	},
];

let index = 0;

//containers
const welcomeContainerOne = document.querySelector(".welcomeOne");
const formContainer = document.querySelector(".formContainer");
const mainContainer = document.querySelector(".mainContainer");
const titleContainer = document.querySelector(".titleContainer");
const subtitleContainer = document.querySelector(".subtitleContainer");
const startingContainer = document.querySelector(".startingContainer");
const userContainer = document.querySelector(".userContainer");
const btnContainer = document.querySelector(".btnContainer");

const hintContainer = document.querySelector(".hintContainer");

//elements to add
const userInput = `
<textarea rows="5"></textarea>
`;

// const help = `
// <h6></h6>

// `

//buttons
const beginBtn = document.querySelector(".beginBtn");
const startBtn = document.querySelector(".startBtn");
const nextBtn = document.querySelector(".nextBtn");
const finishBtn = document.querySelector(".finishBtn");
const randoBtn = document.querySelector(".randoBtn");

//elements to be hidden on page load
window.addEventListener("load", () => {
	startBtn.style.visibility = "hidden";
	nextBtn.style.visibility = "hidden";
	finishBtn.style.visibility = "hidden";
	hintContainer.style.visibility = "hidden";
	index = 0;
	console.log("loaded");
	// TODO: add elements here as i create them
});

// Functions

function generateRandom() {
	//make one the of the jso suggestions appear inside the textarea
}

function generateChart() {
	window.location = "./assets/chart.html";
}

function handleNext() {
	titleContainer.innerHTML = activities[index].name;
	subtitleContainer.innerHTML = activities[index].meaning;
	startingContainer.innerHTML = activities[index].start;
};

//////////
//event listeners for buttons
beginBtn.addEventListener("click", () => {
	startingContainer.textContent = `How this app works`;
	userContainer.textContent = `it works like um dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsu`;
	beginBtn.style.visibility = "hidden";
	startBtn.style.visibility = "visible";
	startBtn.style.backgroundColor = "red";
	// TODO: add animation to buttons on clicks
});

startBtn.addEventListener("click", () => {
	startingContainer.textContent = `How this app works`;
	userContainer.innerHTML = userInput;
	startBtn.style.visibility = "hidden";
	nextBtn.style.visibility = "visible";
	hintContainer.style.visibility = "visible";
	titleContainer.textContent = activities[0].name;
	subtitleContainer.textContent = activities[0].meaning;
	startingContainer.textContent = activities[0].start;
});

nextBtn.addEventListener("click", () => {
	index++;
	handleNext();
	if (index === 5) {
		nextBtn.style.visibility = "hidden";
		finishBtn.style.visibility = "visible";
	}
});

finishBtn.addEventListener("click", () => {
	generateChart();
});

finishBtn.addEventListener("click", () => {
	generateRandom();
});
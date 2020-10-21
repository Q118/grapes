'use strict';

//variables
const dateContainer = document.querySelector(".dateContainer");
const userG = document.querySelector(".userG");
const userR = document.querySelector(".userR");
const userA = document.querySelector(".userA");
const userP = document.querySelector(".userP");
const userE = document.querySelector(".userE");
const userS = document.querySelector(".userS");

const newDate  = new Date();
const today = (newDate.getMonth()+1)+'-'+newDate.getDate()+'-'+newDate.getFullYear();

//! get proper input from   storage
const storedG = localStorage.getItem(1);
const storedR = localStorage.getItem(2);
const storedA = localStorage.getItem(3);
const storedP = localStorage.getItem(4);
const storedE = localStorage.getItem(5);
const storedS = localStorage.getItem(6);

window.addEventListener("load", () => {
    dateContainer.innerHTML = today;
    userG.textContent = storedG;
    userR.textContent = storedR;
    userA.textContent = storedA;
    userP.textContent = storedP;
    userE.textContent = storedE;
    userS.textContent = storedS;
});



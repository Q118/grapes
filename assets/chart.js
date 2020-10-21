'use strict';

//variables
const dateContainer = document.querySelector(".dateContainer");

const newDate  = new Date();
const today = (newDate.getMonth()+1)+'-'+newDate.getDate()+'-'+newDate.getFullYear();

//! get proper input from   storage
const storedInput = localStorage.getItem(1);


window.addEventListener("load", () => {
    dateContainer.innerHTML = today;
    console.log(storedInput);
});



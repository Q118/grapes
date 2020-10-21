'use strict';

// {moment().format("MMMM Do YYYY")}

//variables
const dateContainer = document.querySelector(".dateContainer");

const newDate  = new Date();
const today = (newDate.getMonth()+1)+'-'+newDate.getDate()+'-'+newDate.getFullYear();

dateContainer.innerHTML = today;
//dateContainer.innerHTML = newDate.getDate();
//dateContainer.innerHTML = newDate.getFullYear();
//onload
window.addEventListener("load", () => {
    
    //
});



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

const printBtn = document.querySelector(".printBtn");

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
    console.log("loaded");
});

//function to print/share just the chart section of the page
function printPageArea(){
    var printContent = document.getElementById('printBox');
    var WinPrint = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.write('<link rel="stylesheet" href="./chart.css" type="text/css" />');
    WinPrint.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />');
   // WinPrint.document.write('<link rel="stylesheet" href="./style.css" type="text/css" />');
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    //WinPrint.close();
    console.log("print");
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

printBtn.addEventListener("click", (e) => {
    e.preventDefault();
    printPageArea();
});

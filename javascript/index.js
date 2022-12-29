setInterval(() => {
    // London

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("dddd Do YYYY");
londonTimeElement.innerHTML = `${londonTime.format("H:mm:ss [<small>]A[</small>]")}`;


// New York

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd Do YYYY");
newYorkTimeElement.innerHTML = `${newYorkTime.format("H:mm:ss [<small>]A[</small>]")}`;

}, 1000);
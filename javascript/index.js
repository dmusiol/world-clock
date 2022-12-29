function displayTime() {
    // London

let londonElement = document.querySelector("#london");
if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss [<small>]A[</small>]")}`;
}

// New York

let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = `${newYorkTime.format("h:mm:ss [<small>]A[</small>]")}`;
}

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = `${tokyoTime.format("h:mm:ss [<small>]A[</small>]")}`;
}

}

function displayCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = event.target.options[event.target.selectedIndex].text;
    clearInterval(interval);

    updateCityInterval(cityTimeZone, cityName);
    interval = setInterval(() => {
        updateCityInterval(cityTimeZone, cityName);
    }, 1000);
}


 function updateCityInterval(cityTimeZone, cityName) {   
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
        cityName = cityTimeZone.replace("_", " ").split("/")[1];
    }
    
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    if (cityTimeZone.length > 0) {
    citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
        `;
        } else {
            location.reload();
        }

}

let interval;
displayTime();
interval = setInterval(displayTime, 1000);


let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", displayCity);
import { weatherUI } from "./weatherUI";
import { errorMessage } from "./errorMessage";



async function getWeather(city, metric) {
    try {
    // Gets data from openweather
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6281b7b9d651ffbc8c20b3663b321064&units=${metric}`, {mode: 'cors'});
    // converts it to a readable file
    const weatherData = await response.json();
    // pushes data to weatherUI
    weatherUI(weatherData, city);
    } catch (error) {
    // Error message
      errorMessage();
    };

};


function websiteFunctions() {
    const searchBar = document.querySelector('#search-btn');
    const checkbox = document.querySelector("input[type=checkbox]");
    let metric = 'imperial';

// Checkbox change function
    checkbox.addEventListener('change', function() {
        const tempValue = document.querySelector('.temp-value');

        // If checked and there is temp value change temp value and metric
        if(this.checked && tempValue) {
            const fertoCel = (tempValue.innerText - 32) * 5 / 9;
            tempValue.innerText = parseFloat(fertoCel).toFixed(0);
            metric = 'metric';
        } else if (this.checked) {
            metric = 'metric';
        } else if (tempValue) {
             const celToFer = tempValue.innerText * 9 / 5 + 32;
             tempValue.innerText = parseFloat(celToFer).toFixed(0);
            metric = 'imperial';
        } else {
            metric = 'imperial';
        }
    });

// Search bar click function
    searchBar.addEventListener('click', function() {
        const content = document.querySelector('.content');
        const searchCity = document.querySelector('#search-city');
        const city = searchCity.value;

        //If content div is active remove div then push async function
        if(content) {
            content.remove();
            getWeather(city, metric);
        } else {
            getWeather(city, metric);
        }
    });
};

export {websiteFunctions}
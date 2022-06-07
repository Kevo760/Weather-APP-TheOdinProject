import { contentUI } from "./content";

function weatherUI(data, city) {
    // Handles data and pass the value to its own variable
    const icon = data.weather[0].icon;
    const status = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;


    const weatherUI = document.createElement('div');
    weatherUI.classList.add('weatherUI');

    /////////////// City Weather Section ///////////////
    const weatherCity = document.createElement('div');
    weatherCity.classList.add('weather-city');
    weatherCity.innerText = city;
    /////////////// City Weather Section ///////////////

    //////////// Status section ///////////////
    const statusSection = document.createElement('div');
    statusSection.classList.add('status-section');

    // creates the weather icon
    const weatherIcon = document.createElement('div');
    weatherIcon.classList.add('weather-icon');

    const iconImg = document.createElement('img');
    iconImg.src = `http://openweathermap.org/img/wn/${icon}.png`;
    iconImg.alt = 'Weather Icon';

    weatherIcon.append(iconImg);

    const weatherStatus = document.createElement('div');
    weatherStatus.classList.add('weather-status');
    weatherStatus.innerText = status;


    statusSection.append(weatherIcon);
    statusSection.append(weatherStatus);

    //////////// Status section ///////////////

    //////////// Info section ///////////////
    const infoSection = document.createElement('div');
    infoSection.classList.add('info-section');

    const weatherTemp = document.createElement('div');
    weatherTemp.classList.add('weather-temp');
    weatherTemp.innerText = 'Temp: ';

    const tempValue = document.createElement('span');
    tempValue.classList.add('temp-value');
    tempValue.innerText = temp;

    const degreesText = document.createElement('span');
    degreesText.innerText = '°';

    weatherTemp.append(tempValue);
    weatherTemp.append(degreesText);

    const weatherHumidity = document.createElement('div');
    weatherHumidity.classList.add('weather-humidity');
    weatherHumidity.innerText = 'Humidity: ';

    const humidityValue = document.createElement('span');
    humidityValue.classList.add('humidity-value');
    humidityValue.innerText = humidity;

    const percentText = document.createElement('span');
    percentText.innerText = '%';

    weatherHumidity.append(humidityValue);
    weatherHumidity.append(percentText);
    
    infoSection.append(weatherTemp);
    infoSection.append(weatherHumidity);


    //////////// Info section ///////////////

    // Puts each section together for weatherUI
    weatherUI.append(weatherCity);
    weatherUI.append(statusSection);
    weatherUI.append(infoSection);

    const content = contentUI();
    content.append(weatherUI);


    return document.body.append(content);
}

export {weatherUI};
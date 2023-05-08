`use strict`;

import {UI} from './ui.js';
import {API} from './api.js';

const ui = new UI(
    document.getElementById('form'),
    document.getElementById('input'),
    document.getElementById('list'),
);
const api = new API();

const run = () => {
    console.log('run');
    ui.onSubmit(async (cityName) => {
        const cityWeather = await api.getCityWeather(cityName);
        console.log(cityWeather);
        ui.renderCityWeather(cityWeather);
    });
};

run();

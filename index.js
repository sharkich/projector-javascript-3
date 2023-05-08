`use strict`;

import {UI} from './ui.js';
import {API} from './api.js';

const ui = new UI(
    document.getElementById('form'),
    document.getElementById('input'),
    document.getElementById('list'),
    document.getElementById('message'),
);
const api = new API();

const run = () => {
    console.log('run');
    ui.onSubmit(async (cityName) => {
        try {
            ui.showLoading();
            const cityWeather = await api.getCityWeather(cityName);
            if (ui.isCityAlreadyAdded(cityWeather.id)) {
                ui.clearForm();
                throw new Error('City already added');
            }
            ui.renderCityWeather(cityWeather);
            ui.clearMessage();
            ui.clearForm();
        } catch (error) {
            ui.renderError(error);
        } finally {
            ui.focusInput();
        }
    });
};

run();

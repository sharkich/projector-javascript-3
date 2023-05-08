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
            if (ui.isCityAlreadyAdded(cityName)) {
                ui.clearForm();
                throw new Error('City already added');
            }
            const cityWeather = await api.getCityWeather(cityName);
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

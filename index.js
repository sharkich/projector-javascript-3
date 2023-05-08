`use strict`;

const API_KEY = '92b9bb363abdb27bec098afa3ba778e5';
const q = 'Kyiv';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;
console.log(URL);

class UI {
    #formElement = null;
    #inputElement = null;
    #input = '';

    constructor(formElement, inputElement) {
        this.#formElement = formElement;
        this.#inputElement = inputElement;

        this.#subscribeToInputChange();
    }

    #subscribeToInputChange() {
        this.#inputElement.addEventListener('keyup', (event) => {
            this.#input = event.target.value;
        });
    }

    onSubmit(callback) {
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            callback(this.#input);
        });
    }

    renderCityWeather(cityWeather) {}
}

class API {
    getCityWeather(cityName) {}
}

const ui = new UI(
    document.getElementById('form'),
    document.getElementById('input'),
);
const api = new API();

const run = () => {
    console.log('run');
    ui.onSubmit(async (cityName) => {
        console.log('onSubmit', cityName);
        const cityWeather = await api.getCityWeather(cityName);
        ui.renderCityWeather(cityWeather);
    });
};

run();

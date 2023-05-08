export class UI {
    #formElement = null;
    #inputElement = null;
    #listElement = null;
    #messageElement = null;

    constructor(formElement, inputElement, listElement, messageElement) {
        this.#formElement = formElement;
        this.#inputElement = inputElement;
        this.#listElement = listElement;
        this.#messageElement = messageElement;
    }

    onSubmit(callback) {
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            callback(this.#inputElement.value);
        });
    }

    #buildCityWeatherMarkup(cityWeather) {
        return `
            <h2 class="city-name" data-name="${cityWeather.name},${cityWeather.sys.country}">
              <span>${cityWeather.name}</span>
              <sup>${cityWeather.sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(cityWeather.main.temp)}<sup>°C</sup></div>
            <figure>
              <img class="city-icon" src="${this.#buildWeatherIcon(cityWeather.weather[0]["icon"])}" alt="${
                cityWeather.weather[0]["description"]
            }">
              <figcaption>${cityWeather.weather[0]["description"]}</figcaption>
            </figure>
          `;
    }

    #buildWeatherIcon(icon) {
        return `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;
    }

    renderCityWeather(cityWeather) {
        const liElement = document.createElement('li');
        liElement.classList.add('city');
        liElement.innerHTML = this.#buildCityWeatherMarkup(cityWeather);
        this.#listElement.appendChild(liElement);
    }

    renderError(error) {
        this.#messageElement.textContent = `${error.name}: ${error.message}`;
    }

    showLoading() {
        this.#messageElement.textContent = 'Loading...';
    }
    clearMessage() {
        this.#messageElement.textContent = '';
    }
}

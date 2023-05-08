const API_KEY = '92b9bb363abdb27bec098afa3ba778e5';

export class API {
    #buildUrl(q) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;
    }

    async getCityWeather(cityName) {
        const response = await fetch(this.#buildUrl(cityName));
        const data = await response.json();
        console.log(data);
        if (data.cod === '404') {
            throw new Error(data.message);
        }
        return data;
    }
}

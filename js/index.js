import { getWeatherData } from "./api.js"

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва');
    console.log(weather);
}

app();
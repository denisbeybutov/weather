import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = async () => {
    // const options = {
    //     enableHightAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    // }
    // const success = async (pos) => {
    //     const crd = pos.coords;

    //     const response = await fetch (`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=291f5b1ef3a24c7ca066823fb78e7372`)

    //     const result = await response.json();
    //     const weather = await getWeatherData(result.features[0].properties.city);
    //     resetWeatherContent(result.features[0].properties.city, weather)
    // }

    // const error = (err) => {
    //     console.log(err.code, err.message)
    // }

    // navigator.geolocation.getCurrentPosition(success, error, options)

    //загулшка потому что выключено метосположение
    const weather = await getWeatherData('Нижний Новгород');
    resetWeatherContent('Нижний Новгород', weather);
    
}

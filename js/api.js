export const getWeatherData = async (city) => {
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c06137ebdf8b8576f13825325c25e40f&lang=ru`);
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}


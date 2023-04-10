export const selectWeather = (state) => state.weather.weather
export const selectWeatherDescription = (state) => state.weather.weather.current.weather[0].description
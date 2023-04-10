import axios from "axios"


export const GET_WEATHER = '@@weather/GET_WEATHER'



const getWeather = (weather) => ({
    type: GET_WEATHER,
    payload: weather
})


export const loadCityWeather = (city, name = "Ташкент") => async (dispatch) => {
    let result = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=`)
    let { data } = result
    let result2 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,hourly,alerts&units=metric&lang=ru&appid=`)
    let { data: newData } = result2
    let weatherRes = { ...newData, name }
    dispatch(getWeather(weatherRes))
}
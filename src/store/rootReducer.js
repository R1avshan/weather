import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { weatherReducer } from "./weather/weatherReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    weather: weatherReducer
})

export default rootReducer
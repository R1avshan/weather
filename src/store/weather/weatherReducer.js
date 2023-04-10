import { GET_WEATHER } from "./weatherActions";


const initialState = {
    weather: []
}


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
            break;
        default:
            return state
            break;
    }
}
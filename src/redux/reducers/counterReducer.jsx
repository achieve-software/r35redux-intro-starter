const initialState = {
    counter:0 //? Global state
}//? Pure js function
//? bir dış bağımlılık olmamalı
const reducer = (state = initialState,action) => {switch (action.type) {
    case "INCREASE":
        return {counter: state.counter + 1}
    case "DECREASE":
        return {counter: state.counter -1}
    case "RESET":
        return {counter:0} 
           default:
        return state
}}
export default reducer

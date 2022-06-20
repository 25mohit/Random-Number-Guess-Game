import { createStore } from "redux"

const initialState = {
    playerData : "",
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "PLAYER_REGISTER":
            return{
                ...state,
                playerData: action.payload
            }
            default :
            return state;
    }
}
export default createStore(reducer)
import { ActionTypes } from '../constant/action-types'
const initialState = {
    cardData: []
}

function addToCartReducer(state = [], action){
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            console.log(action)
            return [
                ...state, 
                {cardData: action.product}
            ]
        case ActionTypes.REMOVE_PRODUCT:
            return state
        default:
            return state
    }
}

export default addToCartReducer
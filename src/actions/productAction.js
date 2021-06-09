import {ActionTypes} from '../constant/action-types'

export const setProducts = (products) => {
    return {
        type: ActionTypes.setProducts,
        payload: products,
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.selectedProducts,
        payload: products,
    }
}
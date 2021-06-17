import { ActionTypes } from "../constant/action-types"

export const addToCart = (itemId) => {
    return {
        type: ActionTypes.ADD_PRODUCTS,
        payload: {
            id: itemId
        }
    }
}

export const removeToCart = (itemId) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: {
            id: itemId
        }
    }
}

export const adjustQuantity = (itemId, value) => {
    return {
        type: ActionTypes.QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const viewProduct = (item) => {
    return {
        type: ActionTypes.VIEW_PRODUCT,
        payload: item
    }
}
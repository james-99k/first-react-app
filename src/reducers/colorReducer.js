const colorReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1
        case "DECREASE":
            if (state <= 0) {
                return state
            }
            else {
                return state - 1
            }
        default:
            return state
    }
}

export default colorReducer
import count from './countReducer';
import color from './colorReducer';
import product from './productReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count,
    color,
    product,
})

export default allReducers;
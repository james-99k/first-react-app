import count from './count';
import color from './color';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count,
    color
})

export default allReducers;
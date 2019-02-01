import { combineReducers } from 'redux';
import message from './messageReducer';
import defaultReducer from './defaultReducer';

export default combineReducers({
    message : message,
    reducer : defaultReducer,
});
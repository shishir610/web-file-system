import { combineReducers } from 'redux';
import filesystem from './filesystem';
import currentpath from './currentpath'

export default combineReducers({
    filesystem,
    currentpath
});
import { combineReducers } from 'redux';
import filesystem from './filesystem';
import currentpath from './currentpath'
import search from './search'

export default combineReducers({
    filesystem,
    currentpath,
    search
});
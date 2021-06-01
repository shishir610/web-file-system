import { DELETE_FILE_FOLDER } from "../actions/alterfilestructure";
import initialState from './init/filesystem'

const filesystemReducer = (prevState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_FILE_FOLDER:
            const { currentPath, name } = payload
            var allChildren = prevState
            for (let i = 1; i < currentPath.length; i++) {
                allChildren = allChildren.find(o => o.name === currentPath[i]).children
            }
            const index = allChildren.findIndex(item => item.name === name)
            if (index > -1) {
                allChildren.splice(index, 1);
            }
            return prevState
        default:
            return prevState
    }
}

export default filesystemReducer
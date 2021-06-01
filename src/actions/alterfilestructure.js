export const ADD_FILE_FOLDER = 'ADD_FILE_FOLDER';
export const DELETE_FILE_FOLDER = 'DELETE_FILE_FOLDER';

export const deleteFileOrFolder = (currentPath, name) => {
    return {
        type: DELETE_FILE_FOLDER,
        payload: {
            currentPath,
            name
        }
    }
}

export const addFileOrFolder = (currentPath, details) => {
    return {
        type: ADD_FILE_FOLDER,
        payload: { currentPath, ...details }
    }
}
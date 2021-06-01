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

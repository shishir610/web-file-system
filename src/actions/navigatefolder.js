export const FOLDER_DOUBLE_CLICK = 'FOLDER_DOUBLE_CLICK';
export const FOLDER_ONE_UP = 'FOLDER_ONE_UP';

export const handleFolderDoubleClick = (name) => {
    return {
        type: FOLDER_DOUBLE_CLICK,
        payload: {
            name
        }
    }
};

export const handleOneUp = () => {
    return {
        type: FOLDER_ONE_UP,
        payload: {}
    }
}
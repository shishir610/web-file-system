import { FOLDER_DOUBLE_CLICK, FOLDER_ONE_UP } from "../actions/navigatefolder";

const initialState = [
    'root'
]

const currentpath = (prevState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FOLDER_DOUBLE_CLICK:
            return [
                ...prevState,
                payload.name
            ]
        case FOLDER_ONE_UP:
            if (prevState.length !== 1) {
                return prevState.slice(0, prevState.length - 1)
            }
            return initialState
        default:
            return prevState
    }
}

export default currentpath
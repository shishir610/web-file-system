import { SEARCH_ACTIVATE, SEARCH_DEACTIVATE, SEARCH_QUERY } from "../actions";

const initialState = {
    searchActive: false,
    searchResults: []
}

var results = []
const forumulateSearchResults = (query, root) => {
    for (let i = 0; i < root.length; i++) {
        console.log(results)
        if (root[i].name.slice(0, query.length) === query) {
            results.push(root[i])
        }
        if (root[i].children.length != 0) {
            forumulateSearchResults(query, root[i].children)
        }
    }
    return results
}

const searchReducer = (prevState = initialState, action) => {
    const { type, payload } = action;
    console.log(type)
    switch (type) {
        case SEARCH_ACTIVATE:
            return {
                ...prevState,
                searchActive: true
            }
        case SEARCH_DEACTIVATE:
            return {
                ...prevState,
                searchActive: false
            }
        case SEARCH_QUERY:
            const { query, root } = payload
            results = []
            return {
                ...prevState,
                searchResults: forumulateSearchResults(query, root)
            }
        default:
            return prevState
    }
}

export default searchReducer
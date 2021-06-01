export const SEARCH_ACTIVATE = 'SEARCH_ACTIVATE';
export const SEARCH_DEACTIVATE = 'SEARCH_DEACTIVATE';
export const SEARCH_QUERY = 'SEARCH_QUERY';

export const handleSearchToggle = (activateOrDeactive) => {
    return {
        type: activateOrDeactive ? SEARCH_ACTIVATE : SEARCH_DEACTIVATE
    }
}

export const handleSearchQuery = (query, root) => {
    console.log(query)
    return {
        type: SEARCH_QUERY,
        payload: {
            query,
            root
        }
    }
}
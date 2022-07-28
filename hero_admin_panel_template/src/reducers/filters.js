const initialState = {
    filtersLoadingStatus: 'idle',
    filters: [],
    elements: [],
    activeFilter: 'all'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_ADD_ACTIVE':
            return {
                ...state,
                activeFilter: action.payload
            }
        case 'ELEMENTS_FETCHED':
            return {
                ...state,
                elements: action.payload
            }
        default: return state
    }
}

export default filters;
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filtersLoadingStatus: 'idle',
    filters: [],
    elements: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
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
                filters: action.payload
            }
        case 'ELEMENTS_FETCHED':
            return {
                ...state,
                elements: action.payload
            }
        case 'ITEM_DELETE': 
            const index = state.heroes.findIndex(item => item.id === action.payload);
            const deleteItemList = [...state.heroes.slice(0, index), ...state.heroes.slice(index + 1)];
            return {
                ...state,
                heroes: deleteItemList
            }
        case 'ADD_ITEM':
            let addItemList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: addItemList
            }
        default: return state
    }
}

export default reducer;
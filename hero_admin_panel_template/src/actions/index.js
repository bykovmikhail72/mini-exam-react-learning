export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filterAddActive = (data) => {
    return {
        type: 'FILTER_ADD_ACTIVE',
        payload: data
    }
}

export const elementsFetched = (elements) => {
    return {
        type: "ELEMENTS_FETCHED",
        payload: elements
    }
}

export const itemDelete = (id) => {
    return {
        type: 'ITEM_DELETE',
        payload: id
    }
}

export const addItem = (data) => {
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}
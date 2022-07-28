import { createAction } from "@reduxjs/toolkit";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()));
}

export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED');
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
export const filtersFetching = createAction('FILTERS_FETCHING');
export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');
export const filtersFetched = createAction('FILTERS_FETCHED');
export const filterAddActive = createAction('FILTER_ADD_ACTIVE');
export const elementsFetched = createAction('ELEMENTS_FETCHED');
export const itemDelete = createAction('ITEM_DELETE');
export const addItem = createAction('ADD_ITEM');

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filterAddActive = (data) => {
//     return {
//         type: 'FILTER_ADD_ACTIVE',
//         payload: data
//     }
// }

// export const filterAddActive = (data) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'FILTER_ADD_ACTIVE',
//             payload: data
//         })
//     }, 1000);
// }

// export const elementsFetched = (elements) => {
//     return {
//         type: "ELEMENTS_FETCHED",
//         payload: elements
//     }
// }

// export const itemDelete = (id) => {
//     return {
//         type: 'ITEM_DELETE',
//         payload: id
//     }
// }

// export const addItem = (data) => {
//     return {
//         type: 'ADD_ITEM',
//         payload: data
//     }
// }
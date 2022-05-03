import * as types from "./types";

const initialState = {
    searchResults: [],
    searchTerm: "",
    error: null,
    loading: false,
};

const searchResultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SEARCH_RESULTS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResults: action.payload,
            };
        case types.GET_SEARCH_RESULTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default searchResultsReducer;

import * as types from "./types";

const initialState = {
    movies: [],
    error: null,
    loading: false,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            };
        case types.GET_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;

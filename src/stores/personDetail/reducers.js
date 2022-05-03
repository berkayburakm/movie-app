import * as types from "./types";

const initialState = {
    person: {},
    tvCredits: [],
    movieCredits: [],
    error: null,
    loading: false,
};

const personDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSON_DETAIL_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PERSON_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                person: action.payload,
            };
        case types.GET_PERSON_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_PERSON_TV_CREDITS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PERSON_TV_CREDITS_SUCCESS:
            return {
                ...state,
                loading: false,
                tvCredits: action.payload,
            };
        case types.GET_PERSON_TV_CREDITS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_PERSON_MOVIE_CREDITS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PERSON_MOVIE_CREDITS_SUCCESS:
            return {
                ...state,
                loading: false,
                movieCredits: action.payload,
            };
        case types.GET_PERSON_MOVIE_CREDITS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default personDetailReducer;

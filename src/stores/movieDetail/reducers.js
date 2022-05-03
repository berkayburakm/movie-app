import * as types from "./types";

const initialState = {
    movie: {},
    cast: [],
    videos: [],
    error: null,
    loading: false,
};

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIE_DETAIL_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.payload,
            };
        case types.GET_MOVIE_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_MOVIE_CAST_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_MOVIE_CAST_SUCCESS:
            return {
                ...state,
                loading: false,
                cast: action.payload,
            };

        case types.GET_MOVIE_CAST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_MOVIE_VIDEOS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_MOVIE_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.payload,
            };
        case types.GET_MOVIE_VIDEOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default movieDetailReducer;

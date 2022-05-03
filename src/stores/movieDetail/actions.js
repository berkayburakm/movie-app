import * as types from "./types";
import { getAxiosInstance } from "../../utils/axiosInstance";

const getMovieDetail = (id, type) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_MOVIE_DETAIL_START });
    try {
        const response = await axios.get(`${type}/${id}`);
        dispatch({
            type: types.GET_MOVIE_DETAIL_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_MOVIE_DETAIL_ERROR,
            payload: error.message,
        });
    }
};

const getMovieCast = (id, type) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_MOVIE_CAST_START });
    try {
        const response = await axios.get(`${type}/${id}/credits`);
        dispatch({
            type: types.GET_MOVIE_CAST_SUCCESS,
            payload: response.data.cast,
        });
    } catch (error) {
        dispatch({
            type: types.GET_MOVIE_CAST_ERROR,
            payload: error.message,
        });
    }
};

const getMovieVideos = (id) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_MOVIE_VIDEOS_START });
    try {
        const response = await axios.get(`movie/${id}/videos`);
        dispatch({
            type: types.GET_MOVIE_VIDEOS_SUCCESS,
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({
            type: types.GET_MOVIE_VIDEOS_ERROR,
            payload: error.message,
        });
    }
};

export { getMovieDetail, getMovieCast, getMovieVideos };

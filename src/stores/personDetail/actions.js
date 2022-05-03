import * as types from "./types";
import { getAxiosInstance } from "../../utils/axiosInstance";

const getPersonDetail = (id) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_PERSON_DETAIL_START });
    try {
        const response = await axios.get(`person/${id}`);
        dispatch({
            type: types.GET_PERSON_DETAIL_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_PERSON_DETAIL_ERROR,
            payload: error.message,
        });
    }
};

const getPersonTvCredits = (id) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_PERSON_TV_CREDITS_START });
    try {
        const response = await axios.get(`person/${id}/tv_credits`);
        dispatch({
            type: types.GET_PERSON_TV_CREDITS_SUCCESS,
            payload: response.data.cast,
        });
    } catch (error) {
        dispatch({
            type: types.GET_PERSON_TV_CREDITS_ERROR,
            payload: error.message,
        });
    }
};

const getPersonMovieCredits = (id) => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_PERSON_MOVIE_CREDITS_START });
    try {
        const response = await axios.get(`person/${id}/movie_credits`);
        dispatch({
            type: types.GET_PERSON_MOVIE_CREDITS_SUCCESS,
            payload: response.data.cast,
        });
    } catch (error) {
        dispatch({
            type: types.GET_PERSON_MOVIE_CREDITS_ERROR,
            payload: error.message,
        });
    }
};

export { getPersonDetail, getPersonTvCredits, getPersonMovieCredits };

import * as types from "./types";
import { getAxiosInstance } from "../../utils/axiosInstance";

const getSearchResults = (searchTerm) => async (dispatch) => {
    dispatch({ type: types.SET_SEARCH_TERM, payload: searchTerm });
    if (searchTerm.length === 0) {
        dispatch({
            type: types.GET_SEARCH_RESULTS_SUCCESS,
            payload: [],
        });
        return;
    }
    dispatch({ type: types.GET_SEARCH_RESULTS_START });
    try {
        const axios = getAxiosInstance();
        const response = await axios.get(`search/multi`, {
            params: {
                query: searchTerm,
            },
        });
        dispatch({
            type: types.GET_SEARCH_RESULTS_SUCCESS,
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({
            type: types.GET_SEARCH_RESULTS_ERROR,
            payload: error.message,
        });
    }
};

export { getSearchResults };

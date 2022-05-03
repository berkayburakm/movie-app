import * as types from "./types";
import { getAxiosInstance } from "../../utils/axiosInstance";

const getMovies = () => async (dispatch) => {
    const axios = getAxiosInstance();
    dispatch({ type: types.GET_MOVIES_START });
    try {
        const response = await axios.get("movie/popular");
        dispatch({
            type: types.GET_MOVIES_SUCCESS,
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({ type: types.GET_MOVIES_ERROR, payload: error.message });
    }
};

export { getMovies };

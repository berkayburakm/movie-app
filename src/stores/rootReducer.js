import { combineReducers } from "redux";
import moviesReducer from "./movies/reducers";
import movieDetailReducer from "./movieDetail/reducers";
import personDetailReducer from "./personDetail/reducers";
import searchResultsReducer from "./searchResults/reducers";

export default combineReducers({
    moviesReducer,
    movieDetailReducer,
    personDetailReducer,
    searchResultsReducer,
});

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../stores/movies/actions";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import List from "../components/List";
import SearchInput from "../components/SearchInput";

const Home = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.moviesReducer);
    const { searchResults, searchResultsLoading, searchTerm } = useSelector(
        (state) => state.searchResultsReducer
    );
    const searchResultTypes = {
        movie: "Movie",
        tv: "TV Series",
        person: "Person",
        genre: "Genre",
    };

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <Box className="pt-24 container mx-auto px-5">
            <SearchInput />
            {searchResults.length > 0 ? (
                Object.keys(searchResultTypes).map((type) => {
                    let results = searchResults.filter(
                        (result) => result.media_type === type
                    );
                    if (results.length > 0) {
                        return (
                            <List
                                key={type}
                                type={type}
                                data={results}
                                title={`${searchResultTypes[type]} results for "${searchTerm}"`}
                                loading={searchResultsLoading}
                            />
                        );
                    }
                })
            ) : searchTerm.length > 0 && !searchResultsLoading ? (
                <Box className="flex flex-col container mx-auto min-h-screen p-5">
                    <Alert severity="warning">
                        No results found for "{searchTerm}"
                    </Alert>
                </Box>
            ) : (
                <List
                    data={movies}
                    title="Popular Movies"
                    type="movie"
                    loading={loading}
                />
            )}
        </Box>
    );
};

export default Home;

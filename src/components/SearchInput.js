import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../stores/searchResults/actions";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(getSearchResults(searchTerm));
        }, 1000);
        return () => clearTimeout(timer);
    }, [searchTerm, dispatch]);
    return (
        <Box className="flex px-5">
            <TextField
                label="Search movies, tv series and genres"
                className="rounded-lg w-full"
                onChange={(e) => {
                    setSearchTerm(e.target.value.trim());
                }}
            />
        </Box>
    );
};

export default SearchInput;

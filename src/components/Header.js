import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar className="w-full bg-orange-500 px-5" color="secondary">
            <Box className="container mx-auto md:px-5 py-5 text-center">
                <Link to="/" className="text-white">
                    MOVIE APP
                </Link>
            </Box>
        </AppBar>
    );
};

export default Header;

import React from "react";
import MovieCard from "./MovieCard";
import PersonCard from "./PersonCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
const List = ({ data, title, loading, type }) => {
    const renderCard = (item, id) => {
        switch (type) {
            case "movie":
            case "tv":
                return <MovieCard movie={item} key={`${type}_${id}`} />;
            case "person":
                return <PersonCard person={item} key={id} />;
            case "genre":
                return <Typography key={id}>{item.name}</Typography>;
            default:
                return null;
        }
    };

    return (
        <Box className="flex flex-col container mx-auto min-h-screen p-5">
            {loading ? (
                <Box className="grid h-screen w-full place-items-center">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Typography
                        variant="h4"
                        component="h2"
                        className="pb-2 border-b-2 border-b-slate-400"
                    >
                        {title}
                    </Typography>
                    <Box className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-between mt-10">
                        {data?.map((item) =>
                            renderCard(item, item.id || item.credit_id)
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default List;

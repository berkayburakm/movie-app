import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ movie }) => {
    const { title, id, poster_path, name, character } = movie;
    const navigate = useNavigate();
    const type = name ? "tv" : "movie";
    const handleClick = () => {
        navigate(`/${type}/${id}`);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleClick()}>
                <LazyLoadImage
                    src={
                        poster_path
                            ? `https://image.tmdb.org/t/p/original${poster_path}`
                            : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={title}
                    placeholderSrc="https://via.placeholder.com/500x750?text=Loading"
                />
                <CardContent className="h-28 pb-3 overflow-ellipsis ">
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontSize={20}
                    >
                        {title || name}
                    </Typography>
                    {character && (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {character}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MovieCard;

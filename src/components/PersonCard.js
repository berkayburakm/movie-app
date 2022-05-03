import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PersonCard = ({ person }) => {
    const { id, name, profile_path, character } = person;
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate(`/person/${id}`)}>
                {profile_path ? (
                    <LazyLoadImage
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}
                        loading="lazy"
                        placeholderSrc="https://via.placeholder.com/500x750?text=Loading"
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/500x750?text=No+Image"
                        alt={name}
                    />
                )}
                <CardContent className="pb-3 overflow-ellipsis ">
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontSize={20}
                    >
                        {name}
                    </Typography>
                    {character && (
                        <Typography
                            variant="subtitle2"
                            component="h2"
                            className="text-slate-500 text-xs"
                        >
                            {character}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PersonCard;

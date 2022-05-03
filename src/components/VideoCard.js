import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoCard = ({ video }) => {
    const { id, key, name } = video;
    return (
        <Box key={id} className="flex flex-col gap-2">
            <a
                href={`https://www.youtube.com/watch?v=${key}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LazyLoadImage
                    src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
                    alt={name}
                    className="w-full rounded-lg hover:shadow-xl"
                    placeholderSrc="https://via.placeholder.com/500x350?text=Loading"
                    loading="lazy"
                />
            </a>
            <Typography
                variant="h6"
                fontSize={14}
                component="div"
                className="text-white"
            >
                {name}
            </Typography>
        </Box>
    );
};

export default VideoCard;

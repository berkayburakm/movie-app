import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    getMovieDetail,
    getMovieCast,
    getMovieVideos,
} from "../stores/movieDetail/actions";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import PersonCard from "../components/PersonCard";
import VideoCard from "../components/VideoCard";

const MovieDetail = ({ type }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie, cast, videos } = useSelector(
        (state) => state.movieDetailReducer
    );
    useEffect(() => {
        dispatch(getMovieDetail(id, type));
        dispatch(getMovieCast(id, type));
        dispatch(getMovieVideos(id));
    }, [dispatch, id, type]);
    return (
        <Box className="bg-gray-900 text-white pt-20">
            <Box className="flex flex-col container mx-auto p-5 w-full xl:w-2/3 gap-12">
                <Box className="flex gap-5 flex-col items-center">
                    <Box maxWidth={250}>
                        <img
                            src={
                                movie?.poster_path
                                    ? `https://image.tmdb.org/t/p/original${movie?.poster_path}`
                                    : "https://via.placeholder.com/500x750?text=No+Image"
                            }
                            alt={movie?.title || movie?.name}
                        />
                    </Box>
                    <Box className="flex flex-col items-center gap-8">
                        <Typography variant="h4" component="h2">
                            {movie?.title || movie?.name}
                        </Typography>
                        <Box className="flex items-center gap-2">
                            <StarIcon
                                className="text-yellow-500"
                                fontSize="large"
                            />
                            <Box className="flex gap-2">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className="text-white"
                                >
                                    {movie?.vote_average
                                        ? `${movie?.vote_average}/10`
                                        : "N/A"}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className="text-slate-500"
                                >
                                    {movie?.vote_count
                                        ? `(${movie?.vote_count} reviews)`
                                        : ""}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex gap-2 flex-wrap">
                            {movie?.genres?.map((genre) => (
                                <Chip
                                    key={genre.id}
                                    label={genre.name}
                                    color="info"
                                    variant="outlined"
                                />
                            ))}
                        </Box>
                        <p>{movie?.overview}</p>
                    </Box>
                </Box>

                <Box className="flex flex-col gap-10">
                    {cast && cast.length > 0 && (
                        <>
                            <Typography
                                variant="h4"
                                component="h2"
                                className="pb-2 border-b-2 border-b-slate-400 "
                            >
                                Cast
                            </Typography>
                            <Box className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 gap-y-3">
                                {cast?.map((person) => (
                                    <PersonCard
                                        key={person.id}
                                        person={person}
                                    />
                                ))}
                            </Box>
                        </>
                    )}
                    {videos && videos.length > 0 && (
                        <>
                            <Typography
                                variant="h4"
                                component="h2"
                                className="pb-2 border-b-2 border-b-slate-400 "
                            >
                                Videos
                            </Typography>
                            <Box className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-3">
                                {videos?.map((video) => (
                                    <VideoCard key={video.id} video={video} />
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default MovieDetail;

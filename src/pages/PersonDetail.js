import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    getPersonDetail,
    getPersonTvCredits,
    getPersonMovieCredits,
} from "../stores/personDetail/actions";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import List from "../components/List";

const PersonDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { person, tvCredits, movieCredits } = useSelector(
        (state) => state.personDetailReducer
    );
    useEffect(() => {
        dispatch(getPersonDetail(id));
        dispatch(getPersonTvCredits(id));
        dispatch(getPersonMovieCredits(id));
    }, [dispatch, id]);
    return (
        <Box className="bg-gray-900 text-white pt-20">
            <Box className="flex flex-col container mx-auto p-5 w-full xl:w-2/3 gap-12">
                <Box className="flex gap-5 flex-col">
                    <Box className="mx-auto" maxWidth={250}>
                        <LazyLoadImage
                            src={
                                person?.profile_path
                                    ? `https://image.tmdb.org/t/p/original${person?.profile_path}`
                                    : "https://via.placeholder.com/500x750?text=No+Image"
                            }
                            alt={person?.name}
                            className="rounded hover:shadow-xl"
                        />
                    </Box>
                    <Box className="flex flex-col gap-8">
                        <Typography
                            variant="h4"
                            component="h2"
                            className="text-center"
                        >
                            {person?.name}
                        </Typography>
                        <Box className="flex flex-col gap-2 text-md text-white">
                            <Typography variant="subtitle1" component="p">
                                {person?.biography}
                            </Typography>
                            <Typography variant="subtitle" component="p">
                                {person?.birthday
                                    ? `Date of Birth: ${new Intl.DateTimeFormat(
                                          "en-US",
                                          {
                                              year: "numeric",
                                              month: "long",
                                              day: "2-digit",
                                          }
                                      ).format(new Date(person.birthday))}`
                                    : ""}
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                {person?.place_of_birth
                                    ? `Place of Birth: ${person.place_of_birth}`
                                    : ""}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {tvCredits && tvCredits.length > 0 && (
                    <List data={tvCredits} title="TV Credits" type="tv" />
                )}
                {movieCredits && movieCredits.length > 0 && (
                    <List
                        data={movieCredits}
                        title="Movie Credits"
                        type="movie"
                    />
                )}
            </Box>
        </Box>
    );
};

export default PersonDetail;

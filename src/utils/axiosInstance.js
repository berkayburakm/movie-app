import axios from "axios";

export const getAxiosInstance = () => {
    try {
        return axios.create({
            baseURL: "https://api.themoviedb.org/3/",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
        });
    } catch (error) {
        console.error("Axios instance creation failed");
    }
};

import axios from "axios";

export const checkSplitterApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

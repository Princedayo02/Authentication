import axios from "axios";
export const axiosClient = axios.create({
	baseURL: "localhost:4000",
	headers: { "Content-Type": "application/json" },
});

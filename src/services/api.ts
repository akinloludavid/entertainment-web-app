import axiosInstance from "./axiosInstance";

export const getTrendingMovies = async () => {
  const res = await axiosInstance.get("/trending");
  return res.data;
};

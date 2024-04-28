import { useState, useEffect } from "react";
import axios from "axios";

const APIkey = "45318439812920846421407861ea6250";

const Trendingendpoint = `https://api.themoviedb.org/3/trending/movie/day?language=en-US}&api_key=${APIkey}`;
const TopRatedendpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}`;
const Upcomingendpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}`;

export const Image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

const ApiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return ApiCall(Trendingendpoint);
};

export const fetchTopRatedMovies = () => {
  return ApiCall(TopRatedendpoint);
};

export const fetchUpcomingMovies = () => {
  return ApiCall(Upcomingendpoint);
};

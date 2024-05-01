import { useState, useEffect } from "react";
import axios from "axios";

const APIkey = "45318439812920846421407861ea6250";

const Trendingendpoint = `https://api.themoviedb.org/3/trending/movie/day?language=en-US}&api_key=${APIkey}`;
const TopRatedendpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}`;
const Upcomingendpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}`;

// ----------dynamic endpoints---------------
const movieDetailsEndpoint = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US}&api_key=${APIkey}`;

const movieCreditsEndpoint = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US}&api_key=${APIkey}`;

const movieSimilarEndpoint = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US}&api_key=${APIkey}`;

const castDetailsEndpoint = (personId) =>
  `https://api.themoviedb.org/3/person/${personId}?language=en-US}&api_key=${APIkey}`;

const castMoviesEndpoint = (personId) =>
  `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US}&api_key=${APIkey}`;

const searchMoviesEndpoint = (query) =>
  `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1}&api_key=${APIkey}`;

export const Image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

const ApiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
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

export const fetchMovieDetails = (movieId) => {
  return ApiCall(movieDetailsEndpoint(movieId));
};

export const fetchCredits = (movieId) => {
  return ApiCall(movieCreditsEndpoint(movieId));
};

export const fetchSimilar = (movieId) => {
  return ApiCall(movieSimilarEndpoint(movieId));
};

export const fetchPersonDetails = (personId) => {
  return ApiCall(castDetailsEndpoint(personId));
};

export const fetchCastMovies = (personId) => {
  return ApiCall(castMoviesEndpoint(personId));
};

export const fetchSearchMovies = (query) => {
  return ApiCall(searchMoviesEndpoint(query));
};

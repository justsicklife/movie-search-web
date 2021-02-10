import getMovieDetailData from "../api/movieDetail.js";
import { reducerUtils, createPromiseThunk, handleAsyncActions } from "../lib/asyncUtils.js";

const GET_MOVIE_DETAIL_ID = "movieDetail/GET_MOVIE_DETAIL_ID";
const GET_MOVIE_DETAIL = "movieDetail/GET_MOVIE_DETAIL";
const GET_MOVIE_DETAIL_SUCCESS = "movieDetail/GET_MOVIE_DETAIL_SUCCESS";
const GET_MOVIE_DETAIL_ERROR = "movieDetail/GET_MOVIE_DETAIL_ERROR";

export const setMovieCd = (movieId) => {
    return { type: GET_MOVIE_DETAIL_ID, movieId };
}

export const getMovie = createPromiseThunk(GET_MOVIE_DETAIL, getMovieDetailData);

const initialState = {
    movie: reducerUtils.initial(),
    movieId: null,
}

const movieDetail = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL_ID:
            return {
                ...state,
                movieId: action.movieId,
            };
        case GET_MOVIE_DETAIL:
        case GET_MOVIE_DETAIL_SUCCESS:
        case GET_MOVIE_DETAIL_ERROR:
            return handleAsyncActions(GET_MOVIE_DETAIL, 'movie',false)(state, action);
        default:
            return state;
    }
}

export default movieDetail;
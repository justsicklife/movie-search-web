import getMovieLisData from "../api/movieList.js";
import { reducerUtils, handleAsyncActions, createPromiseThunk } from "../lib/asyncUtils.js";

const GET_MOVIELIST = "movieList/GET_MOVIELIST";
const GET_MOVIELIST_SUCCESS = "movieList/GET_MOVIELIST_SUCCESS";
const GET_MOVIELIST_ERROR = "movieList/GET_MOVIELIST_SUCCESS";
const SET_MOVIELIST = "movieList/SET_MOVIELIST";
const PAGE_UP = "movieList/PAGE_UP";
const SET_ITEMROWPAGE = "movieList/SET_ITEMROWPAGE";

export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

export const setMovieList = (movieName = "", directorName = "") => {
    return { type: SET_MOVIELIST, directorName, movieName };
}

export const getMovieList = createPromiseThunk(GET_MOVIELIST, getMovieLisData);

export const pageUp = () => {
    return ({ type: PAGE_UP });
}

const initialState = {
    movieList: reducerUtils.initial(),
    movieName: "",
    directorName: "",
    currentPage: 1,
    itemRowPage: 10,
}

const MovieList = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMROWPAGE: {
            return {
                ...state,
                itemRowPage: action.itemRow,
                currentPage: 1,
            }
        }
        case PAGE_UP: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        }
        case SET_MOVIELIST: {
            return {
                ...state,
                movieList: { data: null, loading: false, error: null },
                movieName: action.movieName,
                directorName: action.directorName,
                currentPage: 1,
            };
        }
        case GET_MOVIELIST:
        case GET_MOVIELIST_SUCCESS:
        case GET_MOVIELIST_ERROR:
            return handleAsyncActions(GET_MOVIELIST, 'movieList')(state, action);
        default: return state;
    }
}

export default MovieList;
import { movieListRest, apiKey } from "../api/rest/rest.js";

const GET_MOVIELIST = "movieList/GET_MOVIELIST";
const GET_MOVIELIST_SUCCESS = "movieList/GET_MOVIELIST_SUCCESS";
const GET_MOVIELIST_ERROR = "movieList/GET_MOVIELIST_SUCCESS";
const SET_MOVIELIST = "movieList/SET_MOVIELIST";
const PAGE_UP = "movieList/PAGE_UP";
const SET_ITEMROWPAGE = "movieList/SET_ITEMROWPAGE";

export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

const getMovieListAPI = async (pMovieNm, pDirectorNm, curPage, itemRowPage) => {
    const movieName = pMovieNm !== "" ? `&movieNm=${pMovieNm}` : "";
    const directorName = pDirectorNm !== "" ? `&directorNm=${pDirectorNm}` : "";
    const pageIndex = `&curPage=${curPage}`
    const itemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`${movieListRest}${apiKey}${movieName}${directorName}${pageIndex}${itemPerPage}`);
    const jsonRes = await res.json();
    const sendData = jsonRes.movieListResult.movieList;
    return sendData;
}

export const setMovieList = (movieName = "", directorName = "") => {
    return { type: SET_MOVIELIST, directorName, movieName };
}

export const getMovieList = () => async (dispatch, getState) => {
    dispatch({ type: GET_MOVIELIST });
    try {
        const { movieName } = getState().movieList;
        const { directorName } = getState().movieList;
        const { currentPage } = getState().movieList;
        const { itemRowPage } = getState().movieList;
        const data = await getMovieListAPI(movieName, directorName, currentPage, itemRowPage);
        dispatch({ type: GET_MOVIELIST_SUCCESS, data });
    } catch (e) {
        dispatch({ type: GET_MOVIELIST_ERROR, error: e });
    }
}

export const pageUp = () => {
    return ({ type: PAGE_UP });
}

const initialState = {
    movieList: {
        data: null,
        loading: false,
        error: null,
    },
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
        case GET_MOVIELIST: {
            return {
                ...state,
                movieList: { ...state.movieList, loading: true },
            };
        }
        case GET_MOVIELIST_SUCCESS: {
            const sendData = !state.movieList.data ? action.data : state.movieList.data.concat(action.data);
            return {
                ...state,
                movieList: { ...state.movieList, loading: false, data: sendData }
            };
        }
        case GET_MOVIELIST_ERROR: {
            return {
                ...state,
                movieList: { ...state.movieList, loading: false, error: action.error },
            };
        }
        default: return state;
    }
}

export default MovieList;
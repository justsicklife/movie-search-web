const GET_MOVIELIST = "movieList/GET_MOVIELIST";
const GET_MOVIELIST_SUCCESS = "movieList/GET_MOVIELIST_SUCCESS";
const GET_MOVIELIST_ERROR = "movieList/GET_MOVIELIST_SUCCESS";

const getMovieListAPI = async (pMovieNm, pDirectorNm, curPage) => {
    const movieName = pMovieNm !== "" ? `&movieNm=${pMovieNm}` : "";
    const directorName = pDirectorNm !== "" ? `&directorNm=${pDirectorNm}` : "";
    const pageIndex = `&curPage=${curPage}`
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=7c88cc83cd33def078fa2c0580e6045c${movieName}${directorName}${pageIndex}`);
    const jsonRes = await res.json();
    const sendData = jsonRes.movieListResult.movieList;
    return sendData;
}

export const getMovieList = (movieNm = "", directorNm = "", curPage = 1) => async dispatch => {
    dispatch({ type: GET_MOVIELIST });
    try {
        const data = await getMovieListAPI(movieNm, directorNm, curPage);
        console.log(data);
        dispatch({ type: GET_MOVIELIST_SUCCESS, data });
    } catch (e) {
        dispatch({ type: GET_MOVIELIST_ERROR, error: e });
    }
}

const initialState = {
    movieList: {
        data: null,
        loading: false,
        error: null,
    }
}

const MovieList = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIELIST: {
            return {
                movieList: { ...state.movieList, loading: true },
            };
        }
        case GET_MOVIELIST_SUCCESS: {
            return {
                movieList: { ...state.movieList, loading: false, data: action.data }
            };
        }
        case GET_MOVIELIST_ERROR: {
            return {
                movieList: { ...state.movieList, loading: false, error: action.error },
            };
        }
        default: return state;
    }
}

export default MovieList;
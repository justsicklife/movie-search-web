const GET_MOVIE_CD = "movieMore/GET_MOVIE_CD";

const GET_MOVIE = "movieMore/GET_MOVIE";
const GET_MOVIE_SUCCESS = "movieMore/GET_MOVIE_SUCCESS";
const GET_MOVIE_ERROR = "movieMore/GET_MOVIE_ERROR";



export const getMovieCd = (movieCd) => {
    return { type: GET_MOVIE_CD, movieCd };
}

export const getMovie = () => async (dispatch, getState) => {
    dispatch({ type: GET_MOVIE });
    try {
        const { movieCd } = getState().movie;
        const res = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=7c88cc83cd33def078fa2c0580e6045c&movieCd=${movieCd}`)
        const resJson = await res.json();
        const movieSend = resJson
        dispatch({ type: GET_MOVIE_SUCCESS, movie: movieSend });
    } catch (e) {
        dispatch({ type: GET_MOVIE_ERROR, error: e });
    }
}

const initialState = {
    movie: {
        loading: false,
        data: null,
        error: null,
    },
    movieCd: null,
}

const movieMore = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_CD:
            return {
                ...state,
                movieCd: action.movieCd,
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: { ...state.movie, loading: true },
            };
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: { ...state.movie, loading: false, data: action.movie },
            };
        case GET_MOVIE_ERROR:
            return {
                ...state,
                movie: { ...state.movie, loading: false, error: action.error },
            };
        default:
            return state;
    }
}

export default movieMore;
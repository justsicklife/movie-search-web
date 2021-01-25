const GET_MOVIE_DETAIL_ID = "movieDetail/GET_MOVIE_DETAIL_ID";

const GET_MOVIE_DETAIL = "movieDetail/GET_MOVIE_DETAIL";
const GET_MOVIE_DETAIL_SUCCESS = "movieDetail/GET_MOVIE_DETAIL_SUCCESS";
const GET_MOVIE_DETAIL_ERROR = "movieDetail/GET_MOVIE_DETAIL_ERROR";

export const setMovieCd = (movieId) => {
    return { type: GET_MOVIE_DETAIL_ID, movieId };
}

export const getMovie = (movieId) => async (dispatch) => {
    dispatch({ type: GET_MOVIE_DETAIL });
    try {
        const res = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=7c88cc83cd33def078fa2c0580e6045c&movieCd=${movieId}`)
        const resJson = await res.json();
        const movieSend = resJson;
        dispatch({ type: GET_MOVIE_DETAIL_SUCCESS, movie: movieSend });
    } catch (e) {
        dispatch({ type: GET_MOVIE_DETAIL_ERROR, error: e });
    }
}

const initialState = {
    movie: {
        loading: false,
        data: null,
        error: null,
    },
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
            return {
                ...state,
                movie: { ...state.movie, loading: true },
            };
        case GET_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                movie: { ...state.movie, loading: false, data: action.movie },
            };
        case GET_MOVIE_DETAIL_ERROR:
            return {
                ...state,
                movie: { ...state.movie, loading: false, error: action.error },
            };
        default:
            return state;
    }
}

export default movieDetail;
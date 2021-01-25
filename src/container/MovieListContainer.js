import { useDispatch, useSelector } from "react-redux"
import MovieList from "../components/MovieList.js";
import { getMovieList } from "../modules/movieList.js";

const MovieListContainer = () => {
    const { movieList, loading, error } = useSelector(state => ({
        movieList: state.movieList.movieList.data,
        loading: state.movieList.movieList.loading,
        error: state.movieList.movieList.error,
    }));
    console.log(movieList);

    const dispatch = useDispatch();

    const onGetMovieList = (movieNm, directorNm, curPage) => {
        dispatch(getMovieList(movieNm, directorNm, curPage))
    }

    return (
        <MovieList
            onGetMovieList={onGetMovieList}
            movieList={movieList}
            loading={loading}
            error={error}
        />
    )

}

export default MovieListContainer;
import { useDispatch, useSelector } from "react-redux"
import MovieList from "../components/MovieList.js";
import { getMovieList, setMovieList, pageUp, setItemRowPage } from "../modules/movieList.js";

const MovieListContainer = () => {
    const { movieList, loading, error, currentPage } = useSelector(state => ({
        movieList: state.movieList.movieList.data,
        loading: state.movieList.movieList.loading,
        error: state.movieList.movieList.error,
        currentPage: state.movieList.currentPage,
    }));

    const dispatch = useDispatch();

    const onGetMovieList = () => {
        dispatch(getMovieList())
    }

    const onSetItemRowPage = (item) => {
        dispatch(setItemRowPage(item));
    }

    const onPageUp = () => {
        dispatch(pageUp());
    }

    const onSetMovieList = (movieName, directorName) => {
        dispatch(setMovieList(movieName, directorName))
    }

    return (
        <MovieList
            onGetMovieList={onGetMovieList}
            movieList={movieList}
            loading={loading}
            error={error}
            onSetMovieList={onSetMovieList}
            onPageUp={onPageUp}
            currentPage={currentPage}
            onSetItemRowPage={onSetItemRowPage}
        />
    )

}

export default MovieListContainer;
import { useDispatch, useSelector } from "react-redux"
import { getMovie, setMovieCd } from "../modules/movieDetail.js";
import MovieDetail from "../components/MovieDetail.js";
import { useEffect } from "react";

const MovieDetailContainer = ({ id }) => {
    const { movie, movieId, error, loading } = useSelector(state => ({
        movie: state.movieDetail.movie.data,
        loading: state.movieDetail.movie.loading,
        error: state.movieDetail.movie.error,
        movieId: state.movieDetail.movieId,
    }));

    const dispatch = useDispatch();

    const onGetMovie = (pMovieId) => {
        dispatch(getMovie(pMovieId));
    };

    const onSetMovieId = (id) => {
        setMovieCd(id);
    }

    useEffect(() => {
        if (movieId === id) return
        const param = { id };
        onSetMovieId(id);
        onGetMovie(param);
    }, [id]);

    return (
        <div>
            <MovieDetail
                movie={movie}
                error={error}
                loading={loading}
            />
        </div>
    )
}

export default MovieDetailContainer;
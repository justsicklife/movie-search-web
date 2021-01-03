import { useDispatch, useSelector } from "react-redux"
import { getMovie } from "../modules/movieMore.js";
import MovieMore from "../components/MovieMore.js";

const MovieMoreContainer = () => {
    const { movie, movieCd } = useSelector(state => ({
        movie: state.movieMore.movie,
        movieCd: state.movieMore.movieCd,
    }));

    const dispatch = useDispatch();

    const getMovie = () => {
        dispatch(getMovie());
    };

    return (
        <div>
            <MovieMore movie={movie} />
        </div>
    )
}

export default MovieMoreContainer;
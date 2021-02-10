import MovieDetailContainer from "../container/MovieDetailContainer.js";


const MovieDetailPage = ({ match }) => {
    const { id } = match.params;
    return <MovieDetailContainer id={id} />
}

export default MovieDetailPage;
import key from "./key.js";

const movieListRest = "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json"

const getMovieLisData = async (param, getState) => {
    const { movieName } = getState().movieList;
    const { directorName } = getState().movieList;
    const { currentPage } = getState().movieList;
    const { itemRowPage } = getState().movieList;

    const restMovieName = movieName !== "" ? `&movieNm=${movieName}` : "";
    const restDirectorName = directorName !== "" ? `&directorNm=${directorName}` : "";
    const restPageIndex = `&curPage=${currentPage}`
    const restItemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`${movieListRest}${key}${restMovieName}${restDirectorName}${restPageIndex}${restItemPerPage}`);
    const jsonRes = await res.json();
    const sendData = jsonRes.movieListResult.movieList;
    return sendData;
}

export default getMovieLisData;
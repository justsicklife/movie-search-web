import key from "./key.js";

const movieDetailRest = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json"

const getMovieDetailData = async (param) => {
    const { id } = param;
    const movieCd = `&movieCd=${id}`
    const res = await fetch(`${movieDetailRest}${key}${movieCd}`)
    const resJson = await res.json();
    const movieSend = resJson.movieInfoResult.movieInfo;
    return movieSend;
}

export default getMovieDetailData;
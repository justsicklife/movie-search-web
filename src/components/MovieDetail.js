import { useEffect, useRef, useState } from "react";
import "./MovieDetail.css";

const MovieDetail = ({ movie, error, loading }) => {

    if (loading) return <div>로딩중</div>;
    if (!movie) return <div>정보없음</div>;

    const { movieInfo } = movie.movieInfoResult;

    console.log(movieInfo);

    const MovieTitleTag = ({ movieName, moviePrdYear }) => {
        return (
            <div className="movie_title">
                <div className="movie_name">
                    <h1>{movieName}</h1>
                </div>
                <div className="movie_prdt_year">
                    <h3>({moviePrdYear})</h3>
                </div>
            </div>
        )
    }

    const MovieActorsTag = ({ actors }) => {
        return (
            <div className="movie_actors">
                {actors.map((actor, index) => {
                    return (
                        <div key={index} className="movie_actor">
                            <div className="movie_actor_profile">
                                <span><img alt={`${actor.peopleNm}의 사진`}></img></span>
                            </div>
                            <div className="movie_actor_name"><h5>{actor.peopleNm}</h5></div>
                            {
                                actor.cast !== "" &&
                                <div className="movie_actor_cast"><h5>{actor.cast} 역</h5></div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }

    const MovieTimeTag = ({ showTime }) => {
        return (
            <div className="movie_time"><h5>{`${showTime}`}</h5></div>
        )
    }

    const MovieOpenDateTag = ({ openDate }) => {
        const year = openDate.substring(0, 4);
        const month = openDate.substring(4, 6);
        const day = openDate.substring(6, 8);
        return (
            <div className="movie_open_date"><h5>{`${year}년 ${month}월 ${day}일`}</h5></div>
        )
    }

    const MovieNationsTag = ({ nations }) => {
        return (
            <ul className="movie_nations">
                {nations.map((nation) => {
                    return (
                        <li className="movie_nation">
                            <h5>
                                {nation.nationNm}
                            </h5>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const MovieGenresTag = ({ genres }) => {
        return (
            <ul className="movie_genres">
                {genres.map((genre) => {
                    return (
                        <li className="movie_genre">
                            <h5>{genre.genreNm}</h5>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const MovieDirectorsTag = ({ directors }) => {
        return (
            <div className="movie_directors">
                {directors.map((director) => {
                    return (
                        <div className="movie_director">
                            <h5>
                                {director.peopleNm}
                            </h5>
                        </div>
                    )
                })}
            </div>
        )
    }

    const MovieCompanysTag = ({ companys }) => {
        return (
            <div className="companys">
                {companys.map((company) => {
                    return (
                        <div className="company">
                            <h5>
                                {company.companyPartNm} - {company.companyNm}
                            </h5>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className="movie">
                <MovieTitleTag movieName={movieInfo.movieNm} moviePrdYear={movieInfo.prdtYear} />
                <div className="movie_box">
                    <div className="movie_box_inner">
                        <div className="movie_box_inner_top">
                            <div className="movie_box_inner_top--left">
                                <div className="movie_poster">
                                    <span>
                                        <img alt={`영화 ${movieInfo.movieNm}의 포스터`}></img>
                                    </span>
                                </div>
                            </div>
                            <div className="movie_box_inner_top--right">
                                <MovieTimeTag showTime={movieInfo.showTm} />
                                <MovieOpenDateTag openDate={movieInfo.openDt} />
                                <MovieNationsTag nations={movieInfo.nations} />
                                <MovieGenresTag genres={movieInfo.genres} />
                                <MovieDirectorsTag directors={movieInfo.directors} />
                                <MovieCompanysTag companys={movieInfo.companys} />
                            </div>
                        </div>
                        <div className="movie_box_inner_bottom">
                            <div className="actors_title"><h3>참여 배우</h3></div>
                            <MovieActorsTag actors={movieInfo.actors} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;
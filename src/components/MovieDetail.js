import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
import { LoadingBar } from "../api/loadingbar/loadingbar.js";
import { ContentTag, ContentsTag } from "../api/contentTag/contentTag.js";


const MovieDetail = ({ movie, error, loading }) => {

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

    const movieOpenDate = (openDate) => {
        const year = openDate.substring(0, 4);
        const month = openDate.substring(4, 6);
        const day = openDate.substring(6, 8);
        return `${year}년 ${month}월 ${day}일`
    }

    const MovieCompanysTag = ({ companys }) => {
        return (
            <div className="companys">
                {companys.map((company) => {
                    return (
                        <div key={Math.random()}>
                            <Link to={`/company/detail/${company.companyCd}`}>
                                <div className="company">
                                    <h5>
                                        {company.companyPartNm} - {company.companyNm}
                                    </h5>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }

    switch (true) {
        case loading:
            return (
                <LoadingBar />
            )
        case !movie:
            return (
                <div className="text-align-center">정보없음</div>
            )
        case error:
            return (
                <div className="text-align-center">에러</div>
            )
        default:
            return (
                <div className="movie">
                    <MovieTitleTag movieName={movie.movieNm} moviePrdYear={movie.prdtYear} />
                    <div className="movie_box">
                        <div className="movie_box_inner">
                            <div className="movie_box_inner_top">
                                <div className="movie_box_inner_top--left">
                                    <div className="movie_poster">
                                        <span>
                                            <img alt={`영화 ${movie.movieNm}의 포스터`}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="movie_box_inner_top--right">
                                    <ContentTag content={movie} classNm="movie_show_time" propertyName="showTm" />
                                    <ContentTag content={movie} callbackFn={movieOpenDate} classNm="movie_open_date" propertyName="openDt" />
                                    <ContentsTag contents={movie.nations} childClassNm="movie_nation" classNm="movie_nations" propertyName="nationNm" />
                                    <ContentsTag contents={movie.genres} childClassNm="movie_genre" classNm="movie_genres" propertyName="genreNm" />
                                    <ContentsTag contents={movie.directors} childClassNm="movie_director" classNm="movie_directors" propertyName="peopleNm" />
                                    <MovieCompanysTag companys={movie.companys} />
                                </div>
                            </div>
                            <div className="movie_box_inner_bottom">
                                <div className="actors_title"><h3>참여 배우</h3></div>
                                <MovieActorsTag actors={movie.actors} />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default MovieDetail;
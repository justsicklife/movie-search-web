import "./MovieList.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ onGetMovieList, movieList, loading, error }) => {
    const movieNmRef = useRef();
    const directorNmRef = useRef();
    const inputMovie = useRef({
        movieNm: "",
        directorNm: "",
    });
    const pageIndex = useRef(null);
    const currentMovie = useRef([]);

    const onSubmit = (e) => {
        e.preventDefault();
        inputMovie.current = ({
            movieNm: movieNmRef.current.value,
            directorNm: directorNmRef.current.value
        });
        pageIndex.current = 1;
        onGetMovieList(movieNmRef.current.value, directorNmRef.current.value);
        currentMovie.current = [];
    }

    const TitleTag = () => {
        return (
            <div>
                <h1>
                    영화검색
                </h1>
            </div>
        )
    }

    const InputForm = () => {
        return (
            <form onSubmit={onSubmit} type="submit">
                <input ref={movieNmRef} placeholder="제목" type="text" />
                <input ref={directorNmRef} placeholder="감독" type="text" />
                <input onSubmit={onSubmit} type="submit" />
            </form>
        )
    }

    const movieGetMore = () => {
        if (pageIndex.current * 10 !== currentMovie.current.length) return
        pageIndex.current += 1;
        onGetMovieList(inputMovie.current.movieNm, inputMovie.current.directorNm, pageIndex.current)
    }

    const MovieContentTag = ({ content, propertyNm, classNm, isTitle = false }) => {
        return (
            <div className={`movielist_movie_${classNm}`}>
                {isTitle ||
                    <h5>
                        {content[propertyNm]}
                    </h5>
                }
                {!isTitle ||
                    <h1>
                        {content[propertyNm]}
                    </h1>
                }
            </div>
        )
    }

    const MovieTag = ({ movieList }) => {
        return (
            <div className="movielist_movie">
                {movieList.map((movie) => {
                    return (
                        <div className="movielist_movie_wrap">
                            <div className="movielist_movie_rank_wrap">
                                <MovieContentTag content={movie} propertyNm={"rank"} classNm="rank" />
                            </div>
                            <div className="movielist_movie_inner">
                                <Link to={`/movie/detail/${movie.movieCd}`} className="movielist_movie_inner_top">
                                    <div className="movielist_movie_poster front">
                                        <span>
                                            <img alt={`영화 ${movie.movieNm}의 포스터`} />
                                        </span>
                                    </div>
                                </Link>
                                <div className="movielist_movie_inner_bottom">
                                    <MovieContentTag content={movie} propertyNm="movieNm" classNm="name_ko" isTitle />
                                    <MovieContentTag content={movie} propertyNm="movieNmEn" classNm="name_en" />
                                    <MovieContentTag content={movie} propertyNm="openDt" classNm="open_dt" />
                                    <MovieContentTag content={movie} propertyNm="prdtYear" classNm="prdt_year" />
                                    <MovieContentTag content={movie} propertyNm="prdtStatNm" classNm="prdt_stat_nm" />
                                    <MovieContentTag content={movie} propertyNm="repNationNm" classNm="rep_nation_mm" />
                                    <MovieContentTag content={movie} propertyNm="repGenreNm" classNm="rep_genre_nm" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


    if (loading && currentMovie.current.length === 0) {
        return (
            <>
                <TitleTag />
                <InputForm />
                <div className="loading_bar"><i className="fas fa-spinner"></i></div>
            </>
        )
    }

    if (loading) {
        return (
            <div>
                <TitleTag />
                <InputForm />
                <div className="movielist">
                    <div className="movielist_wrap">
                        <MovieTag movieList={currentMovie.current} />
                        <div className="view_more_loading">
                            <div className="view_more_loading_icon">
                                <i className="fas fa-spinner"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    if (!movieList) return (
        <>
            <TitleTag />
            <InputForm />
        </>
    )

    currentMovie.current = [...currentMovie.current, ...movieList];

    return (
        <div>
            <TitleTag />
            <InputForm />
            <div className="movielist">
                <div className="movielist_wrap">
                    <MovieTag movieList={currentMovie.current} />
                    {
                        pageIndex.current * 10 === currentMovie.current.length &&
                        <div className="view_more_button">
                            <button onClick={movieGetMore}><i className="fas fa-chevron-circle-down"></i></button>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default MovieList;
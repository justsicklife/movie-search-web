import "./MovieList.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingBar, LoadingBarViewMore } from "../api/loadingbar/loadingbar.js";
import { ContentTag } from "../api/contentTag/contentTag.js";


const MovieList = ({ error, onSetItemRowPage, onGetMovieList, movieList, loading, onSetMovieList, onPageUp, currentPage }) => {
    const movieNmRef = useRef();
    const directorNmRef = useRef();
    const itemRowPageRef = useRef(10);

    const [itemRowPage, setItemRowPage] = useState(10);

    const onSubmit = (e) => {
        e.preventDefault();
        if (movieNmRef.current.value === "" && directorNmRef.current.value === "") return
        onSetMovieList(movieNmRef.current.value, directorNmRef.current.value)
        onSetItemRowPage(itemRowPage);
        itemRowPageRef.current = itemRowPage;
        onGetMovieList();
    }

    const onChangeItemRowPage = (e) => {
        setItemRowPage(e.target.value);
    }

    const TitleTag = () => {
        return (
            <div className="container title text-align-center">
                <h1>
                    영화검색
                </h1>
            </div>
        )
    }

    const SelectTag = () => {
        return (
            <div className="container text-align-center">
                <div>
                    <label>검색 결과 개수</label>
                    <select value={itemRowPage} onChange={onChangeItemRowPage} id="select-itemPerPage">
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        )
    }

    const InputForm = () => {
        return (
            <div className="container input text-align-center">
                <form className="movielist_form" onSubmit={onSubmit} type="submit">
                    <fieldset className="movielist_fieldset">
                        <input className="input_title" ref={movieNmRef} placeholder="제목" type="text" />
                        <input className="input_director" ref={directorNmRef} placeholder="감독" type="text" />
                        <input className="input_submit" type="submit" />
                    </fieldset>
                </form>
            </div>
        )
    }

    const addOpenDate = (pString) => {
        const year = `${pString[0]}${pString[1]}${pString[2]}${pString[3]}년`;
        const month = `${pString[4]}${pString[5]}월`;
        const day = `${pString[6]}${pString[7]}일`;
        return `${year} ${month} ${day}`;
    }

    const movieGetMore = () => {
        if (currentPage * itemRowPageRef.current !== movieList.length) return
        onPageUp();
        onGetMovieList();
    }

    const MovieTag = ({ movieList }) => {
        return (
            <div className="movielist_movie">
                {movieList.map((movie) => {
                    return (
                        <div key={movie.movieCd} className="movielist_movie_wrap">
                            <div className="movielist_movie_inner">
                                <Link to={`/movie/detail/${movie.movieCd}`} className="movielist_movie_inner_top">
                                    <div className="movielist_movie_poster front">
                                        <span>
                                            <img alt={`영화 ${movie.movieNm}의 포스터`} />
                                        </span>
                                    </div>
                                </Link>
                                <div className="movielist_movie_inner_bottom">
                                    <ContentTag content={movie} propertyName="movieNm" classNm="movielist_movie_name_ko" />
                                    <ContentTag content={movie} propertyName="movieNmEn" classNm=" movielist_movie_name_en" />
                                    <ContentTag content={movie} callbackFn={addOpenDate} propertyName="openDt" classNm="movielist_movie_open_dt" />
                                    <ContentTag content={movie} propertyName="prdtYear" classNm="movielist_movie_prdt_year" />
                                    <ContentTag content={movie} propertyName="prdtStatNm" classNm="movielist_movie_prdt_stat_nm" />
                                    <ContentTag content={movie} propertyName="repNationNm" classNm="movielist_movie_rep_nation_mm" />
                                    <ContentTag content={movie} propertyName="repGenreNm" classNm="movielist_movie_rep_genre_nm" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


    switch (true) {
        case loading && !movieList:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <LoadingBar />
                </>
            )
        case loading:
            return (
                <div>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="movielist">
                        <div className="container">
                            <MovieTag movieList={movieList} />
                            <LoadingBarViewMore />
                        </div>
                    </div>
                </div >
            )
        case !movieList:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                </>
            )
        case error:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="text-align-center">에러</div>
                </>
            )
        case movieList.length === 0:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="text-align-center">정보없음</div>
                </>
            )
        default:
            return (
                <div>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="movielist">
                        <div className="container">
                            <MovieTag movieList={movieList} />
                            {
                                currentPage * itemRowPageRef.current === movieList.length &&
                                <div className="view_more_button">
                                    <button onClick={movieGetMore}><i className="fas fa-chevron-circle-down"></i></button>
                                </div>
                            }
                        </div>
                    </div>
                </div >
            )
    }
}

export default MovieList;
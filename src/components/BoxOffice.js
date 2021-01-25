import React, { useRef, useState } from "react";
import "./BoxOffice.css";
import { Link } from 'react-router-dom';

const BoxOffice = ({ movieList, getBoxOffice, loading, error, onGetData, onSetSortData }) => {
    const [date, setDate] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
        onGetData(e.target.value);
    }

    const onDateSubmit = (e) => {
        e.preventDefault();
        if (!date) return
        getBoxOffice();
    }

    const TitleTag = () => {
        return (
            <div className="title">
                <h1>박스오피스</h1>
            </div>
        )
    }

    const SearchTag = () => {
        return (
            <form onSubmit={onDateSubmit}>
                <input type="date"
                    onChange={onChange}
                    value={date}
                />
                <input type="submit" onSubmit={onDateSubmit} value="영화 검색" />
            </form>
        )
    }

    const SortButtonTag = ({ text }) => {
        return (
            <button className={`sort_button`}>
                {text}
            </button>
        )
    }

    const SortButtonGroupTag = () => {
        return (
            <div className="sort_button_list">
                <SortButtonTag text="개봉일" />
                <SortButtonTag text="순위" />
                <SortButtonTag text="상영수" />
                <SortButtonTag text="누적 매출" />
                <SortButtonTag text="매출액" />
                <SortButtonTag text="관객수" />
                <SortButtonTag text="누적관객수" />
            </div>
        )
    }

    const HeaderTag = () => {
        return (
            <div className="boxoffice_header">
                <TitleTag />
                <SearchTag />
            </div>
        )
    }


    if (loading) return <div className="text-align-center">로딩중</div>
    if (error) return <div className="text-align-center">에러</div>


    if (!movieList) return (
        <HeaderTag />
    );

    if (movieList.length === 0) return (
        <>
            <HeaderTag />
            <div>정보없음</div>
        </>
    );

    const addToContour = (pString) => {
        let sendString = "";
        let index = 1;
        let currentIndex = pString.length - 1;
        for (let i = pString.length; i > 0; i--) {
            sendString = pString[currentIndex] + sendString;
            if (index % 3 === 0 && currentIndex !== 0) sendString = "," + sendString;
            index++;
            currentIndex--;
        }
        return sendString;
    }

    const MovieContentTag = ({ content, propertyNm, classNm, isTitle = false }) => {
        return (
            <div className={`boxoffice_movie_${classNm}`}>
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

    const NumbersTag = ({ classNm, propertyNm, content }) => {
        return (
            <div className={`boxoffice_movie_${classNm}`}>
                <h5>
                    {addToContour(content[propertyNm])}
                </h5>
            </div>
        )
    }

    const MovieTag = ({ movieList }) => {
        return (
            <div className="boxoffice_movie">
                {movieList.map((movie) => {
                    return (
                        <div key={movie.movieCd} className="boxoffice_movie_wrap">
                            <div className="boxoffice_movie_rank_wrap">
                                <MovieContentTag content={movie} propertyNm={"rank"} classNm="rank" />
                            </div>
                            <div className="boxoffice_movie_inner">
                                <Link to={`/movie/detail/${movie.movieCd}`} className="boxoffice_movie_inner_top">
                                    <div className="boxoffice_movie_poster front">
                                        <span>
                                            <img alt={`영화 ${movie.movieNm}의 포스터`} />
                                        </span>
                                    </div>
                                    <div className="boxoffice_movie_additional back">
                                        <NumbersTag content={movie} propertyNm="showCnt" classNm="show_count" />
                                        <NumbersTag content={movie} propertyNm="audiCnt" classNm="audi_count" />
                                        <NumbersTag content={movie} propertyNm="audiAcc" classNm="audi_accumulate_count" />
                                        <NumbersTag content={movie} propertyNm="salesAcc" classNm="sale_accumulate" />
                                        <NumbersTag content={movie} propertyNm="salesAmt" classNm="sale_today" />
                                    </div>
                                </Link>
                                <div className="boxoffice_movie_inner_bottom">
                                    <MovieContentTag content={movie} propertyNm="movieNm" classNm="name" isTitle />
                                    <MovieContentTag content={movie} propertyNm="openDt" classNm="open_date" />
                                    <NumbersTag content={movie} propertyNm="audiCnt" classNm="audience_count" />
                                    <NumbersTag content={movie} propertyNm="audiAcc" classNm="audience_accumulate" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <HeaderTag />
            <SortButtonGroupTag />
            <div className="boxoffice">
                <MovieTag movieList={movieList} />
            </div>
        </div>
    )
}

export default BoxOffice;
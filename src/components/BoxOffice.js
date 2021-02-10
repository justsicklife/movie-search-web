import React, { useRef, useState } from "react";
import "./BoxOffice.css";
import { Link } from 'react-router-dom';
import { LoadingBar } from "../tag/loadingbar/loadingbar.js";
import { ContentTag } from "../tag/contentTag/contentTag.js";


const BoxOffice = ({ movieList, getBoxOffice, filterDate, loading, error, onGetDate, onSetSortData }) => {
    const [date, setDate] = useState("");
    const sortButtonGroupRef = useRef();
    const sortBurrontActiveIndex = useRef(null);

    console.log(loading);

    const onChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
        const sendDate = filterDate(e.target.value);
        onGetDate(sendDate);
    }

    const sortData = (propertyName, index) => {
        sortBurrontActiveIndex.current = index;
        onSetSortData(propertyName);
    }

    const onDateSubmit = (e) => {
        e.preventDefault();
        if (!date) return
        getBoxOffice();
        sortBurrontActiveIndex.current = null;
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
                <input type="submit" onSubmit={onDateSubmit} value="박스오피스 검색" />
            </form>
        )
    }

    const SortButtonTag = ({ text, index, setSort, propertyName }) => {
        const isActive = (index === sortBurrontActiveIndex.current);
        return (
            <button onClick={() => setSort(propertyName, index)} className={!isActive ? `sort_button` : `sort_button_active`}>
                {text}
            </button>
        )
    }

    const SortButtonGroupTag = () => {
        return (
            <div ref={sortButtonGroupRef} className="sort_button_list">
                <SortButtonTag index={0} setSort={sortData} propertyName="openDt" text="개봉일" />
                <SortButtonTag index={1} setSort={sortData} propertyName="rank" text="순위" />
                <SortButtonTag index={2} setSort={sortData} propertyName="scrnCnt" text="상영수" />
                <SortButtonTag index={3} setSort={sortData} propertyName="salesAcc" text="누적 매출" />
                <SortButtonTag index={4} setSort={sortData} propertyName="salesAmt" text="매출액" />
                <SortButtonTag index={5} setSort={sortData} propertyName="audiCnt" text="관객수" />
                <SortButtonTag index={6} setSort={sortData} propertyName="audiAcc" text="누적관객수" />
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

    const MovieTag = ({ movieList }) => {
        return (
            <div className="boxoffice_movie">
                {movieList.map((movie) => {
                    return (
                        <div key={movie.movieCd} className="boxoffice_movie_wrap">
                            <div className="boxoffice_movie_rank_wrap">
                                <ContentTag content={movie} propertyName={"rank"} classNm="boxoffice_movie_rank" />
                            </div>
                            <div className="boxoffice_movie_inner">
                                <Link to={`/movie/detail/${movie.movieCd}`} className="boxoffice_movie_inner_top">
                                    <div className="boxoffice_movie_poster front">
                                        <span>
                                            <img alt={`영화 ${movie.movieNm}의 포스터`} />
                                        </span>
                                    </div>
                                    <div className="boxoffice_movie_additional back">
                                        <ContentTag callbackFn={addToContour} content={movie} propertyName="showCnt" classNm="boxoffice_movie_show_count" />
                                        <ContentTag callbackFn={addToContour} content={movie} propertyName="audiCnt" classNm="boxoffice_movie_audi_count" />
                                        <ContentTag callbackFn={addToContour} content={movie} propertyName="audiAcc" classNm="boxoffice_movie_audi_accumulate_count" />
                                        <ContentTag callbackFn={addToContour} content={movie} propertyName="salesAcc" classNm="boxoffice_movie_sale_accumulate" />
                                        <ContentTag callbackFn={addToContour} content={movie} propertyName="salesAmt" classNm="boxoffice_movie_sale_today" />
                                    </div>
                                </Link>
                                <div className="boxoffice_movie_inner_bottom">
                                    <ContentTag content={movie} propertyName="movieNm" classNm="boxoffice_movie_name" />
                                    <ContentTag content={movie} propertyName="openDt" classNm="boxoffice_movie_open_date" />
                                    <ContentTag callbackFn={addToContour} content={movie} propertyName="audiCnt" classNm="boxoffice_movie_audience_count" />
                                    <ContentTag callbackFn={addToContour} content={movie} propertyName="audiAcc" classNm="boxoffice_movie_audience_accumulate" />
                                </div>
                            </div>
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
        case error:
            return (
                <div className="text-align-center">에러</div>
            )
        case !movieList:
            return (
                <HeaderTag />
            )
        case movieList.length === 0:
            return (
                <>
                    <HeaderTag />
                    <div className="text-align-center">정보없음</div>
                </>
            )
        default:
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

}

export default BoxOffice;
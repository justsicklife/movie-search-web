import React, { useRef, useState } from "react";
import "./BoxOffice.css";

const BoxOffice = ({ movieList, getBoxOffice, loading, error, onGetDate }) => {
    const [date, setDate] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
        onGetDate(e.target.value);
    }

    if (loading) return <div>로딩중</div>
    if (error) return <div>에러</div>

    if (!movieList) return (
        <form onSubmit={getBoxOffice}>
            <input type="date"
                onChange={onChange}
                value={date}
            />
            <input type="submit" onSubmit={getBoxOffice} value="영화 검색" />
        </form>
    );

    return (
        <div>
            <form onSubmit={getBoxOffice}>
                <input type="date"
                    onChange={onChange}
                    value={date}
                />
                <input type="submit" onSubmit={getBoxOffice} value="영화 검색" />
            </form>
            <div className="movie_list">
                <div className="movie_row">
                    <p className="movie_cell">이름</p>
                    <p className="movie_cell">순위</p>
                    <p className="movie_cell">개봉일</p>
                    <p className="movie_cell">상영된수</p>
                    <p className="movie_cell">누적매출액</p>
                    <p className="movie_cell">해당일의 매출액</p>
                    <p className="movie_cell">관객수</p>
                    <p className="movie_cell">누적관객수</p>
                    <p className="movie_cell">영화 상세 정보</p>
                </div>
                {movieList.map((movie) =>
                    <div className="movie_row">
                        <p className="movie_name movie_cell">{movie.movieNm}</p>
                        <p className="movie_rank movie_cell">{movie.rank}</p>
                        <p className="movie_open_date movie_cell">{movie.openDt}</p>
                        <p className="movie_show_count movie_cell">{movie.showCnt}</p>
                        <p className="movie_sale_accumulate movie_cell">{movie.salesAcc}</p>
                        <p className="movie_sale movie_cell">{movie.salesAmt}</p>
                        <p className="movie_audience_count movie_cell">{movie.audiCnt}</p>
                        <p className="movie_audience_count_accumulate movie_cell">{movie.audiAcc}</p>
                        <div className="movie_cell">
                            <button>더보기...</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BoxOffice;
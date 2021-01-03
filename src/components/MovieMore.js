const MovieMore = ({ movie }) => {
    return (
        <div>
            <div>
                <p>이름 </p>
                {/* movieNm */}
                <p>제작연도</p>
                {/* prdtYear */}
                <p>상영시간</p>
                {/* showTm */}
                <p>개봉연도</p>
                {/* openDt */}
                <p>제작국가</p>
                {/* openDt */}
                <p>장르명</p>
                {/* genreNm */}
                <p>감독</p>
                {/* peopleNm */}
                <p>배우</p>
                {/* actors */}
                <p>관람등급</p>
                {/* watchGradeNm */}
                <p>심의번호</p>
                {/* audits */}
            </div>
            <div>
                <p>{movie.movieNm}</p>
                <p>{movie.prdtYear}</p>
                <p>{movie.showTm}</p>
                <p>{movie.openDt}</p>
                <p>{movie.genreNm}</p>
                <p>{movie.peopleNm}</p>
                <p>{movie.actors}</p>
                <p>{movie.watchGradeNm}</p>
                <p>{movie.audits}</p>
            </div>
        </div>
    )
}

export default MovieMore;
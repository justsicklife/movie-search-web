import "./PeopleDetail.css";
import { Link } from "react-router-dom";
import { LoadingBar } from "../api/loadingbar/loadingbar.js";
import { ContentTag } from "../api/contentTag/contentTag.js";

const PeopleDetail = ({ loading, people }) => {

    if (loading) {
        return <LoadingBar />
    }

    if (!people && !loading) {
        return (
            <>
                <div>정보 없음</div>
            </>
        )
    }

    const FilmosTag = ({ filmos }) => {
        return (
            <div className="person_filmos">
                {filmos.map((filmo) => {
                    return (
                        <div key={`${filmo.movieCd}`} className="person_filmo">
                            <Link
                                className="movie_link"
                                to={`/movie/detail/${filmo.movieCd}`}>
                                <div className="person_filmo_poster">
                                    <span>
                                        <img alt={`영화 ${filmo.movieNm}의 포스터`} />
                                    </span>
                                </div>
                            </Link>
                            <div className="person_filmo_name"><h5>{filmo.movieNm}</h5></div>
                            <div className="person_filmo_cast"><h5>{filmo.moviePartNm}</h5></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="person">
            <div className="person_box">
                <div className="person_box_inner">
                    <div className="person_box_inner_top">
                        <div className="person_box_inner_top--left">
                            <div className="person_poster">
                                <span>
                                    <img alt={`${people.peopleNm}의 사진`}></img>
                                </span>
                            </div>
                        </div>
                        <div className="person_box_inner_top--right">
                            <ContentTag content={people} propertyName={"peopleNm"} classNm="pserson_name_ko" />
                            <ContentTag content={people} propertyName={"peopleNmEn"} classNm="pserson_name_en" />
                            <ContentTag content={people} propertyName={"repRoleNm"} classNm="pserson_role" />
                            <ContentTag content={people} propertyName={"sex"} classNm="person_sex" />
                        </div>
                    </div>
                    <div className="person_box_inner_bottom">
                        <div className="person_box_inner_botom--all">
                            <div className="person_box_filmo_perpace"><h3>필모리스트</h3></div>
                            <FilmosTag filmos={people.filmos} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleDetail;
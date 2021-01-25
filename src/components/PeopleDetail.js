import "./PeopleDetail.css";
import { Link } from "react-router-dom";

const PeopleDetail = ({ loading, people }) => {

    if (loading) {
        return <div>로딩중</div>
    }

    if (!people) {
        return (
            <>
                <div>정보 없음</div>
            </>
        )
    }

    const SexTag = ({ sex }) => {
        return (
            <div className="person_sex">
                <h5>{sex}</h5>
            </div>
        )
    }

    const NameTag = ({ name, languge = "ko" }) => {
        return (

            <div className={`pserson_name_${languge}`}><h5>{name}</h5></div>
        )
    }

    const RoleTag = ({ role }) => {
        return (

            <div className="pserson_role"><h5>{role}</h5></div>
        )
    }

    const FilmosTag = ({ filmos }) => {
        return (
            <div className="person_filmos">
                {filmos.map((filmo) => {
                    return (
                        <div key={`${filmo.movieCd}`} className="person_filmo">
                            <div className="person_filmo_poster">
                                <span>
                                    <img alt={`영화 ${filmo.movieNm}의 포스터`} />
                                </span>
                            </div>
                            <div className="person_filmo_name"><h5>{filmo.movieNm}</h5></div>
                            <div className="person_filmo_cast"><h5>{filmo.moviePartNm}</h5></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    console.log(people);

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
                            <NameTag name={people.peopleNm} />
                            <NameTag languge={"en"} name={people.peopleNmEn} />
                            <RoleTag role={people.repRoleNm} />
                            <SexTag sex={people.sex} />
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
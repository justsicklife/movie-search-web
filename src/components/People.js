import { useRef } from "react"
import "./People.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoadingBar, LoadingBarViewMore } from "../api/loadingbar/loadingbar.js";
import { ContentTag } from "../api/contentTag/contentTag.js";


const People = ({ error, onSetItemRowPage, loading, people, onGetPeople, onSetPeople, onPageUp, currentPage }) => {
    const peopleNmRef = useRef();
    const filmoNmRef = useRef();
    const itemRowPageRef = useRef(10);

    const [itemRowPage, setItemRowPage] = useState(10);

    const onSubmit = (e) => {
        e.preventDefault();
        onSetPeople(peopleNmRef.current.value, filmoNmRef.current.value);
        onSetItemRowPage(itemRowPage);
        itemRowPageRef.current = itemRowPage;
        onGetPeople();
    }

    const TitleTag = () => {
        return (
            <div className="container text-align-center title_container">
                <h1>영화인</h1>
            </div>
        )
    }

    const onChangeItemRowPage = (e) => {
        setItemRowPage(e.target.value);
        onSetItemRowPage(e.target.value);
    }

    const SelectTag = () => {
        return (
            <div className="container select_container">
                <div className="text-align-center">
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
            <div className="container form_container">
                <form className="text-align-center" onSubmit={onSubmit}>
                    <fieldset className="people_fieldset">
                        <input className="input_name" ref={peopleNmRef} type="text" placeholder="영화인명" />
                        <input className="input_filmo" ref={filmoNmRef} type="text" placeholder="출연영화" />
                        <input className="input_submit" type="submit" onSubmit={onSubmit} />
                    </fieldset>
                </form>
            </div>
        )
    }

    const PeopleGetMore = () => {
        if (currentPage * itemRowPageRef.current !== people.length) return
        onPageUp();
        onGetPeople()
    }

    const PeopleTag = ({ PeopleList, keyName }) => {
        return (
            <div className="peoplelist_people">
                {PeopleList.map((people) => {
                    return (
                        <div key={people[keyName]} className="people_wrap">
                            <div className="people_inner">
                                <Link to={`/People/detail/${people.peopleCd}`} className="people_inner_top">
                                    <div className="people_poster front">
                                        <span>
                                            <img alt={`배우 ${people.peopleNm}의 사진`} />
                                        </span>
                                    </div>
                                </Link>
                                <div className="people_inner_bottom">
                                    <ContentTag content={people} propertyName="peopleNm" classNm="people_name_ko" />
                                    <ContentTag content={people} propertyName="peopleNmEn" classNm="people_name_en" />
                                    <ContentTag content={people} propertyName="repRoleNm" classNm="people_rep_role_nm" />
                                    <ContentTag content={people} propertyName="filmo_names" classNm="people_filmo_names" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    switch (true) {
        case loading && !people:
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
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="peoplelist">
                        <div className="container">
                            <PeopleTag keyName="peopleCd" PeopleList={people} />
                            < LoadingBarViewMore />
                        </div>
                    </div>
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
        case !people:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                </>
            )
        case people.length === 0:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="text-align-center">정보 없음</div>
                </>
            )
        default:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="peoplelist">
                        <div className="container">
                            <PeopleTag keyName="peopleCd" PeopleList={people} />
                            {
                                currentPage * itemRowPageRef.current === people.length &&
                                <div className="view_more_button">
                                    <button onClick={PeopleGetMore}><i className="fas fa-chevron-circle-down"></i></button>
                                </div>
                            }
                        </div>
                    </div>
                </>
            )
    }
}

export default People;
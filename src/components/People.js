import { useRef } from "react"
import "./People.css";
import { Link } from "react-router-dom";

const People = ({ loading, people, onGetPeople }) => {
    const peopleNmRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        onGetPeople(peopleNmRef.current.value);
    }

    const TitleTag = () => {
        return (
            <div>
                <h1>영화인</h1>
            </div>
        )
    }

    const InputForm = () => {
        return (
            <>
                <form onSubmit={onSubmit}>
                    <input ref={peopleNmRef} type="text" placeholder="영화인명" />
                    <input type="submit" onSubmit={onSubmit} />
                </form>
            </>
        )
    }

    if (loading) {
        return <div>로딩중</div>
    }

    if (!people) return (
        <>
            <TitleTag />
            <InputForm />
        </>
    )

    if (people.length === 0) {
        return (
            <>
                <TitleTag />
                <InputForm />
                <div>정보 없음</div>
            </>
        )
    }

    return (
        <>
            <TitleTag />
            <InputForm />
            <div className="people_table">
                <div className="people_row">
                    <div className="people_cell">영화인명</div>
                    <div className="people_cell">영화인명(영문)</div>
                    <div className="people_cell">분야명</div>
                    <div className="people_cell">필모리스트</div>
                </div>
                {people.map((human) => {
                    return (
                        <div className="people_row">
                            <div className="people_cell">{human.peopleNm}</div>
                            <div className="people_cell">{human.peopleNmEn}</div>
                            <div className="people_cell">{human.repRoleNm}</div>
                            <div className="people_cell"><Link to={`/people/detail/${human.peopleCd}`}>더보기</Link></div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default People;
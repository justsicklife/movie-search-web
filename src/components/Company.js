import { useRef } from "react"
import "./Company.css";
import { Link } from "react-router-dom";

const Company = ({ companys, onGetCompany, error, loading }) => {
    const movieNmRef = useRef();
    const ceoNmRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(movieNmRef);
        onGetCompany(movieNmRef.current.value, ceoNmRef.current.value);
    }

    const TitleTag = () => {
        return (
            <div>
                <h1>
                    영화사
                 </h1>
            </div>
        )
    }

    const InputForm = () => {
        return (
            <>
                <form onSubmit={onSubmit}>
                    <input ref={movieNmRef} type="text" placeholder="영화사명" />
                    <input ref={ceoNmRef} type="text" placeholder="대표자명" />
                    <input type="submit" onSubmit={onSubmit} />
                </form>
            </>
        )
    }

    if (loading) {
        return <div>로딩중</div>
    }

    if (!companys) return (
        <>
            <TitleTag />
            <InputForm />
        </>
    )

    if (companys.length === 0) {
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
            <InputForm />
            <div className="company_table">
                <div className="company_row">
                    <div className="company_cell">회사명</div>
                    <div className="company_cell">회사명(영문)</div>
                    <div className="company_cell">대표자명</div>
                    <div className="company_cell">더보기</div>
                </div>
                {companys.map((company) => {
                    return (
                        <div className="company_row">
                            <div className="company_cell">{company.companyNm}</div>
                            <div className="company_cell">{company.companyNmEn}</div>
                            <div className="company_cell">{company.ceoNm}</div>
                            <div className="company_cell"><Link to={`/company/detail/${company.companyCd}`}>더보기</Link></div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Company;
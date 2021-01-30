import { useRef } from "react"
import "./Company.css";
import { useState } from "react"
import { Link } from "react-router-dom";
import { LoadingBar, LoadingBarViewMore } from "../api/loadingbar/loadingbar.js";
import { ContentTag } from "../api/contentTag/contentTag.js";


const Company = ({ onSetItemRowPage, companyList, onGetCompany, error, loading, currentPage, onPageUp, onSetCompany }) => {
    const companyNmRef = useRef();
    const ceoNmRef = useRef();
    const itemRowPageRef = useRef(10);

    const [itemRowPage, setItemRowPage] = useState(10);

    const onSubmit = (e) => {
        e.preventDefault();
        if (companyNmRef.current.value === "" && ceoNmRef.current.value === "") return
        onSetCompany(companyNmRef.current.value, ceoNmRef.current.value);
        onSetItemRowPage(itemRowPage);
        itemRowPageRef.current = itemRowPage;
        onGetCompany();
    }

    const onChangeItemRowPage = (e) => {
        setItemRowPage(e.target.value);
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


    const TitleTag = () => {
        return (
            <div className="title text-align-center">
                <h1>
                    영화사
                 </h1>
            </div>
        )
    }

    const InputForm = () => {
        return (
            <div className="container text-align-center input ">
                <form className="company_form" onSubmit={onSubmit}>
                    <fieldset className="company_fieldset">
                        <input className="input_name" ref={companyNmRef} type="text" placeholder="영화사명" />
                        <input className="input_ceo" ref={ceoNmRef} type="text" placeholder="대표자명" />
                        <input className="input_submit" type="submit" onSubmit={onSubmit} />
                    </fieldset>
                </form>
            </div>
        )
    }

    const companyGetMore = () => {
        onPageUp();
        onGetCompany();
    }

    const CompanyTag = ({ companyList, keyName }) => {
        return (
            <div className="companylist_company">
                {companyList.map((company) => {
                    return (
                        <div key={company[keyName]} className="company_wrap">
                            <div className="company_inner">
                                <Link to={`/company/detail/${company.companyCd}`} className="company_inner_top">
                                    <div className="company_poster">
                                        <span>
                                            <img alt={`회사 ${company.companyNm}의 로고`} />
                                        </span>
                                    </div>
                                </Link>
                                <div className="company_inner_bottom">
                                    <ContentTag content={company} propertyName="companyNm" classNm="company_name_ko" />
                                    <ContentTag content={company} propertyName="companyNmEn" classNm="company_name_en" />
                                    <ContentTag content={company} propertyName="companyPartNames" classNm="company_open_dt" />
                                    <ContentTag content={company} propertyName="ceoNm" classNm="company_ceo_name" />                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    switch (true) {
        case loading && !companyList:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <LoadingBar />
                </>
            )
        case loading && companyList:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="companylist">
                        <div className="companyList_wrap">
                            <CompanyTag keyName="companyCd" companyList={companyList} />
                            <LoadingBarViewMore />
                        </div>
                    </div>
                </>
            )
        case !companyList:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                </>
            )
        case companyList.length === 0:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="text-align-center">정보 없음</div>
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
        default:
            return (
                <>
                    <TitleTag />
                    <InputForm />
                    <SelectTag />
                    <div className="companylist">
                        <div className="companyList_wrap">
                            <CompanyTag keyName="companyCd" companyList={companyList} />
                            {
                                currentPage * itemRowPageRef.current === companyList.length &&
                                <div className="view_more_button">
                                    <button onClick={companyGetMore}><i className="fas fa-chevron-circle-down"></i></button>
                                </div>
                            }
                        </div>
                    </div>
                </>
            )
    }
}

export default Company;
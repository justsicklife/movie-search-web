import "./Company.css";

const CompanyDetail = ({ company, loading }) => {

    if (loading) {
        return <div>로딩중</div>
    }

    if (!company) {
        return (
            <>
                <div>정보 없음</div>
            </>
        )
    }

    return (
        <>
            <div className="company_table">
                <div className="company_row">
                    <div className="company_cell">회사명</div>
                    <div className="company_cell">회사명(영문)</div>
                    <div className="company_cell">대표자명</div>
                    <div className="company_cell">필모리스트</div>
                </div>
                <div className="company_row">
                    <div className="company_cell">{company.companyNm}</div>
                    <div className="company_cell">{company.companyNmEn}</div>
                    <div className="company_cell">{company.ceoNm}</div>
                    <div className="company_cell">{company.filmoNames}</div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetail;
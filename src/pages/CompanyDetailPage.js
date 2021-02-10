import CompanyDetailContainer from "../container/CompanyDetailContainer.js";

const CompanyDetailPage = ({ match }) => {
    const id = match.params.companyid;
    return <CompanyDetailContainer id={id} />
}

export default CompanyDetailPage;
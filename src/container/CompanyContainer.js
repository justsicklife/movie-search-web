import Company from "../components/Company.js";
import { useDispatch, useSelector } from "react-redux"
import { getCompany } from "../modules/company.js";

const CompanyContainer = () => {
    const { companys, loading, error } = useSelector(state => ({
        companys: state.company.company.data,
        loading: state.company.company.loading,
        error: state.company.company.error,
    }));

    const dispatch = useDispatch();

    const onGetCompany = (companyNm, ceoNm) => {
        dispatch(getCompany(companyNm, ceoNm));
    }

    return <Company
        loading={loading}
        error={error}
        onGetCompany={onGetCompany}
        companys={companys}
    />
}

export default CompanyContainer;
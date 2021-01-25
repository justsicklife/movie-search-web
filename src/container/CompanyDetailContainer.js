import CompanyDetail from "../components/CompanyDetail.js";
import { useDispatch, useSelector } from "react-redux"
import { getCompanyDetail } from "../modules/companyDetail.js";
import { useEffect } from "react";

const CompanyDetailContainer = ({ match }) => {
    const { company, loading, error } = useSelector(state => ({
        company: state.companyDetail.companyDetail.data,
        loading: state.companyDetail.companyDetail.loading,
        error: state.companyDetail.companyDetail.error,
    }));

    const { companyid } = match.params;

    const dispatch = useDispatch();

    const onGetCompanyDetail = (companyCd) => {
        dispatch(getCompanyDetail(companyCd));
    }

    useEffect(() => {
        onGetCompanyDetail(companyid)
    }, []);

    return <CompanyDetail
        loading={loading}
        company={company}
    />
}

export default CompanyDetailContainer;
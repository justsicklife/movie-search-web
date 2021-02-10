import CompanyDetail from "../components/CompanyDetail.js";
import { useDispatch, useSelector } from "react-redux"
import { getCompanyDetail } from "../modules/companyDetail.js";
import { useEffect } from "react";

const CompanyDetailContainer = ({ id }) => {
    const { loading, error, company } = useSelector(state => ({
        company: state.companyDetail.companyDetail.data,
        loading: state.companyDetail.companyDetail.loading,
        error: state.companyDetail.companyDetail.error,
    }));

    const dispatch = useDispatch();

    const onGetCompanyDetail = (companyCd) => {
        dispatch(getCompanyDetail(companyCd));
    }

    useEffect(() => {
        const param = { id };
        onGetCompanyDetail(param)
    }, [id]);

    return <CompanyDetail
        loading={loading}
        company={company}
        error={error}
    />
}

export default CompanyDetailContainer;
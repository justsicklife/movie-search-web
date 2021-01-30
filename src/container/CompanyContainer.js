import Company from "../components/Company.js";
import { useDispatch, useSelector } from "react-redux"
import { getCompany, setCompany, pageUp,setItemRowPage } from "../modules/company.js";

const CompanyContainer = () => {
    const { companyList, loading, error, currentPage } = useSelector(state => ({
        companyList: state.company.company.data,
        loading: state.company.company.loading,
        error: state.company.company.error,
        currentPage: state.company.currentPage,
    }));

    const dispatch = useDispatch();

    const onSetItemRowPage = (itemRow) => {
        dispatch(setItemRowPage(itemRow))
    }

    const onGetCompany = () => {
        dispatch(getCompany());
    }

    const onSetCompany = (companyName, ceoName) => {
        dispatch(setCompany(companyName, ceoName));
    }

    const onPageUp = () => {
        dispatch(pageUp());
    }

    return <Company
        loading={loading}
        error={error}
        onGetCompany={onGetCompany}
        companyList={companyList}
        onPageUp={onPageUp}
        onSetCompany={onSetCompany}
        currentPage={currentPage}
        onSetItemRowPage={onSetItemRowPage}
    />
}

export default CompanyContainer;
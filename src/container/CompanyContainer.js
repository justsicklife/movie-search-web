import Company from "../components/Company.js";
import { useDispatch, useSelector } from "react-redux"
import { getCompany, setCompany, pageUp, setItemRowPage } from "../modules/company.js";

const CompanyContainer = () => {
    const { companyList, loading, error, currentPage, companyName, ceoName, itemRowPage } = useSelector(state => ({
        companyList: state.company.company.data,
        loading: state.company.company.loading,
        error: state.company.company.error,
        currentPage: state.company.currentPage,
        companyName: state.company.companyName,
        ceoName: state.company.ceoName,
        itemRowPage: state.company.itemRowPage,
    }));

    const dispatch = useDispatch();

    const onSetItemRowPage = (itemRow) => {
        dispatch(setItemRowPage(itemRow))
    }

    const onGetCompany = () => {
        dispatch(getCompany());
    }

    const onSetCompany = (pCompanyName, pCeoName) => {
        dispatch(setCompany(pCompanyName, pCeoName));
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
        companyName={companyName}
        ceoName={ceoName}
        itemRowPage={itemRowPage}
    />
}

export default CompanyContainer;
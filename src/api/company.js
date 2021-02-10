import key from "./key.js"

const companyListRest = "https://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json"

const getCompanyData = async (param, getState) => {

    const { companyName } = getState().company;
    const { ceoName } = getState().company;
    const { currentPage } = getState().company;
    const { itemRowPage } = getState().company;

    const restCompanyNm = companyName !== "" ? `&companyNm=${companyName}` : "";
    const restCeoNm = ceoName !== "" ? `&ceoNm=${ceoName}` : "";
    const restCurrentPage = `&curPage=${currentPage}`
    const restItemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`${companyListRest}${key}${restCompanyNm}${restCeoNm}${restCurrentPage}${restItemPerPage}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyListResult.companyList;
    return sendData;
}

export default getCompanyData;
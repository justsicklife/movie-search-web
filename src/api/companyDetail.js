import key from "./key.js";

const companyDetailRest = "https://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyInfo.json"

const getCompanyDetailData = async (param) => {
    const { id } = param;
    const restCompanyCd = id !== "" ? `&companyCd=${id}` : "";
    const res = await fetch(`${companyDetailRest}${key}${restCompanyCd}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyInfoResult.companyInfo;
    return sendData;
}


export default getCompanyDetailData;
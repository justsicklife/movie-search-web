const GET_COMPANY_DETAIL = "companyDetail/GET_COMPANY_DETAIL";
const GET_COMPANY_DETAIL_SUCCESS = "companyDetail/GET_COMPANY_DETAIL_SUCCESS";
const GET_COMPANY_DETAIL_ERROR = "companyDetail/GET_COMPANY_DETAIL_ERROR";

export const getCompanyDetail = (pCompanyCd = "") => async dispatch => {
    dispatch({ type: GET_COMPANY_DETAIL });
    try {
        const data = await getCompanyDetailData(pCompanyCd);
        dispatch({ type: GET_COMPANY_DETAIL_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_COMPANY_DETAIL_ERROR });
    }
}

const getCompanyDetailData = async (pCompanyCd) => {
    const companyCd = pCompanyCd !== "" ? `&companyCd=${pCompanyCd}` : "";
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyInfo.json?key=7c88cc83cd33def078fa2c0580e6045c${companyCd}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyInfoResult.companyInfo;
    debugger
    return sendData;
}

const initialState = {
    companyDetail: {
        loading: false,
        data: null,
        error: null,
    }
}

const companyDetail = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_DETAIL: {
            return {
                company: { ...state.company, loading: true }
            };
        }
        case GET_COMPANY_DETAIL_SUCCESS: {
            return {
                company: { ...state.company, data: action.data, loading: false }
            };
        }
        case GET_COMPANY_DETAIL_ERROR: {
            return {
                company: { ...state.company, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default companyDetail;
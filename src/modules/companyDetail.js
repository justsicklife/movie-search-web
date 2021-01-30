import { companyDetailRest, apiKey } from "../api/rest/rest.js";


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
    const res = await fetch(`${companyDetailRest}${apiKey}${companyCd}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyInfoResult.companyInfo;
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
                companyDetail: { ...state.companyDetail, loading: true }
            };
        }
        case GET_COMPANY_DETAIL_SUCCESS: {
            return {
                companyDetail: { ...state.companyDetail, data: action.data, loading: false }
            };
        }
        case GET_COMPANY_DETAIL_ERROR: {
            return {
                companyDetail: { ...state.companyDetail, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default companyDetail;
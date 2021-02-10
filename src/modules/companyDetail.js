import getCompanyDetailData from "../api/companyDetail.js";
import { createPromiseThunk, handleAsyncActions, reducerUtils } from "../lib/asyncUtils.js";

const GET_COMPANY_DETAIL = "companyDetail/GET_COMPANY_DETAIL";
const GET_COMPANY_DETAIL_SUCCESS = "companyDetail/GET_COMPANY_DETAIL_SUCCESS";
const GET_COMPANY_DETAIL_ERROR = "companyDetail/GET_COMPANY_DETAIL_ERROR";

export const getCompanyDetail = createPromiseThunk(GET_COMPANY_DETAIL, getCompanyDetailData);

const initialState = {
    companyDetail: reducerUtils.initial(),
}

const companyDetail = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_DETAIL:
        case GET_COMPANY_DETAIL_SUCCESS:
        case GET_COMPANY_DETAIL_ERROR:
            return handleAsyncActions(GET_COMPANY_DETAIL, 'companyDetail', false)(state, action);
        default: return state;
    }
}

export default companyDetail;
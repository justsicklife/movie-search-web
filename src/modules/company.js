import getCompanyData from "../api/company.js";
import { reducerUtils, createPromiseThunk, handleAsyncActions } from "../lib/asyncUtils.js";

const GET_COMPANY = "company/GET_COMPANY";
const GET_COMPANY_SUCCESS = "company/GET_COMPANY_SUCCESS";
const GET_COMPANY_ERROR = "company/GET_COMPANY_ERROR";
const SET_COMPANY = "company/SET_COMPANY";
const PAGE_UP = "company/PAGE_UP";
const SET_ITEMROWPAGE = "company/SET_ITEMROWPAGE";


export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

export const getCompany = createPromiseThunk(GET_COMPANY, getCompanyData);

export const setCompany = (companyName, ceoName) => {
    return { type: SET_COMPANY, companyName, ceoName };
}

export const pageUp = () => {
    return { type: PAGE_UP };
}

const initialState = {
    company: reducerUtils.initial(),
    companyName: "",
    ceoName: "",
    currentPage: 1,
    itemRowPage: 10,
}

const company = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMROWPAGE: {
            return {
                ...state,
                itemRowPage: action.itemRow,
                currentPage: 1,
            }
        }
        case PAGE_UP: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        }
        case SET_COMPANY: {
            return {
                ...state,
                company: { loading: false, data: null, error: null },
                companyName: action.companyName,
                ceoName: action.ceoName,
                currentPage: 1,
            }
        }
        case GET_COMPANY:
        case GET_COMPANY_SUCCESS:
        case GET_COMPANY_ERROR:
            return handleAsyncActions(GET_COMPANY, 'company')(state, action);
        default: return state;
    }
}

export default company;
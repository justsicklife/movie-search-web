const GET_COMPANY = "company/GET_COMPANY";
const GET_COMPANY_SUCCESS = "company/GET_COMPANY_SUCCESS";
const GET_COMPANY_ERROR = "company/GET_COMPANY_ERROR";
const SET_COMPANY = "company/SET_COMPANY";
const PAGE_UP = "company/PAGE_UP";
const SET_ITEMROWPAGE = "company/SET_ITEMROWPAGE";


export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

export const getCompany = () => async (dispatch, getState) => {
    dispatch({ type: GET_COMPANY });
    try {
        const { companyName } = getState().company;
        const { ceoName } = getState().company;
        const { currentPage } = getState().company;
        const { itemRowPage } = getState().company;
        const data = await getCompanyData(companyName, ceoName, currentPage, itemRowPage);
        dispatch({ type: GET_COMPANY_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_COMPANY_ERROR });
    }
}

export const setCompany = (companyName, ceoName) => {
    return { type: SET_COMPANY, companyName, ceoName };
}

export const pageUp = () => {
    return { type: PAGE_UP };
}

const getCompanyData = async (pCompanyNm, pCeoNm, pCurrentPage, itemRowPage) => {
    const companyNm = pCompanyNm !== "" ? `&companyNm=${pCompanyNm}` : "";
    const ceoNm = pCeoNm !== "" ? `&ceoNm=${pCeoNm}` : "";
    const currentPage = `&curPage=${pCurrentPage}`
    const itemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json?key=7c88cc83cd33def078fa2c0580e6045c${companyNm}${ceoNm}${currentPage}${itemPerPage}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyListResult.companyList;
    return sendData;
}

const initialState = {
    company: {
        loading: false,
        data: null,
        error: null,
    },
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
        case GET_COMPANY: {
            return {
                ...state,
                company: { ...state.company, loading: true }
            };
        }
        case GET_COMPANY_SUCCESS: {
            const sendData = !state.company.data ? action.data : [...state.company.data, ...action.data];
            return {
                ...state,
                company: { ...state.company, data: sendData, loading: false }
            };
        }
        case GET_COMPANY_ERROR: {
            return {
                ...state,
                company: { ...state.company, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default company;
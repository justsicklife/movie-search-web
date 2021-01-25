const GET_COMPANY = "company/GET_COMPANY";
const GET_COMPANY_SUCCESS = "company/GET_COMPANY_SUCCESS";
const GET_COMPANY_ERROR = "company/GET_COMPANY_ERROR";

export const getCompany = (pCompanyNm = "", pCeoNm = "") => async dispatch => {
    dispatch({ type: GET_COMPANY });
    try {
        const data = await getCompanyData(pCompanyNm, pCeoNm);
        dispatch({ type: GET_COMPANY_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_COMPANY_ERROR });
    }
}

const getCompanyData = async (pCompanyNm, pCeoNm) => {
    const companyNm = pCompanyNm !== "" ? `&companyNm=${pCompanyNm}` : "";
    const ceoNm = pCeoNm !== "" ? `&ceoNm=${pCeoNm}` : "";
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json?key=7c88cc83cd33def078fa2c0580e6045c${companyNm}${ceoNm}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.companyListResult.companyList;
    return sendData;
}

const initialState = {
    company: {
        loading: false,
        data: null,
        error: null,
    }
}

const company = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY: {
            return {
                company: { ...state.company, loading: true }
            };
        }
        case GET_COMPANY_SUCCESS: {
            return {
                company: { ...state.company, data: action.data, loading: false }
            };
        }
        case GET_COMPANY_ERROR: {
            return {
                company: { ...state.company, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default company;
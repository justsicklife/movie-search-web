const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "boxOffice/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_ERROR = "boxOffice/GET_BOXOFFICE_ERROR";
const GET_DATE = "boxOffice/GET_DATE";
const SET_SORT_DATE = "boxOffice/SET_SORT_DATE";

export const getBoxOffice = () => async (dispatch, getState) => {
    dispatch({ type: GET_BOXOFFICE });
    try {
        const { date } = getState().boxOffice;
        const res = await fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7c88cc83cd33def078fa2c0580e6045c&targetDt=${date}`);
        const resJson = await res.json();
        const data = resJson.boxOfficeResult.dailyBoxOfficeList;
        dispatch({ type: GET_BOXOFFICE_SUCCESS, data });
    } catch (e) {
        dispatch({ type: GET_BOXOFFICE_ERROR, error: e });
    }
}

export const getData = (date) => {
    return { type: GET_DATE, date };
}

export const setSortData = (dataToSort) => {
    return { type: SET_SORT_DATE, dataToSort }
}

const initialState = {
    boxOffice: {
        data: null,
        loading: false,
        error: null,
    },
    date: null,
}

const boxOffice = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_DATE: {
            const { dataToSort } = action;
            const dataClone = state.boxOffice.data.slice();
            const sortedData = dataClone.sort((a, b) => {
                return parseInt(a[dataToSort].replace(/[^0-9]/g, '')) - parseInt(b[dataToSort].replace(/[^0-9]/g, ''));
            })
            return {
                ...state,
                boxOffice: { ...state.boxOffice, data: sortedData }
            }
        }
        case GET_BOXOFFICE:
            return {
                ...state,
                boxOffice: { ...state.boxOffice, loading: true }
            };
        case GET_BOXOFFICE_SUCCESS:
            return {
                ...state,
                boxOffice: { ...state.boxOffice, data: action.data, loading: false },
            };
        case GET_BOXOFFICE_ERROR:
            return {
                ...state,
                boxOffice: { ...state.boxOffice, error: action.error, loading: false },
            };
        case GET_DATE:
            return {
                ...state,
                date: action.date,
            };
        default:
            return state;
    }
}

export default boxOffice;
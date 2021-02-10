import getBoxOfficeData from "../api/boxOffice.js";
import { reducerUtils, createPromiseThunk, handleAsyncActions } from "../lib/asyncUtils";

const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "boxOffice/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_ERROR = "boxOffice/GET_BOXOFFICE_ERROR";
const GET_DATE = "boxOffice/GET_DATE";
const SET_SORT_DATE = "boxOffice/SET_SORT_DATE";

export const getBoxOffice = createPromiseThunk(GET_BOXOFFICE, getBoxOfficeData);

export const getData = (date) => {
    return { type: GET_DATE, date };
}

export const setSortData = (dataToSort) => {
    return { type: SET_SORT_DATE, dataToSort }
}

const initialState = {
    boxOffice: reducerUtils.initial(),
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
        case GET_BOXOFFICE_SUCCESS:
        case GET_BOXOFFICE_ERROR:
            return handleAsyncActions(GET_BOXOFFICE, 'boxOffice', false)(state, action);
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
import getPeopleData from "../api/people.js";
import { reducerUtils, handleAsyncActions, createPromiseThunk } from "../lib/asyncUtils.js";

const GET_PEOPLE = "people/GET_PEOPLE";
const GET_PEOPLE_SUCCESS = "people/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_ERROR = "people/GET_PEOPLE_ERROR";
const SET_PEOPLE = "people/SET_PEOPLE";
const Page_UP = "people/Page_UP";
const SET_ITEMROWPAGE = "people/SET_ITEMROWPAGE";

export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

export const getPeople = createPromiseThunk(GET_PEOPLE, getPeopleData);

export const setPeople = (peopleName, peopleFilmo) => {
    return { type: SET_PEOPLE, peopleName, peopleFilmo };
}

export const pageUp = () => {
    return { type: Page_UP };
}

const initialState = {
    people: reducerUtils.initial(),
    peopleName: "",
    peopleFilmo: "",
    currentPage: 1,
    itemRowPage: 10,
}

const people = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMROWPAGE: {
            return {
                ...state,
                itemRowPage: action.itemRow,
            }
        }
        case SET_PEOPLE: {
            return {
                ...state,
                people: {
                    loading: false,
                    data: null,
                    error: null,
                },
                peopleName: action.peopleName,
                peopleFilmo: action.peopleFilmo,
                currentPage: 1,
            };
        }
        case Page_UP: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        }
        case GET_PEOPLE:
        case GET_PEOPLE_SUCCESS:
        case GET_PEOPLE_ERROR:
            return handleAsyncActions(GET_PEOPLE, 'people')(state, action);
        default: return state;
    }
}

export default people;
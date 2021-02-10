import getPeopleDetailData from "../api/peopleDetail.js"
import { reducerUtils, handleAsyncActions, createPromiseThunk } from "../lib/asyncUtils.js";

const GET_PEOPLE = "PeopleDetail/GET_PEOPLE";
const GET_PEOPLE_SUCCESS = "PeopleDetail/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_ERROR = "PeopleDetail/GET_PEOPLE_ERROR";
const SET_PEOPLE_ID = "PeopleDetail/SET_PEOPLE_ID";

export const setPeopleId = (peopleId) => {
    return { type: SET_PEOPLE_ID, peopleId }
}

export const getPeopleDetail = createPromiseThunk(GET_PEOPLE, getPeopleDetailData);

const initialState = {
    peopleDetail: reducerUtils.initial(),
    peopleId: null,
}

const PeopleDetail = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE_ID: {
            return {
                ...state,
                peopleId: action.peopleId,
            }
        }
        case GET_PEOPLE:
        case GET_PEOPLE_SUCCESS:
        case GET_PEOPLE_ERROR:
            return handleAsyncActions(GET_PEOPLE, 'peopleDetail',false)(state, action);
        default: return state;
    }
}

export default PeopleDetail;
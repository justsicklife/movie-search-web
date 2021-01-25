const GET_PEOPLE = "PeopleDetail/GET_PEOPLE";
const GET_PEOPLE_ID = "PeopleDetail/GET_PEOPLE_ID";
const GET_PEOPLE_SUCCESS = "PeopleDetail/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_ERROR = "PeopleDetail/GET_PEOPLE_ERROR";
const SET_PEOPLE_ID = "PeopleDetail/SET_PEOPLE_ID";

export const setPeopleId = (peopleId) => {
    return { type: SET_PEOPLE_ID, peopleId }
}

export const getPeopleDetail = (pPeopleId = "") => async dispatch => {
    dispatch({ type: GET_PEOPLE });
    try {
        const data = await getPeopleDetailData(pPeopleId);
        dispatch({ type: GET_PEOPLE_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_PEOPLE_ERROR });
    }
}


const getPeopleDetailData = async (pPeopleId) => {
    const peopleCd = pPeopleId !== "" ? `&peopleCd=${pPeopleId}` : "";
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=7c88cc83cd33def078fa2c0580e6045c${peopleCd}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.peopleInfoResult.peopleInfo;
    return sendData;
}

const initialState = {
    peopleDetail: {
        loading: false,
        data: null,
        error: null,
    },
    peopleId: null,
}

const PeopleDetail = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE_ID: {
            return {
                peopleDetail: { ...state.PeopleDetail },
                peopleId: action.peopleId,
            }
        }
        case GET_PEOPLE: {
            return {
                peopleDetail: { ...state.peopleDetail, loading: true }
            };
        }
        case GET_PEOPLE_SUCCESS: {
            return {
                peopleDetail: { ...state.peopleDetail, data: action.data, loading: false }
            };
        }
        case GET_PEOPLE_ERROR: {
            return {
                peopleDetail: { ...state.peopleDetail, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default PeopleDetail;
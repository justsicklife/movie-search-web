const GET_PEOPLE = "People/GET_PEOPLE";
const GET_PEOPLE_SUCCESS = "People/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_ERROR = "People/GET_PEOPLE_ERROR";

export const getPeople = (pPeopleNm = "") => async dispatch => {
    dispatch({ type: GET_PEOPLE });
    try {
        const data = await getPeopleData(pPeopleNm);
        dispatch({ type: GET_PEOPLE_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_PEOPLE_ERROR });
    }
}

const getPeopleData = async (pPeopleNm) => {
    const peopleNm = pPeopleNm !== "" ? `&peopleNm=${pPeopleNm}` : "";
    // const filmoNm = pfilmoNm !== "" ? `&filmoNames=${pfilmoNm}` : "";
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=7c88cc83cd33def078fa2c0580e6045c${peopleNm}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.peopleListResult.peopleList;
    console.log(sendData)
    return sendData;
}

const initialState = {
    people: {
        loading: false,
        data: null,
        error: null,
    }
}

const people = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLE: {
            return {
                people: { ...state.people, loading: true }
            };
        }
        case GET_PEOPLE_SUCCESS: {
            return {
                people: { ...state.people, data: action.data, loading: false }
            };
        }
        case GET_PEOPLE_ERROR: {
            return {
                people: { ...state.people, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default people;
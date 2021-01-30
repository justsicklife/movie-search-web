const GET_PEOPLE = "people/GET_PEOPLE";
const GET_PEOPLE_SUCCESS = "people/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_ERROR = "people/GET_PEOPLE_ERROR";
const SET_PEOPLE = "people/SET_PEOPLE";
const Page_UP = "people/Page_UP";
const SET_ITEMROWPAGE = "people/SET_ITEMROWPAGE";

export const setItemRowPage = (itemRow) => {
    return { type: SET_ITEMROWPAGE, itemRow };
}

export const getPeople = () => async (dispatch, getState) => {
    dispatch({ type: GET_PEOPLE });
    try {
        const { peopleName, peopleFilmo, currentPage, itemRowPage } = getState().people;
        const data = await getPeopleData(peopleName, peopleFilmo, currentPage, itemRowPage);
        dispatch({ type: GET_PEOPLE_SUCCESS, data })
    } catch (e) {
        dispatch({ type: GET_PEOPLE_ERROR });
    }
}

export const setPeople = (peopleName, peopleFilmo) => {
    return { type: SET_PEOPLE, peopleName, peopleFilmo };
}

export const pageUp = () => {
    return { type: Page_UP };
}

const getPeopleData = async (pPeopleNm = "", pFilmoNm = "", currentPage, itemRowPage) => {
    const peopleNm = pPeopleNm !== "" ? `&peopleNm=${pPeopleNm}` : "";
    const filmoNames = pFilmoNm !== "" ? `&filmoNames=${pFilmoNm}` : "";
    const curPage = `&curPage=${currentPage}`;
    const itemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=7c88cc83cd33def078fa2c0580e6045c${peopleNm}${curPage}${filmoNames}${itemPerPage}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.peopleListResult.peopleList;
    return sendData;
}

const initialState = {
    people: {
        loading: false,
        data: null,
        error: null,
    },
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
        case GET_PEOPLE: {
            return {
                ...state,
                people: { ...state.people, loading: true }
            };
        }
        case GET_PEOPLE_SUCCESS: {
            const sendData = !state.people.data ? action.data : state.people.data.concat(action.data);
            return {
                ...state,
                people: { ...state.people, data: sendData, loading: false }
            };
        }
        case GET_PEOPLE_ERROR: {
            return {
                ...state,
                people: { ...state.people, error: action.error, loading: false }
            };
        }
        default: return state;
    }
}

export default people;
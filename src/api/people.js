import key from "./key.js";

const peopleRest = "https://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json"

const getPeopleData = async (param, getState) => {

    const { peopleName, peopleFilmo, currentPage, itemRowPage } = getState().people;

    const restPeopleNm = peopleName !== "" ? `&peopleNm=${peopleName}` : "";
    const restFilmoNames = peopleFilmo !== "" ? `&filmoNames=${peopleFilmo}` : "";
    const restCurrentPage = `&curPage=${currentPage}`;
    const restItemPerPage = `&itemPerPage=${itemRowPage}`
    const res = await fetch(`${peopleRest}${key}${restPeopleNm}${restCurrentPage}${restFilmoNames}${restItemPerPage}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.peopleListResult.peopleList;
    return sendData;
}

export default getPeopleData;
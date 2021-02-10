import key from "./key.js";

const peopleDetailRest = "https://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json"

const getPeopleDetailData = async (param, getState) => {
    const { peopleId } = getState().peopleDetail;
    const restPeopleId = peopleId !== "" ? `&peopleCd=${peopleId}` : "";
    const res = await fetch(`${peopleDetailRest}${key}${restPeopleId}`)
    const jsonRes = await res.json();
    const sendData = jsonRes.peopleInfoResult.peopleInfo;
    console.log(sendData);
    return sendData;
}

export default getPeopleDetailData;
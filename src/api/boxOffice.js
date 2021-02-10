import key from "./key.js";

const boxOfficeRest = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

const getBoxOfficeData = async (param, getState) => {
    const { date } = getState().boxOffice;
    const targetDate = `&targetDt=${date}`
    const res = await fetch(`${boxOfficeRest}${key}${targetDate}`);
    const resJson = await res.json();
    const data = resJson.boxOfficeResult.dailyBoxOfficeList;
    return data;
}

export default getBoxOfficeData;
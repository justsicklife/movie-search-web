import { combineReducers } from "redux";
import boxOffice from "./boxOffice.js";
import movieDetail from "./movieDetail.js";
import movieList from "./movieList.js";
import company from "./company.js";
import companyDetail from "./companyDetail.js";
import people from "./people.js";
import peopleDetail from "./peopleDetail.js";

const rootReducer = combineReducers({
    boxOffice,
    movieDetail,
    movieList,
    company,
    companyDetail,
    people,
    peopleDetail,
});

export default rootReducer;
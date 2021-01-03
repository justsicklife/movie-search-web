import { combineReducers } from "redux";
import boxOffice from "./boxOffice.js";
import movieMore from "./movieMore.js";

const rootReducer = combineReducers({
    boxOffice,
    movieMore,
});

export default rootReducer;
import { useDispatch, useSelector } from "react-redux"
import BoxOffice from "../components/BoxOffice";
import { getBoxOffice, getDate } from "../modules/boxOffice.js";

const BoxOfficeContainer = () => {
    const { movieList, date, loading, error } = useSelector(state => ({
        movieList: state.boxOffice.boxOffice.data,
        date: state.boxOffice.date,
        loading: state.boxOffice.boxOffice.loading,
        error: state.boxOffice.boxOffice.error,
    }));
    const dispatch = useDispatch();

    const onGetBoxOffice = (e) => {
        e.preventDefault();
        dispatch(getBoxOffice());
    }

    const onGetDate = (date) => {
        const filterdDate = date.split('-');
        const year = filterdDate[0];
        const month = filterdDate[1];
        const day = filterdDate[2];
        const sendDate = `${year}${month}${day}`
        console.log(sendDate);
        dispatch(getDate(sendDate));
    }
    return (
        <BoxOffice
            loading={loading}
            error={error}
            movieList={movieList}
            getBoxOffice={onGetBoxOffice}
            onGetDate={onGetDate}
        />
    )
}

export default BoxOfficeContainer;
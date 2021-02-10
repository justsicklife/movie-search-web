import { useDispatch, useSelector } from "react-redux"
import BoxOffice from "../components/BoxOffice";
import { getBoxOffice, getData, setSortData } from "../modules/boxOffice.js";

const BoxOfficeContainer = () => {
    const { movieList, loading, error } = useSelector(state => ({
        movieList: state.boxOffice.boxOffice.data,
        loading: state.boxOffice.boxOffice.loading,
        error: state.boxOffice.boxOffice.error,
    }));

    const dispatch = useDispatch();

    const onGetBoxOffice = (date) => {
        dispatch(getBoxOffice(date));
    }

    const onSetSortData = (dataToSort) => {
        dispatch(setSortData(dataToSort))
    }

    const onGetDate = (date) => {
        dispatch(getData(date));
    }

    const filterDate = (date) => {
        const filterdDate = date.split('-');
        const year = filterdDate[0];
        const month = filterdDate[1];
        const day = filterdDate[2];
        const sendDate = `${year}${month}${day}`
        return sendDate;
    }

    return (
        <BoxOffice
            loading={loading}
            error={error}
            movieList={movieList}
            getBoxOffice={onGetBoxOffice}
            onGetDate={onGetDate}
            onSetSortData={onSetSortData}
            filterDate={filterDate}
        />
    )
}

export default BoxOfficeContainer;
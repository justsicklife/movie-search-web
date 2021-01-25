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

    const onGetBoxOffice = () => {
        dispatch(getBoxOffice());
    }

    const onSetSortData = (dataToSort) => {
        dispatch(setSortData(dataToSort))
    }

    const onGetData = (date) => {
        const filterdDate = date.split('-');
        const year = filterdDate[0];
        const month = filterdDate[1];
        const day = filterdDate[2];
        const sendDate = `${year}${month}${day}`
        dispatch(getData(sendDate));
    }
    return (
        <BoxOffice
            loading={loading}
            error={error}
            movieList={movieList}
            getBoxOffice={onGetBoxOffice}
            onGetData={onGetData}
            onSetSortData={onSetSortData}
        />
    )
}

export default BoxOfficeContainer;
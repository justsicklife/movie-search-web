import PeopleDetail from "../components/PeopleDetail.js";
import { useDispatch, useSelector } from "react-redux"
import { setPeopleId, getPeopleDetail } from "../modules/peopleDetail"
import { useEffect } from "react";


const PeopleDetailContainer = ({ id }) => {
    const { people, loading, error, peopleId } = useSelector(state => ({
        people: state.peopleDetail.peopleDetail.data,
        loading: state.peopleDetail.peopleDetail.loading,
        error: state.peopleDetail.peopleDetail.error,
        peopleId: state.peopleDetail.peopleId,
    }));

    const dispatch = useDispatch();

    const onSetPeopleId = (peopleId) => {
        dispatch(setPeopleId(peopleId));
    }

    const onGetPeopleDetail = (peopleId) => {
        dispatch(getPeopleDetail(peopleId));
    }

    useEffect(() => {
        if (peopleId === id) return
        onSetPeopleId(id);
        onGetPeopleDetail(id);
    }, []);

    return <PeopleDetail
        loading={loading}
        error={error}
        people={people}
    />
}

export default PeopleDetailContainer;
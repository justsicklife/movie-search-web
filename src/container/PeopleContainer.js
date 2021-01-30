import People from "../components/People.js";
import { useDispatch, useSelector } from "react-redux"
import { getPeople, setPeople, pageUp, setItemRowPage } from "../modules/people.js";

const PeopleContainer = () => {
    const { people, loading, error, currentPage } = useSelector(state => ({
        people: state.people.people.data,
        loading: state.people.people.loading,
        error: state.people.people.error,
        currentPage: state.people.currentPage,
    }));

    const dispatch = useDispatch();

    const onSetItemRowPage = (item) => {
        dispatch(setItemRowPage(item));
    }

    const onSetPeople = (peopleName, peopleFilmo) => {
        dispatch(setPeople(peopleName, peopleFilmo));
    }

    const onPageUp = () => {
        dispatch(pageUp());
    }

    const onGetPeople = (peopleNm, pageIndex) => {
        dispatch(getPeople(peopleNm, pageIndex));
    }

    return <People
        loading={loading}
        error={error}
        onGetPeople={onGetPeople}
        people={people}
        onSetPeople={onSetPeople}
        onPageUp={onPageUp}
        currentPage={currentPage}
        onSetItemRowPage={onSetItemRowPage}
    />
}

export default PeopleContainer;
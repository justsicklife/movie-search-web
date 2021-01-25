import People from "../components/People.js";
import { useDispatch, useSelector } from "react-redux"
import { getPeople } from "../modules/people.js";

const PeopleContainer = () => {
    const { people, loading, error } = useSelector(state => ({
        people: state.people.people.data,
        loading: state.people.people.loading,
        error: state.people.people.error,
    }));

    const dispatch = useDispatch();

    const onGetPeople = (peopleNm) => {
        dispatch(getPeople(peopleNm));
    }

    return <People
        loading={loading}
        error={error}
        onGetPeople={onGetPeople}
        people={people}
    />
}

export default PeopleContainer;
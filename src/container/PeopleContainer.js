import People from "../components/People.js";
import { useDispatch, useSelector } from "react-redux"
import { getPeople, setPeople, pageUp, setItemRowPage } from "../modules/people.js";

const PeopleContainer = () => {
    const { people, loading, error, currentPage, peopleName, peopleFilmo, itemRowPage } = useSelector(state => ({
        people: state.people.people.data,
        loading: state.people.people.loading,
        error: state.people.people.error,
        currentPage: state.people.currentPage,
        peopleName: state.people.peopleName,
        peopleFilmo: state.people.peopleFilmo,
        itemRowPage: state.people.itemRowPage,
    }));

    const dispatch = useDispatch();

    const onSetItemRowPage = (item) => {
        dispatch(setItemRowPage(item));
    }

    const onSetPeople = (pPeopleName, pPeopleFilmo) => {
        dispatch(setPeople(pPeopleName, pPeopleFilmo));
    }

    const onPageUp = () => {
        dispatch(pageUp());
    }

    const onGetPeople = () => {
        dispatch(getPeople());
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
        peopleName={peopleName}
        peopleFilmo={peopleFilmo}
        itemRowPage={itemRowPage}
    />
}

export default PeopleContainer;
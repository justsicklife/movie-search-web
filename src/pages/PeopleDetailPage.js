import PeopleDetailContainer from "../container/PeopleDetailContainer";

const PeopleDetailPage = ({ match }) => {
    const { id } = match.params;
    return <PeopleDetailContainer id={id} />
}

export default PeopleDetailPage;
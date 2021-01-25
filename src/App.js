import './App.css';
import BoxOfficeContainer from "./container/BoxOfficeContainer.js";
import MovieDetailContainer from "./container/MovieDetailContainer.js";
import NavbarContainer from "./container/NavbarContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieListContainer from "./container/MovieListContainer.js";
import CompanyContainer from "./container/CompanyContainer.js";
import CompanyDetailContainer from "./container/CompanyDetailContainer.js";
import PeopleContainer from "./container/PeopleContainer.js";
import PeopleDetailContainer from './container/PeopleDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavbarContainer} />
        <Route path="/boxoffice" component={BoxOfficeContainer} />
        <Route path="/movielist" component={MovieListContainer} />
        <Route path="/companys" component={CompanyContainer} />
        <Route path="/company/detail/:companyid" component={CompanyDetailContainer} />
        <Route path="/peoplelist" component={PeopleContainer} />
        <Route path="/people/detail/:id" component={PeopleDetailContainer} />
        <Route path="/movie/detail/:id" component={MovieDetailContainer} />
      </Router>
    </div>
  );
}

export default App;

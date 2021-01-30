import './App.css';
import BoxOfficeContainer from "./container/BoxOfficeContainer.js";
import MovieDetailContainer from "./container/MovieDetailContainer.js";
import NavbarContainer from "./container/NavbarContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieListContainer from "./container/MovieListContainer.js";
import CompanyContainer from "./container/CompanyContainer.js";
import CompanyDetailContainer from "./container/CompanyDetailContainer.js";
import PeopleContainer from "./container/PeopleContainer.js";
import PeopleDetailContainer from './container/PeopleDetailContainer';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={NavbarContainer} />
        <Switch>
          <Route exact path="/" component={BoxOfficeContainer} />
          <Route path="/movielist" component={MovieListContainer} />
          <Route path="/companys" component={CompanyContainer} />
          <Route path="/company/detail/:companyid" component={CompanyDetailContainer} />
          <Route path="/peoplelist" component={PeopleContainer} />
          <Route path="/people/detail/:id" component={PeopleDetailContainer} />
          <Route path="/movie/detail/:id" component={MovieDetailContainer} />
          <Route path="*" component={() => {
            return <div className="notfound_page"><h5>404 Not Found</h5></div>
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import BoxOfficePage from "./pages/BoxOfficePage.js";
import MovieDetailPage from "./pages/MovieDetailPage.js";
import NavbarContainer from "./container/NavbarContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage.js";
import CompanyPage from "./pages/CompanyPage.js";
import CompanyDetailPage from "./pages/CompanyDetailPage.js";
import PeoplePage from "./pages/PeoplePage.js";
import PeopleDetailPage from './pages/PeopleDetailPage';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={NavbarContainer} />
        <Switch>
          <Route exact path="/" component={BoxOfficePage} />
          <Route path="/movielist" component={MovieListPage} />
          <Route path="/companys" component={CompanyPage} />
          <Route path="/company/detail/:companyid" component={CompanyDetailPage} />
          <Route path="/peoplelist" component={PeoplePage} />
          <Route path="/people/detail/:id" component={PeopleDetailPage} />
          <Route path="/movie/detail/:id" component={MovieDetailPage} />
          <Route path="*" component={() => {
            return <div className="notfound_page"><h5>404 Not Found</h5></div>
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import BoxOfficeContainer from "./container/BoxOfficeContainer.js";
import MovieMoreContainer from "./container/MovieMoreContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={BoxOfficeContainer} exact />
        <Route path="/movie" component={MovieMoreContainer} />
      </Router>
    </div>
  );
}

export default App;

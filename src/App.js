import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowListingPage from "./components/PLP/ShowListingPage";
import 'bootstrap/dist/css/bootstrap.css';
import showData from './movies.json'
import ShowDetailPage from "./components/PDP/ShowDetailPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ShowListingPage shows={showData} />
          </Route>
          <Route path="/detail/:id" children={<ShowDetailPage />} />
        </Switch>
      </div>
    </Router>
  );
}
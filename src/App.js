import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import ShowListingPage from "./components/PLP/ShowListingPage";
import ShowDetailPage from "./components/PDP/ShowDetailPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ShowListingPage />
          </Route>
          <Route path="/detail/:id" children={<ShowDetailPage />} />
        </Switch>
      </div>
    </Router>
  );
}
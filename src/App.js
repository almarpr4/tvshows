import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import ShowListingPage from "./components/PLP/ShowListingPage";
import ShowDetailPage from "./components/PDP/ShowDetailPage";
import HeaderComponent from "./components/Header/HeaderComponent";

export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
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
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

export default function BasicExample() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ShowListingPage shows={showData} />
          </Route>
          <Route path="/detail">
            <ShowDetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

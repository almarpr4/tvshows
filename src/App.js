import React, {useState} from "react";
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

  const [query, setQuery] = useState();

  function handleSearchClick(event) {
    event.preventDefault()
    setQuery(event.target.elements.search.value);
    console.log("header"+query);
  }

  return (
    <Router>
      <div className="App">
        <HeaderComponent onhandleSearchClick={handleSearchClick}/>
        <Switch>
          <Route exact path="/">
            <ShowListingPage text={query}/>
          </Route>
          <Route path="/detail/:id" children={<ShowDetailPage />} />
        </Switch>
      </div>
    </Router>
  );
}
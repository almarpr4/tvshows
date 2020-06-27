import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ShowListingPage from './components/PLP/ShowListingPage';
import showData from './movies.json'

function App() {
  return (
    <div className="App">
      <ShowListingPage shows={showData} />
    </div>
  );
}

export default App;

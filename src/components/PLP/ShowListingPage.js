import React, { useState, useEffect } from "react";
import ShowTile from "./ShowTile";

function ShowListingPage({ text }) {
  const [shows, setShows] = useState();

  let textToQuery = text;
  useEffect(() => {
    if (!text){
        textToQuery = 'girls';
    }
    fetch(`http://api.tvmaze.com/search/shows?q=${textToQuery}`)
      .then(response => response.json())
      .then(setShows)
      .catch(console.error);
  }, [textToQuery]);

  if (shows){
     return RenderShowListingPage(shows)
   }

  return null;
}

function RenderShowListingPage(shows){
        return (
            <div className="container">
            <div className="row">
                {shows.map((show, i) => (
                   <ShowTile key={i} {...show.show} />
                ))}
            </div>
          </div>
        );
}


export default ShowListingPage;



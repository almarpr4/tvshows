import React from "react";
import ShowTile from "./ShowTile";

function ShowListingPage({ shows }) {
    return (
    <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Show catalog</h1>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </div>
        </section>
        <div className="container">
        <div className="row">
            {shows.map((show, i) => (
               <ShowTile key={i} {...show.show} />
            ))}
        </div>
      </div>
      </>
    );
}

export default ShowListingPage;



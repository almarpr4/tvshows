import React from "react";


function ShowTile({ name, premiered, rating, image }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" data-src=""
             src={image.medium} alt="Card image cap" />
        <div className="card-body">
          <div className="justify-content-center align-items-center">{name}</div>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Year: {premiered}</small>
            <small className="text-muted">Rating: {rating.average}</small>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ShowTile;
import React from "react";
import {
  Link
} from "react-router-dom";

function ShowTile({ id = '', name = '', premiered = '', rating = {}, image = {} }) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${id}`}>
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" data-src={id} alt={id} src={image?.medium} />
          <div className="card-body">
            <div className="justify-content-center align-items-center">{name}</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">Year: {premiered}</small>
              <small className="text-muted">Rating: {rating.average}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>

  );
}

export default ShowTile;
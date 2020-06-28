import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function ShowDetailPage() {
  const [show, setShow] = useState();
  let {id} = useParams();

  useEffect(() => {
    if (!id){
      return;
    }
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(setShow)
      .catch(console.error);
  }, [id]);

  if (show) {
    return RenderShowDetailPage(show);
  }
  return null;
}

function RenderShowDetailPage(show){
  let {id, name, image, network, status, rating, schedule, summary, premiered} = show;



  return (
      <div className="container">
        <div className="card">
          <div className="container-fluid">
            <div className="wrapper row" datasrc={id}>
              <div className="preview col-md-6">
                <img className="img-fluid" src={image.original}/>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{name}</h3>
                <p>Premiered: {premiered}</p>
                <p className="product-description">{sanitizeSummary(summary)}</p>
                <p className="review-no">Rating: {rating.average}</p>
                <p>Status: {status}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function sanitizeSummary(summary) {
  if (summary == null) return '';
  return summary.replace(/(<([^>]+)>)/ig, "");
}


export default ShowDetailPage;
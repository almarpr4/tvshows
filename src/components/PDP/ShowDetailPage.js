import React from "react";
import {useParams} from "react-router-dom";
import Fetch from "../../network/Fetch";
import 'bootstrap/dist/css/bootstrap.css';

function ShowDetailPage() {
  let {id} = useParams();
  return (<Fetch uri={`http://api.tvmaze.com/shows/${id}`}
         renderSuccess={RenderShowDetailPage} />);

}

function RenderShowDetailPage({data: show}){
  let {id, name, image, status, rating, summary, premiered} = show;

  return (
      <div className="container">
        <div className="card">
          <div className="container-fluid">
            <div className="wrapper row" datasrc={id}>
              <div className="preview col-md-6">
                <img className="img-fluid" src={image.original} alt={id} />
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
import React from "react";

function ShowDetailInfo({ premiered, name, summary, rating, status }) {
  return (<>
    <h3 className="product-title">{name}</h3>
    <p>Premiered: {premiered}</p>
    <p className="product-description">{sanitizeSummary(summary)}</p>
    <p className="review-no">Rating: {rating.average}</p>
    <p>Status: {status}</p>
  </>);
}

function sanitizeSummary(summary) {
  if (summary == null) return '';
  return summary.replace(/(<([^>]+)>)/ig, "");
}


export default ShowDetailInfo;
import React from "react";
import {useParams} from "react-router-dom";

function ShowDetailPage() {
  let {id} = useParams();

  return (
    <div>
      <h3>Show ID: {id}</h3>
    </div>
  );
}

export default ShowDetailPage;
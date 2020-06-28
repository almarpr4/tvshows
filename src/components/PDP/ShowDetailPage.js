import React from "react";
import { useParams } from "react-router-dom";
import Fetch from "../../network/Fetch";
import 'bootstrap/dist/css/bootstrap.css';
import ShowDetailMainImage from "./ShowDetailMainImage";
import ShowDetailInfo from "./ShowDetailInfo";

function ShowDetailPage() {
  let { id } = useParams();
  return (<Fetch uri={`http://api.tvmaze.com/shows/${id}`}
    renderSuccess={RenderShowDetailPage} />);

}

function RenderShowDetailPage({ data: show }) {
  return (
    <div className="container">
      <div className="card">
        <div className="container-fluid">
          <div className="wrapper row" datasrc={show.id}>
            <div className="preview col-md-6">
              <ShowDetailMainImage {...show} />
            </div>
            <div className="details col-md-6">
              <ShowDetailInfo {...show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ShowDetailPage;
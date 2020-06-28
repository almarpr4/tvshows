import React from "react";
import {useParams} from "react-router-dom";
import oneData from "../../showDetail.json"
import 'bootstrap/dist/css/bootstrap.css';

function ShowDetailPage() {
  let {id} = useParams();
  let {name, image, network, status, rating, schedule, summary, premiered} = oneData;


  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
        </div>
      </section>
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
                <p className="product-description">{summary.replace(/(<([^>]+)>)/ig, "")}</p>
                <p className="review-no">Rating: {rating.average}</p>
                <p>Status: {status}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowDetailPage;

/*
  <div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gridGap: '2em',
          marginBottom: '1em',
        }}
      >
        <img
          src={image.original}
          alt={`${name}`}
          css={{width: '100%', maxWidth: '14rem'}}
        />
        <div>
          <div css={{display: 'flex', position: 'relative'}}>
            <div css={{flex: 1, justifyContent: 'space-between'}}>
              <h1>{name}</h1>
              <div>
                <i>{network.name}</i>
                <span css={{marginRight: 6, marginLeft: 6}}>|</span>
                <i>{network.country.name}</i>
              </div>
            </div>
            <div
              css={{
                right: 0,
                color: 'grey',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                minHeight: 100,
              }}
            >
              { status }
            </div>
          </div>
          <div css={{marginTop: 10, minHeight: 46}}>
            {rating.average ?  rating.average : null}
            {schedule.time} {schedule.days}
          </div>
          <br />
          <p css={{whiteSpace: 'break-spaces', display: 'block'}}>
            {summary}
          </p>
        </div>
      </div>
    </div>
 */
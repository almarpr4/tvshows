import React from "react";

function ShowListingPage({ shows }) {
    return (
    <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the
              creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" data-src=""
                   src="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" alt="Card image cap" />
                <div className="card-body">
                  <div className="justify-content-center align-items-center">gggggggggfffgggggggggggggggggggg</div>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Year: 2016</small>
                    <small className="text-muted">Rating: 6.34</small>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" data-src=""
                   src="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" alt="Card image cap" />
              <div className="card-body">
                <div className="justify-content-center align-items-center">ggggggfffffgggggggggg</div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Year: 2016</small>
                  <small className="text-muted">Rating: 6.34</small>
                </div>
              </div>
            </div>
          </div>  <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src=""
                 src="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="justify-content-center align-items-center">ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Year: 2016</small>
                <small className="text-muted">Rating: 6.34</small>
              </div>
            </div>
          </div>
        </div>  <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src=""
                 src="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="justify-content-center align-items-center">ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Year: 2016</small>
                <small className="text-muted">Rating: 6.34</small>
              </div>
            </div>
          </div>
        </div>  <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src=""
                 src="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="justify-content-center align-items-center">gggggggffg</div>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Year: 2016</small>
                <small className="text-muted">Rating: 6.34</small>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
      </>
    );
}

export default ShowListingPage;
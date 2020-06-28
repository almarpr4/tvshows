import React from "react";

function HeaderComponent(){
  return (<section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">Show catalog</h1>
      <input
        className="text-center"
        type="text"
        placeholder="Search"
      />
    </div>
  </section>)
}

export default HeaderComponent;
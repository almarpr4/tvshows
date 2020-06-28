import React from "react";
import ShowTile from "./ShowTile";
import Fetch from "../../network/Fetch";

function ShowListingPage({ text = 'girls' }) {
    return (<Fetch uri={`https://api.tvmaze.com/search/shows?q=${text}`}
        renderSuccess={RenderShowListingPage}
    />);
}

function RenderShowListingPage({ data: shows }) {
    return (
        <div className="container">
            <div className="row">
                {shows.map((show, i) => (
                    <ShowTile key={i} {...show.show} />
                ))}
            </div>
        </div>
    );
}


export default ShowListingPage;



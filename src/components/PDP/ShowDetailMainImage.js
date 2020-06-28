import React from "react";

function ShowDetailMainImage({ image, id }) {
    return (<img className="img-fluid" src={image.original} alt={id} />);
}

export default ShowDetailMainImage;
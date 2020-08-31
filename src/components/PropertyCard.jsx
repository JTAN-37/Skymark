import React from "react";

function PropertyCard(props) {
    return (
        <div className="col-lg-4">
            <img className="property" src={"/./../../public/images/" + props.image}/>
            <p>{props.title}</p>
        </div>
    );
}

export default PropertyCard;
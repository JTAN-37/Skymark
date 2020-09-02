import React from "react";
import { Link } from 'react-router-dom';

function PropertyCard(props) {
    return (
            <div className="col-lg-6">
                <Link to={"/properties/" + props.name}>
                    <img alt="" className="property" src={props.image}/>
                </Link>
                <p className="propertyTitle">{props.title}</p>
            </div>
    )
}

export default PropertyCard;
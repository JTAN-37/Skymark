import React from "react";
import propertyList from "./../propertyList";
import PropertyCard from "./PropertyCard";

function Properties() {

    function makePropertyCard(land) {
        return (
            <PropertyCard
                key= {land.id}
                title= {land.title}
                image= {land.image}
            />
        );
    }

    return (
        <div className="container">
            <div className="row">
                {propertyList.map(makePropertyCard)};
            </div>
        </div>
    )
}

export default Properties;
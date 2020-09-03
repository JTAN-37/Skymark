import React from "react";
import propertyList from "./../propertyList";
import PropertyCard from "./PropertyCard";

function Properties() {

    function makePropertyCard(land) {
        return (
                <PropertyCard
                    key= {land.id}
                    name= {land.name}
                    title= {land.title}
                    image= {process.env.PUBLIC_URL + '/images/' + land.image}
                />
        )
    }

    return (
        <div className="container propertiesStyle">
            <h2>Properties</h2>
            <div className="row">
                {propertyList.map(makePropertyCard)};
            </div>
        </div>
    )
}

export default Properties;
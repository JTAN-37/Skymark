import React from "react";
import Header from "./Header";
import propertyList from "./../propertyList";

function PropertyPage( {match} ) {

    function matchProperty(land) {
        return land.name === match.params.id;
    }

    var arr = propertyList.filter(matchProperty);


    return (
        <div className="propertiesStyle">
            <div className="row">
                <div class="col-lg-6">
                    <img className="propertyPageImg" src= {process.env.PUBLIC_URL + '/images/' + arr[0].image}/>
                </div>

                <div class="col-lg-6">
                    <div class="descCard">
                        <h1> {arr[0].title} </h1>
                        <hr/>
                        <p class="propertyPageText"> {arr[0].desc} </p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default PropertyPage;
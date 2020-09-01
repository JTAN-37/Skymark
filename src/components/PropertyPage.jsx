import React from "react";
import Header from "./Header";
import propertyList from "./../propertyList";

function PropertyPage( {match} ) {

    function matchProperty(land) {
        return land.name === match.params.id;
    }

    var arr = propertyList.filter(matchProperty);


    return (
        <div>
            <div class="row">
                <div class="col-lg-6">
                    <img style={ {height: "500px", width: "650px"}} src= {process.env.PUBLIC_URL + '/images/' + arr[0].image}/>
                </div>

                <div class="col-lg-6">
                    <div class="descCard">
                        <h1> {arr[0].title} </h1>
                        <hr/>
                        <p style={ {textAlign: "right", marginLeft: "10px"} }> Words </p>
                        <p>Acres: Usage:</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default PropertyPage;
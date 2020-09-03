import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

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
                    <img alt="" className="propertyPageImg" src= {process.env.PUBLIC_URL + '/images/' + arr[0].image}/>
                </div>

                <div class="col-lg-6">
                    <div class="descCard">
                        <h1> {arr[0].title} </h1>
                        <hr/>
                        <p class="propertyPageText" dangerouslySetInnerHTML={{ __html: arr[0].desc}}></p>
                        <hr/>
                        <Map center={arr[0].coordinates} zoom={15}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            
                            <Marker key={arr[0].id} position={arr[0].coordinates}/>
                        </Map>
                    </div>

                </div> 
            </div>
        </div>
    );
}

export default PropertyPage;
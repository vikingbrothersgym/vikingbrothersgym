import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet"
import "./MapView.css"
import 'leaflet/dist/leaflet.css';
import IconMap from "./IconMap";

const MapView = () => {
    
    return (
        <div>
            <MapContainer center={{lat: '41.64437', lng: '-0.87384'}} 
                          zoom={17} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
                />

                <Marker position={{lat: '41.64437', lng: '-0.87384'}} 
                        icon={IconMap}
                />
            </MapContainer>
        </div>
    )
}

export default MapView
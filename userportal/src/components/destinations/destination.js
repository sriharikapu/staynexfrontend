import React from "react";
import "./destination.css";
import { DestCard } from "./destCard/destCard";

export function Destination() {
    return (
        <div className="destinationContainer">
        <div><h4 className="mb-3">Stay at our finest destinations</h4></div>
            <div><h5 className="mb-4">Discover Switzerland’s best ski resorts and plan the perfect holiday</h5></div>
        <div className="card-group">
           <DestCard/>
        </div>
        </div>
    );
}

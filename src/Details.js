import React from "react";
import "./Details.css";

export default function Details(){
    return(
        <div>
        <h1>Nairobi,
            <small>Kenya</small>
            </h1>

                <p className="info">Mostly Rainy</p>
                <div className="degree">20°
                <div className="icon">🌧</div>
                </div>
                <p className="dayDetails">Saturday, 10 June | 17:24pm</p>
        </div>
    );
}
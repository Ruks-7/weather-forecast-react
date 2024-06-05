import React from "react";
import Forecast from "./Forecast.js";
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
                <div className= "forecastDays">
                <Forecast day="Tue" temp="20°/25°"/>
                <Forecast day="Wed" temp="18°/23°"/>
                <Forecast day="Thur" temp="21°/25°"/>
                <Forecast day="Fri" temp="19°/24°"/>
                </div>
        </div>
    );
}
import React from "react";
import Forecast from "./Forecast.js";
import Info from "./Info.js";
import "./Details.css";

export default function Details(){
    return(
        <div>
        <h1>Nairobi,
            <small>Kenya</small>
            </h1>

                <p>Mostly Rainy</p>
                    <div className="degree">20°
                    <div className="icon">🌧</div>
                    </div>

                    <p className="dayDetails">Saturday, 10 June | 17:24pm</p>

                    <div className="today">
                    <Info icon="💧" measurement="60%" component="Humidity" />
                    <Info icon="💨" measurement="2km/h" component="WindSpeed" />
                    <Info icon="☔" measurement="30%" component="Precipitation" />
                    </div>


                <div className= "forecastDays">
                <Forecast day="Tue" temp="20°/25°"/>
                <Forecast day="Wed" temp="18°/23°"/>
                <Forecast day="Thur" temp="21°/25°"/>
                <Forecast day="Fri" temp="19°/24°"/>
                </div>
        </div>
    );
}
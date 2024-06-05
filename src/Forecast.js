import React from "react";
import "./Forecast.css";

export default function Forecast(props){
    return(
        <div className="forecast">
            {props.day}
            <br />
            🌦
            <br />
            {props.temp}
        </div>
    );
}
import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDays(props){


  let info={
    min_temp: Math.round(props.data.temp.min),
    max_temp: Math.round(props.data.temp.max),
    time: new Date((props.data.dt)*1000),
    icon: props.data.weather[0].icon,
  };

  let date=(info.time).getDay();
  let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day=days[date];


  return(
    <div className="forecast">
                {day}
                <br />
                <WeatherIcons code={info.icon} size={20}/>
                <br />
                {info.max_temp}° | <span className="min_temp">{info.min_temp}°</span>
            </div>
  );
}
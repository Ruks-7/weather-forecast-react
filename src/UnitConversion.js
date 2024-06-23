import React, {useState} from "react";
import WeatherIcons from "./WeatherIcons.js";

export default function UnitConversion(props){
  let[unit, setUnit]=useState("Celsius");

  function showFahrenheit(event){
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("Celsius");
  }



  if(unit==="Celsius"){
  return(
    <div className="weatherDetails">
      <div className="degree">{props.temperature}</div>
									<span className="unit">°C | {""} 
                    <a href="/" onClick={showFahrenheit}>°F</a>
                    </span>
									<div className="icon">
										<WeatherIcons  code={props.icon} /></div>
									
    </div>
  );
}
else{
  return(
    <div className="weatherDetails">
    <div className="degree">{Math.round((props.temperature*9/5)+32)}</div>
                <div className="unit"><a href="/"onClick={showCelsius}>°C {""}</a> | °F
                  </div>
                <div className="icon">
                  <WeatherIcons  code={props.icon} /></div>
                </div>
);
}
}
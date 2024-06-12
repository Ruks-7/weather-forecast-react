import React from "react";
import Forecast from "./Forecast.js";
import Info from "./Info.js";
import "./Details.css";

export default function Details(){
    return(
        <div>
            <div className="container">
        <h1>Nairobi,
            <small>Kenya</small>
            </h1>
            </div>
                <p className="weatherState">Mostly Rainy</p>
                    <div className="degree">20°
                    <div className="icon">🌧</div>
                    </div>

                    <p className="dayDetails">Wednesday, 6 June | 17:24pm</p>

                    <div className="today container">
                        <div className="row">
                            <div className="col"> 
                            <Info icon="💧" measurement="60%" component="Humidity" />
                            </div>
                            <div className="col"> 
                            <Info icon="💨" measurement="2km/h" component="WindSpeed" />
                            </div>
                            <div className="col"> 
                            <Info icon="☔" measurement="30%" component="Precipitation" />
                            </div>
                    </div>
                    </div>


                <div className= "container">
                    <div className="row w-50%">

                    <div className="col-sm">
                        <Forecast day="Tue"  temp="20°/25°"/>
                        </div>
                    
                    <div className="col-sm">
                    <Forecast day="Wed"  temp="18°/23°"/>
                        </div>

                    <div className="col-sm">
                        <Forecast day="Thur" temp="21°/25°"/>
                        </div>

                    <div className="col-sm">
                        <Forecast day="Fri"  temp="19°/24°"/>
                        </div>

                    </div>
                </div>
        </div>
    );
}
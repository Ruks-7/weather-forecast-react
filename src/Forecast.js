import React, {useEffect, useState} from "react";
import ForecastDays from "./ForecastDays.js";
import axios from "axios";

export default function Forecast(props){
    let[loaded, setLoaded]=useState(false);
    let[forecast, setForecast]=useState(null);


    function handleCall(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(function(){
        setLoaded(false);
    }, [props.coordinates]);

    if(loaded){
        
        return(
            <div className="container">
                <div className="row">
                {forecast.map(function(daily, index){  //This is  a loop to render the forecast days
                    if(index < 4){
                    return(
                        <div className="col" key={index}>
                            <ForecastDays data={daily}/>
                        </div>
                    );
                }
                return null;
                })}
                </div>
            </div>
        );
    }

    else{
    let longitude= props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiKey="a33b693cfbefd271b0ed075f9a8f65f0";
    let api_Url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(api_Url).then(handleCall);
    return null;
    }
    
    
}
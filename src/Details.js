import React, {useState} from "react";
import axios from "axios";
import {Circles} from "react-loader-spinner";
import Forecast from "./Forecast.js";
import Info from "./Info.js";
import "./Details.css";

function Details(props){
	let[load, setLoad]=useState(false);
	let [info, setInfo]=useState({});

	function handleResponse(response){
		console.log(response.data);
		setInfo({
			temperature: Math.round(response.data.main.temp),
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			country: response.data.sys.country,
		});

		setLoad(true);
	}

	

	if(load){
		return(
			<div>
					<div className="container">
			<h1>Nairobi,
					<small className="fs-6">{info.country}</small>
					</h1>
					</div>
							<p className="weatherState"><em>{info.description}</em></p>
									<div className="degree">{info.temperature}°
									<div className="icon">🌧</div>
									</div>

									<p className="dayDetails">Wednesday, 6 June | 17:24pm</p>

									<div className="today container">
											<div className="row">
													<div className="col"> 
													<Info icon="💧" measurement={info.humidity+"%"} component="Humidity" />
													</div>
													<div className="col"> 
													<Info icon="💨" measurement={info.windSpeed+"km/h"} component="WindSpeed" />,
													</div>
													<div className="col"> 
													<Info icon="☔" measurement={info.precipitation+"%"} component="Precipitation" />
													</div>
									</div>
									</div>


							<div className= "container">
									<div className="row ">

									<div className="col-3">
											<Forecast day="Tue"  temp="20°/25°"/>
											</div>
									
									<div className="col-3">
									<Forecast day="Wed"  temp="18°/23°"/>
											</div>

									<div className="col-3">
											<Forecast day="Thur" temp="21°/25°"/>
											</div>

									<div className="col-3">
											<Forecast day="Fri"  temp="19°/24°"/>
											</div>

									</div>
							</div>
			</div>
	);
	}

	else{
	const apiKey="a33b693cfbefd271b0ed075f9a8f65f0";
	const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

	return ( 
		<div className="loader">
		<Circles
		height="60"
		width="80"
		color="#50a9f1"
		ariaLabel="circles-loading"
		wrapperStyle={{}}
		wrapperClass=""
		visible={true}
		/>
		</div>
	)
}
}

export default Details;
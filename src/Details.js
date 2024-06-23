import React, {useState} from "react";
import axios from "axios";
import {Circles} from "react-loader-spinner";
import Forecast from "./Forecast.js";
import NewDate from "./NewDate.js" ;
import Info from "./Info.js";
import UnitConversion from "./UnitConversion.js";
import "./Details.css";

function Details(props){
	let [city, setCity]=useState(props.city);
	let[load, setLoad]=useState(false);
	let [info, setInfo]=useState({});

	function handleResponse(response){
		console.log(response.data);
		setInfo({
			newCity: response.data.name,
			temperature: Math.round(response.data.main.temp),
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
			description: response.data.weather[0].description,
			feels_like: Math.round(response.data.main.feels_like),
			icon: response.data.weather[0].icon,
			country: response.data.sys.country,
			date: new Date(response.data.dt*1000),
		});

		setLoad(true);
	}

	function search(){
		const apiKey="a33b693cfbefd271b0ed075f9a8f65f0";
			const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);
	}

	function handleQuery(event){
		event.preventDefault();
		setCity(event.target.value);
}

function handleSearch(event){
		event.preventDefault();
		search();
}



let form = <div>
<form onSubmit={handleSearch}>
		<input className="searchBar" type="search" placeholder="Enter a place..."   onChange={handleQuery} />
		<input className="submit" type="submit" value="Search"/>
</form>
</div>

	if(load){
		return(
			<div>
				{form}
					<div className="container">
			<h1>{info.newCity}, 
					<small className="fs-6">{info.country}</small>
					</h1>
					</div>
							<p className="weatherState"><em>{info.description}</em></p>
									<UnitConversion temperature={info.temperature} icon={info.icon}/>

									<p className="dayDetails">
										<NewDate date={info.date}/>
									</p>

									<div className="today container">
											<div className="row">
													<div className="col"> 
													<Info icon="💧" measurement={info.humidity+"%"} component="Humidity" />
													</div>
													<div className="col"> 
													<Info icon="💨" measurement={info.windSpeed+"km/h"} component="WindSpeed" />
													</div>
													<div className="col"> 
													<Info icon="🌡" measurement={info.feels_like+"°C"} component="Feels_like" />
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
		search();
	return ( 
		<div>
			{form}
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
		</div>
	)
}
}

export default Details;
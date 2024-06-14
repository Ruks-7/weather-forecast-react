import React from "react";

export default function NewDate(props) {
  console.log(props.date);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day=days[props.date.getDay()];
  let date=props.date.getDate();

  let hour=props.date.getHours();
  let minutes=props.date.getMinutes();
  if (minutes<10){
    minutes=`0${minutes}`;
  }
  
  if(hour<12){
    minutes=`${minutes} AM`;
  }
  else{
    minutes=`${minutes} PM`
  }
  let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month=months[props.date.getMonth()];
return `${day}, ${date} ${month} | ${hour}:${minutes}`
}
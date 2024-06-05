import React from "react";

export default function Info(props){
    return(
        <div className="info">
            {props.icon}
        <br />
        {props.measurement}
        <br />
        {props.component}
        </div>
    );
}
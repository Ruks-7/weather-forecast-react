import React from "react";
import "./Search.css";

export default function Search(){
    return (
    <div>
        <form>
            <input className="searchBar" type="search" placeholder="Enter a place..."></input>
            <input className="submit" type="submit" value="Search"></input>
        </form>
    </div>
    );
}
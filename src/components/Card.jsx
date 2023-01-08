import React from "react";
import "../styles.css";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.img}></img>
            <div className="card--content">
            <h3>📍{props.country}</h3>
            <a href={props.address}>View on Google Maps</a>
            <h1>{props.location}</h1>
            <strong>{props.duration}</strong>
            <br></br>
            <br></br>
            <p>{props.content}</p>
            </div>
        </div>
    )
}
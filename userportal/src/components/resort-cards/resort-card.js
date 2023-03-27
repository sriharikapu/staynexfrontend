import React from "react";
import Rectangle from "./../../assets/Images/Rectangle.png";
import "./resort-card.css";

export function ResortCard() {
    let card="card";
    let container="container";
  return (
    <div className={card}>
    <img src={Rectangle} alt="Avatar"/>
    <div className={container}>
      <h4><b>John Doe</b></h4> 
      <p>Architect & Engineer</p> 
    </div>
  </div>
  );
}
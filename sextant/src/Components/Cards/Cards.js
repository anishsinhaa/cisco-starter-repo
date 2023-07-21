import React from "react";
import Card from "../Card/Card";
import "./Cards.css"

const Cards = () => {
  return (
    <div className="cards">
      <h2>HEADING</h2>
      <div className="cards-cont"><Card />
      <Card />
      <Card />
      <Card /></div>
      
    </div>
  );
};

export default Cards;

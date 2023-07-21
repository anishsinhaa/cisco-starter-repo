import { render } from "@testing-library/react";
import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = (props) => {
  render();
  return (
    <div className="cards">
      <h2>HEADING</h2>
      <div className="cards-cont">  
        <Card />
      </div>
    </div>
  );
};

export default Cards;

import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div >
        <div className="header"><Banner /></div>
        <div className="mainBody"><Cards /></div>
      
    </div>
  );
};

export default MainBody;

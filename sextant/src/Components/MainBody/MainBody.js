import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import GetIP from "../GetIP/GetIP";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div >
        <div className="header"><Banner /></div>
        <div className="mainBody"><Card heading="IP ADDRESS"><GetIP type="v4"/><GetIP type="v6"/></Card></div>
      
    </div>
  );
};

export default MainBody;

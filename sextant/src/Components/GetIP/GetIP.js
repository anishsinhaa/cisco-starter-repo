import React, { useEffect, useState } from "react";
import "./GetIP.css";

const GetIP = (props) => {
  const [iP, setiP] = useState("");
  const type = props.type;
  const getData = () => {
    if ((type == "v4")) {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setiP(data));
    } else {
      fetch("https://api64.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setiP(data));
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div className="ip"><h3 className="ipType">{type=="v4"?"IPV4":"IPV6"}</h3><div className="ipaddress">{iP.ip}</div></div>;
};

export default GetIP;

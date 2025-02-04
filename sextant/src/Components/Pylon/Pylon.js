import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "./Pylon.css"

const Pylon = () => {
  const client = new W3CWebSocket("ws://localhost:55455");
  const [latency, setLatency] = useState(null);
  
  const getLatency = () => {
    client.onmessage = (message) => {
      setLatency(new Date().getTime() - message.data);
    };
  };
  useEffect(() => {
    getLatency();
  }, []);
  return (
    <div className="latency">
      <span className="Pylon">{latency}</span>
    </div>
  );
};

export default Pylon;


import { useEffect, useState } from "react";
import socket from "./services/socket";
import Chart from "./components/Chart";
import TimeframeSelector from "./components/TimeframeSelector";
import "./App.css";
import AutoRefreshPage from "./components/utils/AutoRefresh";

export default function App() {
  const [interval, setInterval] = useState("3m");

  return (
    <div className="app">
      <AutoRefreshPage />
      <TimeframeSelector active={interval} onChange={setInterval} />
      <Chart socket={socket} interval={interval} />
    </div>
  );
}

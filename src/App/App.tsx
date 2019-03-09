import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { chartData } from "./chartData";


const App: React.FunctionComponent = () => {
  const chart = useRef(null);
  return (
    <div>
      <h2 style={{ 'textAlign': 'center' }}>Big O (c = 2)</h2>
      <Line ref={chart} data={chartData} />
    </div>
  );
}

export default App;

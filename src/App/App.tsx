import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { chartData } from "./chartData";


const App = () => {
  const chart = useRef(null);

  useEffect(() => {
    if (chart) {
      // const { datasets } = chart.current.chartInstance.data;
      // console.log(datasets[0].data);
    }

  }, [chart])

  return (
    <div>
      <h2 style={{ 'textAlign': 'center' }}>Big O (c = 2)</h2>
      <Line ref={chart} data={chartData} />
    </div>
  );
}

export default App;

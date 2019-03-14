import React, { useRef } from 'react'
import { chartData, options } from './BigOChart.data';
import { Line } from "react-chartjs-2";

const BigOChart: React.FunctionComponent = () => {
  const chart = useRef(null);

  return (
    <div>
      <Line ref={chart} data={chartData} options={options} />
    </div>
  )
}

export default BigOChart
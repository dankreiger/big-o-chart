import React, { useRef } from 'react'
import { chartData } from './BigOChart.data';
import { Line } from "react-chartjs-2";
import { BigOChartHeadline } from './Big0Chart.styles';

const BigOChart: React.FunctionComponent = () => {
  const chart = useRef(null);

  return (
    <div>
      <BigOChartHeadline>Big O (c = 2)</BigOChartHeadline>
      <Line ref={chart} data={chartData} />
    </div>
  )
}

export default BigOChart
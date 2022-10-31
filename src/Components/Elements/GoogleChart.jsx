import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Private Sale", 11],
  ["Initial Liquidity (will be lock)", 2],
  ["Protocol Mining Rewards", 2],
  ["Presale", 2],
  ["Team & Advisors", 7], 
  ["Airdrop", 7], 
  ["Marketing", 7], 
  ["CEX & DEX Listing", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.6,
  fill:"orange",
  backgroundColor:'transparent',
  is3D: false,
};
const GoogleChart = () => {
  return (
    <>
     <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </>
  )
}

export default GoogleChart

import React from 'react';
import './PaymentBarChart.css'

const PaymentBarChart = ({chartLabel, value, color}) => {
  return (
    <div className="bar-chart">
    <div
      className="bar"
      style={{ height: `${value * 10}px`, backgroundColor: color }}
    >
      <span className="value">{value}</span>
    </div>
    <div
      style={{
        borderBottom: "1px solid black",
        position: "absolute",
        width: "100px",
        bottom: "87px",
        right: "-40%",
      }}
    ></div>
    <p className="bar-chart-label">{chartLabel}</p>
  </div>
  )
}

export default PaymentBarChart
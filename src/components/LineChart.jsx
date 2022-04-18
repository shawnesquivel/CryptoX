import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const coinTimestampHour = [];
  const len = coinHistory?.data?.history?.length;

  for (let i = 0; i < len; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = 0; i < len; i++) {
    coinTimestampHour.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleTimeString()
    );
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleTimeString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  const data = {
    // X-Axis
    labels: coinTimestamp,
    // Y-Axis
    datasets: [
      {
        label: `Price in USD ($)`,
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = { scales: { y: { ticks: { beginAtZero: true } } } };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName} 24h Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            {coinName} Price: ${currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};
export default LineChart;

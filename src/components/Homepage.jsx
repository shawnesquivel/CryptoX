import { Cryptocurrencies } from "../components";
import { News } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import React from "react";

import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading data...";

  return (
    <>
      <Title level={2} className="heading">
        Realtime Global Crypto Data
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hr Volume"
            value={millify(globalStats.total24hVolume, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;

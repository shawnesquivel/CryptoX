import react from "react";
import { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Avatar } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  const [searchTerm, setSearchTerm] = useState("");
  // Launches at start
  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins)
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  // if (cryptos) console.log(cryptos);
  if (isFetching) return "Loading...";
  return (
    <>
      {/* if simplified view isn't on, return the last value */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrencies"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {[
          cryptos?.map((coin) => (
            <Col x={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
              <Link key={coin.uuid} to={`/crypto/${coin.uuid}`}>
                <Card
                  title={`${coin.rank}. ${coin.name} (${coin.symbol})`}
                  extra={<img className="crypto-image" src={coin.iconUrl} />}
                  hoverable
                >
                  <p>
                    Price: $
                    {millify(coin.price, {
                      precision: 2,
                    })}
                  </p>
                  <p>MarketCap: ${millify(coin.marketCap)}</p>
                  <p>Daily Change: {millify(coin.change)}%</p>
                </Card>
              </Link>
            </Col>
          )),
        ]}
      </Row>
    </>
  );
};

export default Cryptocurrencies;

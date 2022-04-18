import React, { useEffect } from "react";
import { useGetExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data } = useGetExchangesQuery();
  return <div>Exchanges is currently unavailable.</div>;
};

export default Exchanges;

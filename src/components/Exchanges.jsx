import React, { useEffect } from "react";
import { useGetExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data } = useGetExchangesQuery();
  useEffect(() => {
    console.log(data);
  });
  return <div>Exchanges is unavailable until you renew your premium plan.</div>;
};

export default Exchanges;

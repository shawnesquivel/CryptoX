// RTK Query Methods
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// V1
const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "ed7fee77ffmshd2a488d60fd6eabp14f59ejsnfee149fb8e43",
};

// V2
// const cryptoApiHeaders = {
//   "x-access-token":
//     "coinranking4f21d94a2190749d239af9bd8717c6bf73db426d6aa93ec5",
//   "Access-Control-Allow-Origin": true,
// };

// The site that gives us our data, requests are made by adding /requestNum to the end.
const baseUrl = "https://coinranking1.p.rapidapi.com/";
// V2 Url
// const baseUrl = "https://api.coinranking.com/v2/";

// Formatted URL + Headers to an object for API request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Define the single API Slice Object using Create API
export const cryptoApi = createApi({
  // Cache reducer expects to be added at state."reducerPath" - default: state.api
  reducerPath: "cryptoApi",
  // All our requests will have URLs starting with the baseURL
  baseQuery: fetchBaseQuery({ baseUrl }),
  // "Endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // "builder" contains builder.query() and builder.mutation() endpoints
    // "getCryptos" (endpoint) is a "query" operation that returns data
    getCryptos: builder.query({
      // The URL for the requests
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

// Redux autogenerates a hook based on the query function yo made (use"GetData"Query) that lets you retrieve data from the API slice you made.
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;

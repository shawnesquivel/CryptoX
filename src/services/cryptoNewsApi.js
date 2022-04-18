// RTK Query Methods
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  // SDK is the house
  "X-BingApis-SDK": "true",
  // API is the telephone lines
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "ed7fee77ffmshd2a488d60fd6eabp14f59ejsnfee149fb8e43",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/";

// Formatted URL + Headers to an object for API request
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// Define the single API Slice Object using Create API
export const cryptoNewsApi = createApi({
  // Cache reducer expects to be added at state."reducerPath" - default: state.api -
  reducerPath: "cryptoNewsApi",
  // All our requests will have URLs starting with the baseURL
  baseQuery: fetchBaseQuery({ baseUrl }),
  // "Endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // "builder" contains builder.query() and builder.mutation() endpoints
    // "getCryptoNews" (endpoint) is a "query" operation that returns data
    getCryptoNews: builder.query({
      // The URL for the requests
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

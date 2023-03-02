import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const assetsApi = createApi({
  reducerPath: "assets",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),

  endpoints(builder) {
    return {
      fetchAssets: builder.query({
        query: () => {
          return {
            url: "/assets",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAssetsQuery } = assetsApi;

export { assetsApi };
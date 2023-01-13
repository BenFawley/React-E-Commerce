import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://asos2.p.rapidapi.com/" }),
  endpoints: (builder) => ({
    getCategoryProducts: builder.query({
      query: (id) => ({
        url: `products/v2/list?limit=48&categoryId=${id}&offset=0&store=COM&lang=en-GB&sizeSchema=UK&currency=GBP&sort=freshness&country=GB`,
        headers: {
          "X-RapidAPI-Key":
            "951ae0ae03msh15b713d7db634b9p1a7e26jsne6ccf99148eb",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetCategoryProductsQuery } = productsApi;

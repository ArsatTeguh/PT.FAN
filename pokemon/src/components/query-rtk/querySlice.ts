import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Detail, pokemon } from "../type/type";

export const BooksQuery = createApi({
  reducerPath: "BooksQuery",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  tagTypes: ["Refetch"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<pokemon, void>({
      query: () => ({
        url: "?offset=20&limit=500",
        method: "GET",
      }),
      providesTags: ["Refetch"],
    }),

    getOneBook: builder.query<Detail, number | string>({
      query: (id) => ({
        url: `${id}`,
        method: "GET",
      }),
      providesTags: ["Refetch"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetOneBookQuery } = BooksQuery;

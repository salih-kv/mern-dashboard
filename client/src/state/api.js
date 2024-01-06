import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi", // ~ like, slice name
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  tagTypes: ["User"], // identifier
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = api;

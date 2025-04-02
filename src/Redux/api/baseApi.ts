import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://e-library-backend-l8rxkdd1p-emtiaz-ahmed-13s-projects.vercel.app/",

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["User", "Orders"],
  endpoints: () => ({}),
});

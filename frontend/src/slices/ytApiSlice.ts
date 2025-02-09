import { NEO_SLAVIC_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import { SearchListResponse } from "../types/Yt";

export const ytApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNeoSlavic: builder.query<SearchListResponse, number>({
      query: (qty) => ({
        url: `${NEO_SLAVIC_URL}/${qty}`,
       
      }),
      providesTags: ["Playlist"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetNeoSlavicQuery } = ytApiSlice;

import { NEO_SLAVIC_URL } from "../constants";
import { apiSlice } from "./apiSlice";

import { YouTubePlaylistItem } from "../types/Yt";

export const ytApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNeoSlavic: builder.query<YouTubePlaylistItem, void>({
      query: () => ({
        url: NEO_SLAVIC_URL,
      }),
      providesTags: ["Playlist"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetNeoSlavicQuery } = ytApiSlice;

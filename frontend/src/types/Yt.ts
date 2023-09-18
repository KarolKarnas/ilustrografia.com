
// export type YoutubeItem = {
//   kind: string;
//   etag: string;
//   id: string;
//   snippet: {
//     publishedAt: string;
//     channelId: string;
//     title: string;
//     description: string;
//     thumbnails: {
//       default: {
//         url: string;
//         width: number;
//         height: number;
//       };
//       medium: {
//         url: string;
//         width: number;
//         height: number;
//       };
//       high: {
//         url: string;
//         width: number;
//         height: number;
//       };
//       standard: {
//         url: string;
//         width: number;
//         height: number;
//       };
//       maxres: {
//         url: string;
//         width: number;
//         height: number;
//       };
//     };
//     channelTitle: string;
//     playlistId: string;
//     position: number;
//     resourceId: {
//       kind: string;
//       videoId: string;
//     };
//     videoOwnerChannelTitle?: string;
//     videoOwnerChannelId?: string;
//   };
// }


// export type YouTubePlaylistItem = {
//   kind: string;
//   etag: string;
//   nextPageToken: string;
//   items: YoutubeItem[];
//   pageInfo: {
//     totalResults: number;
//     resultsPerPage: number;
//   };
// };


interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Video {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResult {
  kind: string;
  etag: string;
  id: Video;
  snippet: Snippet;
}

export interface SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: SearchResult[];
}

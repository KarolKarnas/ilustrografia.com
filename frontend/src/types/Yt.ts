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

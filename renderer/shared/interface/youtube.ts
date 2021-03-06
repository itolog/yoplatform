export interface YoutubeResponseItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface YoutubeResponse {
  nextPageToken: string;
  items: YoutubeResponseItem[];
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

export interface YoutubeVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: string;
  };
}

export interface YoutubeResponse {
  data: {
    nextPageToken: string;
    items: any[];
    pageInfo: {
      resultsPerPage: number;
      totalResults: number;
    };
  };
  error: {
    status: number;
    message: string;
  };
}

import { YoutubeResponse } from '../../shared/interface/youtube';

export interface YoutubeVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: string;
  };
}

export interface YoutubeState {
  searchResult: YoutubeResponse | null;
  playlist: {
    [id: string]: YoutubeVideo;
  } | null;
  error: string | null;
  ids: string[] | [];
}

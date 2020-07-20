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
  playlist: YoutubeVideo[] | [];
  error: string | null;
  ids: string[] | [];
}

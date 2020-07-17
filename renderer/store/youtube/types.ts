import { YoutubeItems } from '../../shared/interface/youtube';

export interface YoutubeVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: string;
  };
}

export interface YoutubeState {
  searchResult: YoutubeItems[] | [];
  playlist: {
    [id: string]: YoutubeVideo;
  } | null;
  error: string | null;
  ids: string[] | [];
}

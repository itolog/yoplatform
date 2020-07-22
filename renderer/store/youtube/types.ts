import { YoutubeResponse, YoutubeVideo } from '../../shared/interface/youtube';

export interface YoutubeState {
  searchResult: YoutubeResponse | null;
  isLoading: boolean;
  playlist: YoutubeVideo[] | [];
  error: string | null;
  ids: string[] | [];
}

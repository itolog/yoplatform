import { createSelector } from 'reselect';
import { AppState } from '../configureStore';
import {
  YoutubeResponseItem,
  YoutubeVideo,
} from '../../shared/interface/youtube';

export const YoutubeState = (state: AppState) => state.youtube;

export const getYoutubeSearchItems = createSelector(YoutubeState, (state) => {
  if (state.searchResult && state.searchResult.items) {
    const ytItems: YoutubeVideo[] = state.searchResult.items.map(
      (item: YoutubeResponseItem) => {
        return {
          id: item.id.videoId,
          snippet: {
            title: item.snippet.title,
            thumbnails: item.snippet.thumbnails.medium.url,
          },
        };
      },
    );
    return ytItems;
  }
  return [];
});

export const isLoading = createSelector(
  YoutubeState,
  (state) => state.isLoading,
);

export const getYoutubePlayList = createSelector(YoutubeState, (state) =>
  state.playlist.slice(1),
);

export const getYoutubeVideoIDS = createSelector(
  YoutubeState,
  (state) => state.ids,
);

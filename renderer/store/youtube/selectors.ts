import { createSelector } from 'reselect';
import { AppState } from '../configureStore';

export const YoutubeState = (state: AppState) => state.youtube;

export const getYoutubeSearchItems = createSelector(
  YoutubeState,
  (state) => state?.searchResult?.items ?? [],
);

export const getYoutubePlayList = createSelector(YoutubeState, (state) =>
  state.playlist.slice(1),
);

export const getYoutubeVideoIDS = createSelector(
  YoutubeState,
  (state) => state.ids,
);

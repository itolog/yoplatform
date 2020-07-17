import { createSelector } from 'reselect';
import { AppState } from '../configureStore';

export const YoutubeState = (state: AppState) => state.youtube;

export const getYoutubeVideoList = createSelector(
  YoutubeState,
  (state) => state.videos,
);

export const getYoutubeVideoIDS = createSelector(
  YoutubeState,
  (state) => state.ids,
);

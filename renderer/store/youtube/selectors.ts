import { createSelector } from 'reselect';
import { AppState } from '../configureStore';

export const YoutubeState = (state: AppState) => state.youtube;

export const getYoutubeSearchItems = createSelector(
  YoutubeState,
  (state) => state?.searchResult?.items ?? [],
);

// export const getYoutubeVideoList = createSelector(
//   YoutubeState,
//   (state) => state.videos,
// );

export const getYoutubeVideoIDS = createSelector(
  YoutubeState,
  (state) => state.ids,
);

import { createSelector } from 'reselect';
import { AppState } from '../configureStore';

export const YoutubeSearchModalState = (state: AppState) => state.ytSearchModal;

export const isYtSearchModalOpen = createSelector(
  YoutubeSearchModalState,
  (state) => state.isOpen,
);

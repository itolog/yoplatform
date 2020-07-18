import { ActionTypes, ActionTypeUnion } from './actions';
import { YoutubeState } from './types';

const initialState: YoutubeState = {
  searchResult: null,
  playlist: null,
  error: null,
  ids: [],
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion,
): YoutubeState {
  switch (action.type) {
    case ActionTypes.FETCH_YOUTUBE_VIDEO_SUCCESS: {
      return {
        ...state,
        searchResult: action.payload,
      };
    }
    case ActionTypes.FETCH_YOUTUBE_VIDEO_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ActionTypes.ADD_YOUTUBE_VIDEO_SUCCESS: {
      const videos = {
        [action.payload.id]: action.payload,
      };

      const ids = [...state.ids, action.payload.id];

      return {
        ...state,
        playlist: { ...state.playlist, ...videos },
        ids,
      };
    }
    case ActionTypes.ADD_YOUTUBE_VIDEO_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.REMOVE_YOUTUBE_SUCCESS: {
      const newVideosState = { ...state.playlist };
      delete newVideosState[action.payload];
      const ids = Object.keys(newVideosState);
      return {
        ...state,
        playlist: newVideosState,
        ids,
      };
    }
    default: {
      return state;
    }
  }
}

import { ActionTypes, ActionTypeUnion } from './actions';
import { YoutubeState } from './types';

const initialState: YoutubeState = {
  searchResult: null,
  playlist: [],
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
      const ids = [...state.ids, action.payload.id];

      return {
        ...state,
        playlist: [...state.playlist, action.payload],
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
      const playlist = state.playlist.filter(
        (item, index) => index !== action.payload,
      );
      const ids = playlist.map((item) => item.id);

      return {
        ...state,
        playlist,
        ids,
      };
    }
    default: {
      return state;
    }
  }
}

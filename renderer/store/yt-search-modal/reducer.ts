import { ActionTypes, ActionTypeUnion } from './actions';
import { YtModalSearchState } from './types';

const initialState: YtModalSearchState = {
  isOpen: false,
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion,
): YtModalSearchState {
  switch (action.type) {
    case ActionTypes.SET_YT_MODAL_OPEN: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case ActionTypes.SET_YT_MODAL_CLOSE: {
      return {
        ...state,
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
}

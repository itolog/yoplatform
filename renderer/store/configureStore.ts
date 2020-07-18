import { useMemo } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { ActionType, StateType } from 'typesafe-actions';
// YOUTUBE FLOW
import { ActionTypeUnion as YoutubeActionType } from './youtube/actions';
import { reducer as youtubeReducer } from './youtube/reducer';
import { epics as youtubeEpics } from './youtube/epics';

// YOUTUBE SEARCH MODAL FLOW
import { ActionTypeUnion as YoutubeSearchModalActionType } from './yt-search-modal/actions';
import { reducer as youtubeSearchModalReducer } from './yt-search-modal/reducer';
import { epics as youtubeSearchModalEpic } from './yt-search-modal/epics';

let store;
const isProd: boolean = process.env.NODE_ENV === 'production';

const rootEpic = combineEpics(...youtubeEpics, ...youtubeSearchModalEpic);

// Reducers
const reducer = combineReducers({
  youtube: youtubeReducer,
  ytSearchModal: youtubeSearchModalReducer,
});

export type RootActions = ActionType<
  YoutubeActionType | YoutubeSearchModalActionType
>;

export type AppState = StateType<typeof reducer>;

const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = !isProd ? [epicMiddleware, logger] : [epicMiddleware];
  const reduxMiddleware = applyMiddleware(...middlewares);
  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store;
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

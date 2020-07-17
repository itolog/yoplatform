import { useMemo } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';
// YOUTUBE FLOW
import { ActionTypeUnion as YoutubeActionType } from './youtube/actions';
import { reducer as youtubeReducer } from './youtube/reducer';
import { epics as youtubeEpics } from './youtube/epics';

let store;

const rootEpic = combineEpics(...youtubeEpics);

// Reducers
const reducer = combineReducers({
  youtube: youtubeReducer,
});

export type RootActions = ActionType<YoutubeActionType>;

export type AppState = StateType<typeof reducer>;

const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
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

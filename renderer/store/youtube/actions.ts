import { action, ActionType } from 'typesafe-actions';

import { YoutubeVideo } from './types';
import { YoutubeResponse } from '../../shared/interface/youtube';

export enum ActionTypes {
  FETCH_YOUTUBE_VIDEO = 'FETCH_YOUTUBE_VIDEO',
  FETCH_YOUTUBE_VIDEO_SUCCESS = 'FETCH_YOUTUBE_VIDEO_SUCCESS',
  FETCH_YOUTUBE_VIDEO_FAILURE = 'FETCH_YOUTUBE__FAILURE',

  ADD_YOUTUBE_VIDEO = 'ADD_YOUTUBE_VIDEO',
  ADD_YOUTUBE_VIDEO_SUCCESS = 'ADD_YOUTUBE_VIDEO_SUCCESS',
  ADD_YOUTUBE_VIDEO_FAILURE = 'ADD_YOUTUBE_VIDEO_FAILURE',

  REMOVE_YOUTUBE_VIDEO = 'REMOVE_YOUTUBE_VIDEO',
  REMOVE_YOUTUBE_SUCCESS = 'REMOVE_YOUTUBE_SUCCESS',
  REMOVE_YOUTUBE_FAILURE = 'REMOVE_YOUTUBE_FAILURE',
}

export const Actions = {
  fetchYoutubeVideo: (payload: string) =>
    action(ActionTypes.FETCH_YOUTUBE_VIDEO, payload),
  fetchYoutubeVideoSuccess: (payload: YoutubeResponse) =>
    action(ActionTypes.FETCH_YOUTUBE_VIDEO_SUCCESS, payload),
  fetchYoutubeVideoFailure: (payload: string) =>
    action(ActionTypes.FETCH_YOUTUBE_VIDEO_FAILURE, payload),

  addYoutubeVideo: (payload: string) =>
    action(ActionTypes.ADD_YOUTUBE_VIDEO, payload),
  addYoutubeVideoSuccess: (payload: YoutubeVideo) =>
    action(ActionTypes.ADD_YOUTUBE_VIDEO_SUCCESS, payload),
  addYoutubeVideoFailure: (payload: string) =>
    action(ActionTypes.ADD_YOUTUBE_VIDEO_FAILURE, payload),

  removeYoutubeVideo: (payload: string) =>
    action(ActionTypes.REMOVE_YOUTUBE_VIDEO, payload),
  removeYoutubeVideoSuccess: (payload: string) =>
    action(ActionTypes.REMOVE_YOUTUBE_SUCCESS, payload),
  removeYoutubeVideoFailure: (payload: string) =>
    action(ActionTypes.REMOVE_YOUTUBE_FAILURE, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;

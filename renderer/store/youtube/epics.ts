import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, ActionTypes } from './actions';
import { youtubeService } from '../../shared/services/youtube.service';
import { YoutubeVideo } from './types';
import { YoutubeResponse } from '../../shared/interface/youtube';

const addMovieEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.ADD_YOUTUBE_VIDEO),
    switchMap(({ payload }) => {
      return youtubeService.search(payload).pipe(
        map((response: YoutubeResponse) => {
          console.log('response: ', response);
          const youtubePayload: YoutubeVideo = {
            id: response.items[0].id.videoId,
            snippet: {
              title: response.items[0].snippet.title,
              thumbnails: response.items[0].snippet.thumbnails.default.url,
            },
          };
          return Actions.addYoutubeVideoSuccess(youtubePayload);
        }),
        catchError((error) => {
          console.log('error: ', error);
          return of(Actions.addYoutubeVideoFailure(error.messages));
        }),
      );
    }),
  );

const removeMovieEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.REMOVE_YOUTUBE_VIDEO),
    switchMap(({ payload }) => {
      return of(Actions.removeYoutubeVideoSuccess(payload));
    }),
    catchError((error) => of(Actions.removeYoutubeVideoFailure(error))),
  );

export const epics = [addMovieEpic, removeMovieEpic];

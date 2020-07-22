import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, ActionTypes } from './actions';
import { youtubeService } from '../../shared/services/youtube.service';
import { YoutubeResponse, YoutubeVideo } from '../../shared/interface/youtube';

const fetchYoutubeEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_YOUTUBE_VIDEO),
    switchMap(({ payload }) => {
      return youtubeService.search(payload).pipe(
        map((response: YoutubeResponse) => {
          return Actions.fetchYoutubeVideoSuccess(response);
        }),
        catchError((error) => {
          return of(Actions.fetchYoutubeVideoFailure(error.messages));
        }),
      );
    }),
  );

const addYtVideoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.ADD_YOUTUBE_VIDEO),
    switchMap(({ payload }: { payload: YoutubeVideo }) => {
      return of(Actions.addYoutubeVideoSuccess(payload));
    }),
    catchError((error) => of(Actions.addYoutubeVideoFailure(error.messages))),
  );

const removeYtVideoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.REMOVE_YOUTUBE_VIDEO),
    switchMap(({ payload }) => {
      return of(Actions.removeYoutubeVideoSuccess(payload));
    }),
    catchError((error) =>
      of(Actions.removeYoutubeVideoFailure(error.messages)),
    ),
  );

export const epics = [fetchYoutubeEpic, addYtVideoEpic, removeYtVideoEpic];

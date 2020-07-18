import { Epic, ofType } from 'redux-observable';
import { Actions, ActionTypes } from './actions';
import { mapTo, take } from 'rxjs/operators';

const setYtModalOpen: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.SET_YT_MODAL_OPEN),
    mapTo(Actions.setYtModalOpen()),
    take(1),
  );

const setYtModalClose: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.SET_YT_MODAL_CLOSE),
    mapTo(Actions.setYtModalClose()),
    take(1),
  );

export const epics = [setYtModalOpen, setYtModalClose];

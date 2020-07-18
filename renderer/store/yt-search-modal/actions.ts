import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  SET_YT_MODAL_OPEN = 'SET_YT_MODAL_OPEN',
  SET_YT_MODAL_CLOSE = 'SET_YT_MODAL_CLOSE',
}

export const Actions = {
  setYtModalOpen: () => action(ActionTypes.SET_YT_MODAL_OPEN),
  setYtModalClose: () => action(ActionTypes.SET_YT_MODAL_CLOSE),
};

export type ActionTypeUnion = ActionType<typeof Actions>;

import { AddImageState } from '../types';

export const ADD_IMAGE = 'ADD_IMAGE';

interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: AddImageState;
}

export type ImageActions = AddImageAction;

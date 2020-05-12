import { AddImageState } from '../types';

export const IMAGE_ADDED = 'IMAGE_ADDED';
export const IMAGE_SUBMITTING = 'IMAGE_SUBMITTING';

interface ImageSubmittingAction {
  type: typeof IMAGE_SUBMITTING;
  payload: AddImageState;
}

interface ImageAddedAction {
  type: typeof IMAGE_ADDED;
  payload: AddImageState;
}

export type ImageActions = ImageSubmittingAction | ImageAddedAction;

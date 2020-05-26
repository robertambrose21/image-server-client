export const IMAGE_ADDED = 'IMAGE_ADDED';
export const IMAGE_SUBMITTING = 'IMAGE_SUBMITTING';
export const IMAGE_SELECTED = 'IMAGE_SELECTED';

interface ImageAddedAction {
  type: typeof IMAGE_ADDED;
}

interface ImageSubmittingAction {
  type: typeof IMAGE_SUBMITTING;
  url: string;
}

interface ImageSelectedAction {
  type: typeof IMAGE_SELECTED;
  url: string;
}

export type ImageActions =
  | ImageAddedAction
  | ImageSubmittingAction
  | ImageSelectedAction;

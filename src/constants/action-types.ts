export const IMAGE_ADDED = 'IMAGE_ADDED';
export const IMAGE_SUBMITTING = 'IMAGE_SUBMITTING';
export const IMAGE_BULK_SUBMITTING = 'IMAGE_BULK_SUBMITTING';

interface ImageAddedAction {
  type: typeof IMAGE_ADDED;
}

interface ImageSubmittingAction {
  type: typeof IMAGE_SUBMITTING;
  url: string;
}

interface ImageBulkSubmittingAction {
  type: typeof IMAGE_BULK_SUBMITTING;
  urls: string[];
}

export type ImageActions =
  | ImageAddedAction
  | ImageSubmittingAction
  | ImageBulkSubmittingAction;

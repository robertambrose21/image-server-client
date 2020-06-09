import {
  ImageActions,
  IMAGE_ADDED,
  IMAGE_SUBMITTING,
  IMAGE_SELECTED,
} from '../constants/action-types';
import { AddImageState, ImageUploadOptions } from '../types';

const initialState: AddImageState = {
  uploadState: ImageUploadOptions.NONE,
  url: undefined,
  data: undefined,
};

export function imageReducer(
  state = initialState,
  action: ImageActions
): AddImageState {
  switch (action.type) {
    case IMAGE_ADDED:
      return {
        ...state,
        uploadState: ImageUploadOptions.UPLOADED,
      };

    case IMAGE_SUBMITTING:
      return {
        ...state,
        url: action.url,
        uploadState: ImageUploadOptions.UPLOADING,
      };

    case IMAGE_SELECTED:
      return {
        ...state,
        url: action.url,
        uploadState: ImageUploadOptions.SELECTED,
      };

    default:
      return state;
  }
}

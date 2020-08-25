import {
  ImageActions,
  IMAGE_ADDED,
  IMAGE_SUBMITTING,
} from '../constants/action-types';
import { AddImageState, ImageUploadOptions } from '../types';

const initialState: AddImageState = {
  uploadStatus: ImageUploadOptions.NONE,
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
        uploadStatus: ImageUploadOptions.UPLOADED,
      };

    case IMAGE_SUBMITTING:
      return {
        ...state,
        url: action.url,
        uploadStatus: ImageUploadOptions.UPLOADING,
      };

    default:
      return state;
  }
}

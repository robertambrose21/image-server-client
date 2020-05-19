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

// TODO: Read through: https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/README.md#action-creators- and sort out actions/reducers
export function imageReducer(
  state = initialState,
  action: ImageActions
): AddImageState {
  switch (action.type) {
    case IMAGE_ADDED:
      return {
        ...state,
        uploadState: ImageUploadOptions.UPLOADED,
        data: action.data,
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

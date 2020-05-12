import {
  ImageActions,
  IMAGE_ADDED,
  IMAGE_SUBMITTING,
} from '../constants/action-types';
import { AddImageState } from '../types';

const initialState: AddImageState = {
  image: undefined,
};

export function imageReducer(
  state = initialState,
  action: ImageActions
): AddImageState {
  switch (action.type) {
    case IMAGE_ADDED:
      console.log('Wut');
      console.log(action.payload);

      return {
        ...state,
        ...action.payload,
      };

    case IMAGE_SUBMITTING:
      return state;

    default:
      return state;
  }
}

import { ImageActions, ADD_IMAGE } from '../constants/action-types';
import { AddImageState } from '../types';

const initialState: AddImageState = {
  image: undefined,
};

export function addImageReducer(
  state = initialState,
  action: ImageActions
): AddImageState {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

import { ImageActions, ADD_IMAGE } from '../constants/action-types';
import { AddImageState } from '../types';

const initialState: AddImageState = {
  imageUrl: '',
};

export function addImageReducer(
  state = initialState,
  action: ImageActions
): AddImageState {
  switch (action.type) {
    case ADD_IMAGE:
      console.log(`Adding image: '${action.payload.imageUrl}'`);
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

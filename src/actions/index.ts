import { ADD_IMAGE } from '../constants/action-types';

export function addImage(imageUrl: string) {
  return {
    type: ADD_IMAGE,
    payload: { imageUrl },
  };
}

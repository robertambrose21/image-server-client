import {
  IMAGE_ADDED,
  ImageActions,
  IMAGE_SUBMITTING,
} from '../constants/action-types';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export const addImage = (
  currentFileInput: HTMLInputElement | null
): ThunkAction<void, RootState, unknown, ImageActions> => async (dispatch) => {
  if (currentFileInput === null || !currentFileInput.files) {
    return;
  }

  // TODO: Handle multiple files
  const image = {
    data: currentFileInput.files[0],
    url: currentFileInput.files[0].name,
  };

  dispatch({
    type: IMAGE_SUBMITTING,
    image: image,
  });

  const data = new FormData();
  data.append('data', image.data);

  axios.post('/images', data, {}).then((res) => {
    console.log(res.statusText);

    dispatch({
      type: IMAGE_ADDED,
      image: image,
    });
  });
};

import { IMAGE_ADDED, ImageActions } from '../constants/action-types';
import { Image } from '../types';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export const addImage = (
  image: Image
): ThunkAction<void, RootState, unknown, ImageActions> => async (dispatch) => {
  const data = new FormData();
  data.append('data', image.data);

  axios.post('/images', data, {}).then((res) => {
    console.log(res.statusText);

    dispatch({
      type: IMAGE_ADDED,
      payload: { image },
    });
  });
};

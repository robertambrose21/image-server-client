import { IMAGE_ADDED, ImageActions } from '../constants/action-types';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export const postImage = (
  data: FormData
): ThunkAction<void, RootState, unknown, ImageActions> => async (dispatch) => {
  axios
    .post('/images', data, {})
    .then((res) => dispatch({ type: IMAGE_ADDED }));
};

// TODO: postImages

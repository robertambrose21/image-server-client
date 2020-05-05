import { ADD_IMAGE } from '../constants/action-types';
import { Image } from '../types';
import axios from 'axios';

// TODO: redux-thunk to handle this properly
export function addImage(image: Image) {
  const data = new FormData();
  data.append('data', image.data);

  axios.post('/images', data, {}).then((res) => {
    console.log(res.statusText);
  });

  return {
    type: ADD_IMAGE,
    payload: { image },
  };
}

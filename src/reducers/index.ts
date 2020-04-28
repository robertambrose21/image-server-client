import { combineReducers } from 'redux';
import { addImageReducer } from './addImageReducer';

export const rootReducer = combineReducers({
  addImage: addImageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

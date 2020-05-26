// https://blog.solutelabs.com/configuring-thunk-action-creators-and-redux-dev-tools-with-reacts-usereducer-hook-5a1608476812
import {
  useReducer,
  Reducer,
  ReducerState,
  Dispatch,
  ReducerAction,
} from 'react';

export default function useReducerWithThunk<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<any>>] {
  const [state, dispatch] = useReducer(reducer, initialState);

  let customDispatch = (action: any) => {
    if (typeof action === 'function') {
      action(customDispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, customDispatch];
}

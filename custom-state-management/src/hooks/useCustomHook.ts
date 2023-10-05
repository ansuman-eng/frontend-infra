import { useState } from 'react';

const useCustomHook = (initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => {
    return state;
  };

  const setState = (newState: any) => {
    const oldState = state;
    state = newState;
    listeners.forEach((listener) => {
      const oldListenerState = listener.mapFunction(oldState);
      const newListenerState = listener.mapFunction(state);
      if (
        JSON.stringify(oldListenerState) !== JSON.stringify(newListenerState)
      ) {
        listener.notify(newListenerState);
      }
    });
  };

  const useSlice = (mapFunction) => {
    const [sliceState, setSliceState] = useState(mapFunction(state));
    listeners.push({
      mapFunction,
      notify: setSliceState
    });
    return sliceState;
  };

  return {
    getState,
    setState,
    useSlice
  };
};

export default useCustomHook;

import useCustomHook from '../hooks/useCustomHook';

const initialState = {
  countA: 0,
  countB: 0,
  countC: 0
};

const { useSlice, setState, getState } = useCustomHook(initialState);

const incrementA = () => {
  setState({
    ...getState(),
    countA: getState().countA + 1
  });
};

const incrementB = () => {
  setState({
    ...getState(),
    countB: getState().countB + 1
  });
};

const incrementC = () => {
  setState({
    ...getState(),
    countC: getState().countC + 1
  });
};

export { useSlice, incrementA, incrementB, incrementC, getState };

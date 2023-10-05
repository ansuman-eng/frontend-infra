import { useSlice, incrementA, incrementB } from './stores/counterStore';

const CounterAB = () => {
  const { countA, countB } = useSlice((state) => ({
    countA: state.countA,
    countB: state.countB
  }));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '50%'
      }}
    >
      <button onClick={incrementA}>Increase A {countA}</button>
      <button onClick={incrementB}>Increase B {countB}</button>
      <span
        style={{
          textAlign: 'center'
        }}
      >
        {Math.random()}
      </span>
    </div>
  );
};
export default CounterAB;

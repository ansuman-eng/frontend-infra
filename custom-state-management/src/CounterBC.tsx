import { useSlice, incrementB, incrementC } from './stores/counterStore';

const CounterBC = () => {
  const { countB, countC } = useSlice((state) => ({
    countB: state.countB,
    countC: state.countC
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
      <button onClick={incrementB}>Increase B {countB}</button>
      <button onClick={incrementC}>Increase C {countC}</button>
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
export default CounterBC;

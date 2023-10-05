import { useState } from 'react';
import CounterAB from './CounterAB';
import CounterBC from './CounterBC';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '500px'
      }}
    >
      <CounterAB />
      <CounterBC />
    </div>
  );
}

export default App;

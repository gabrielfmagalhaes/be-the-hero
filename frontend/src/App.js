import React, { useState } from 'react';

import Routes from './routes';

import './global.css';

function App() {
  const [ count, setCount ] = useState(0);

  function increment() {
    setCount(count+1);
  }

  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;

import React, { Component, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const clearCount = () => {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={increment}>Clicked {count} times</button>
      <button onClick={clearCount}>Clear counter</button>
    </div>
  );  
}

export default App;

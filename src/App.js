import React, { Component } from 'react';

import { Counter } from './Counter';
import { IncreaseCountButton } from './IncreaseCountButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <Counter />
        <IncreaseCountButton />
      </div>
    );
  }
}

export default App;

import React from 'react';

import Counter from './counter';
import Keyboard from './keyboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>Nav</nav>
        <div>
          <Counter />
          <Keyboard />
        </div>
      </div>
    );
  }
}

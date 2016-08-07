import React from 'react';

import Counter from './counter';
import Keyboard from './keyboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <h1>Functional Reactive Programming Examples using <a href="https://baconjs.github.io/" target="_blank">Bacon.js</a></h1>
          <ul>
            <li>Counter</li>
            <li>Keyboard</li>
          </ul>
        </nav>
        <div className="container">
          <Counter />
          <Keyboard />
        </div>
      </div>
    );
  }
}

import React from 'react';

import Counter from './counter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>Nav</nav>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

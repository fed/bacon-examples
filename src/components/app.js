import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <h1>Functional Reactive Programming Examples using <a href="https://baconjs.github.io/" target="_blank">Bacon.js</a></h1>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/keyboard">Keyboard</Link></li>
            <li><Link to="/double-click">Double Click</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};

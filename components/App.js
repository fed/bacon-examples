import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Counter from './Counter';
import Keyboard from './Keyboard';
import DoubleClick from './DoubleClick';
import Spreadsheet from './Spreadsheet';
import UserDetails from './UserDetails';
import Movies from './Movies';
import NoMatch from './NoMatch';

export default function App() {
  return (
    <Fragment>
      <nav className="navigation">
        <h1>
          Functional Reactive Programming Examples using{' '}
          <a
            href="https://baconjs.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bacon.js
          </a>
        </h1>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/keyboard">Keyboard</Link>
          </li>
          <li>
            <Link to="/double-click">Double Click</Link>
          </li>
          <li>
            <Link to="/spreadsheet">Spreadsheet</Link>
          </li>
          <li>
            <Link to="/user-details">User Details</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/keyboard" component={Keyboard} />
          <Route exact path="/double-click" component={DoubleClick} />
          <Route exact path="/spreadsheet" component={Spreadsheet} />
          <Route exact path="/user-details" component={UserDetails} />
          <Route exact path="/movies" component={Movies} />

          {/* Start off with the Counter example  */}
          <Redirect exact from="/" to="/counter" />

          {/* 404 Page */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Fragment>
  );
}

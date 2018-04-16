import React, { Fragment } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Counter from './Counter';
import Keyboard from './Keyboard';
import DoubleClick from './DoubleClick';
import Spreadsheet from './Spreadsheet';
import UserDetails from './UserDetails';
import Movies from './Movies';
import NoMatch from './NoMatch';

const examples = [
  { title: 'Counter', link: '/counter' },
  { title: 'Keyboard', link: '/keyboard' },
  { title: 'Double Click', link: '/double-click' },
  { title: 'Spreadsheet', link: '/spreadsheet' },
  { title: 'User Details (Ajax)', link: '/user-details' },
  { title: 'Movies (Typeahead Search)', link: '/movies' }
];

export default function App() {
  return (
    <Fragment>
      <header>
        <h1 class="heading">
          Functional Reactive Programming Examples using{' '}
          <a
            href="https://baconjs.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bacon.js
          </a>
        </h1>

        <nav className="navigation">
          <ul className="navigation__list">
            {examples.map(example => (
              <li className="navigation__list-option" key={example.link}>
                <NavLink
                  to={example.link}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  {example.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

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

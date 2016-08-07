import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Counter from './components/counter';
import Keyboard from './components/keyboard';
import Movies from './components/movies';
import NoMatch from './components/noMatch';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="counter" component={Counter} />
      <Route path="keyboard" component={Keyboard} />
      <Route path="movies" component={Movies} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);

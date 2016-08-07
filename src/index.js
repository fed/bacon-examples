import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Counter from './components/counter';
import Keyboard from './components/keyboard';
import NoMatch from './components/noMatch';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="counter" component={Counter} />
      <Route path="keyboard" component={Keyboard} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);

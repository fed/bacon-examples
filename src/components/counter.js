import React from 'react';
import Bacon from 'baconjs';

export default class Counter extends React.Component {
  componentDidMount() {
    const upButtonStream = Bacon.fromEvent(document.querySelector('#up'), 'click');
    const downButtonStream = Bacon.fromEvent(document.querySelector('#down'), 'click');
    const initialState = 0;

    upButtonStream
      .map(1)
      .merge(downButtonStream.map(-1))
      .scan(initialState, (x,y) => x + y)
      .onValue((value) => document.querySelector('#result').textContent = value);
  }

  render() {
    return (
      <section className="example">
        <h1>Counter</h1>
        <div id="result"></div>
        <button id="up">Up</button>
        <button id="down">Down</button>
      </section>
    );
  }
}

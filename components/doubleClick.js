import React from 'react';
import Bacon from 'baconjs';

export default class DoubleClick extends React.Component {
  componentDidMount() {
    const clickStream = Bacon.fromEvent(document.querySelector('#button'), 'click');
    const log = document.querySelector('#log');

    let doubleClickStream = clickStream
      .bufferWithTime(250)
      .map(arr => arr.length)
      .filter(len => len === 2);

    doubleClickStream
      .onValue(() => log.textContent = 'Button has just been double-clicked on. Hiding this in 2 secs.');

    doubleClickStream
      .delay(2000)
      .onValue(() => log.textContent = '');
  }

  render() {
    return (
      <section className="example">
        <h1>Double Click</h1>
        <pre><code id="log"></code></pre>
        <button id="button">Double click me!</button>
      </section>
    );
  }
}

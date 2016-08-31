import React from 'react';
import Bacon from 'baconjs';

export default class Keyboard extends React.Component {
  componentDidMount() {
    // Create a new observable object, ie: observe all "on keyup" events.
    // Each EventStream represents a stream of events.
    const allKeyUps = Bacon.fromEvent(document, 'keyup');
    const allKeyDowns = Bacon.fromEvent(document, 'keydown');
    const log = document.querySelector('#log');

    // Filtered stream: from all keyups events, filter those which have a keyCode = 32 (space bar)
    const releasedStream = allKeyUps
      .filter((event) => event.keyCode === 32)
      .map(false);
    const pressedStream = allKeyDowns
      .filter((event) => event.keyCode === 32)
      .map(true);

    // This is an Observable object, meaning that you can listen to events
    // in the stream using, for instance, the onValue method with a callback.
    releasedStream
      .merge(pressedStream)
      .toProperty(false)
      .onValue((pressed) => {
        if (pressed) {
          log.textContent = 'Space is now pressed :)';
        } else {
          log.textContent = 'No one likes the Space key :(';
        }
      });
  }

  render() {
    return (
      <section className="example">
        <h1>Keyboard</h1>
        <p>Hold the "space" key and see the output on the log.</p>
        <pre><code id="log"></code></pre>
      </section>
    );
  }
}

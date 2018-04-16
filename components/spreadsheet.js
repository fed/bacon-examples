import React from 'react';
import Bacon from 'baconjs';
import isNumber from 'lodash/isNumber';

export default class Spreadsheet extends React.Component {
  componentDidMount() {
    const firstValueStream = Bacon.fromEvent(
      document.querySelector('#a'),
      'keyup'
    )
      .map(event => event.target.value)
      .map(parseInt)
      .filter(isNumber)
      .toProperty(0);

    const secondValueStream = Bacon.fromEvent(
      document.querySelector('#b'),
      'keyup'
    )
      .map(event => event.target.value)
      .map(parseInt)
      .filter(isNumber)
      .toProperty(0);

    firstValueStream
      .combine(secondValueStream, (x, y) => x + y)
      .onValue(result => (document.querySelector('#result').value = result));
  }

  render() {
    return (
      <section className="example">
        <h1>Spreadsheet</h1>
        <input type="number" id="a" /> + <input type="number" id="b" /> ={' '}
        <input type="number" id="result" disabled />
      </section>
    );
  }
}

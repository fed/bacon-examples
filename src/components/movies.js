import React from 'react';
import Bacon from 'baconjs';
import axios from 'axios';

import {MOVIE_API} from '../utils/constants';

export default class Movies extends React.Component {
  componentDidMount() {
    const getResults = (query) => {
      return axios
        .get(MOVIE_API + query)
        .then((response) => response.data.results);
    };

    const inputStream = Bacon.fromEvent(document.querySelector('#input'), 'keydown')
      .debounce(300) // limit the rate of queries
      .map((event) => event.target.value) // get input text value from each event
      .skipDuplicates(); // ignore duplicate events with same text

    const movieSearch = (query) => {
      if (query.length < 3) {
        return Bacon.once([]);
      }

      return Bacon.fromPromise(getResults(query));
    };

    const suggestions = inputStream.flatMapLatest(movieSearch);

    // Display "Searching..." when waiting for results
    inputStream
      .awaiting(suggestions)
      .onValue((x) => {
        if (x) {
          document.querySelector('#results').textContent = 'Searching...';
        }
      });

    // Render suggestion results to DOM
    suggestions
      .onValue((results) => {
        const parsedMovies = results.map((movie) => movie.title);

        document.querySelector('#results').textContent = parsedMovies.join(', ');
      });
  }

  render() {
    return (
      <section className="example">
        <h1>Ajax</h1>
        <p>Search for a movie by name:</p>
        <input type="text" id="input" placeholder="Enter a movie name" />
        <pre><code id="results"></code></pre>
      </section>
    );
  }
}

import React from 'react';
import Bacon from 'baconjs';
import axios from 'axios';

export const USER_API = '//api.myjson.com/bins/4rfkl';

export default class UserDetails extends React.Component {
  componentDidMount() {
    let userDataStream = Bacon.fromPromise(axios.get(USER_API));

    let firstName = userDataStream.map('.data.firstname');
    let lastName = userDataStream.map('.data.lastname');
    let email = userDataStream.map('.data.email');

    firstName.zip(lastName, (first, last) => `${first} ${last}`).onValue(data => {
      document.getElementById('fullname').textContent = data;
    });

    email.onValue(data => {
      document.getElementById('email').textContent = data;
    });
  }

  render() {
    return (
      <section className="example">
        <h1>User Details</h1>
        <pre>
          <code>
            <p>
              Name: <span id="fullname" />
            </p>
            <p>
              Email: <span id="email" />
            </p>
          </code>
        </pre>
      </section>
    );
  }
}

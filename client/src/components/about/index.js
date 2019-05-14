import React from 'react';
import './about.css';

const About = () => (
  <div className="about">
    <h1>reduxTable</h1>
    <h3>Implementation of AgGrid data display for Twitch Account dummy data.</h3>
    <h2>Tech Stack</h2>
    <p>
      [Front-end]
      <br />
      Redux
      <br />
      Redux-saga
      <br />
      React-router-dom
      <br />
      ag-Grid
    </p>

    <p>
      [Back-end]
      <br />
      node/express
    </p>

    <p>
      [other]
      <br />
      faker
      <br />
      axios
    </p>
  </div>
);

export default About;

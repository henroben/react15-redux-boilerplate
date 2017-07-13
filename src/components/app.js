import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
          <h2>React 15 / Redux boilerplate</h2>
          <p>React v15 boilerplate with Redux, Redux-Thunk, React Router with Bootstrap3 & Font Awesome.</p>
          <p>Testing with Mocha, Chai</p>
          <p>Webpack configured for:</p>
          <ul>
              <li>SCSS</li>
              <li>Base 64 image inclusion in bundle.js for images &lt; 40Kb</li>
              <li>Optimisation & inclusion in dist directory for images &gt; 40Kb</li>
              <li><i className="fa fa-flag"></i> Font Awesome</li>
              <li>TODO: Add in Bootstrap scss</li>
          </ul>
      </div>
    );
  }
}

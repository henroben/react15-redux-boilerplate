import React, { Component } from 'react';
import bootstrapIcon from '../../img/Bootstrap-128.png';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
          <h2>React 15 / Redux boilerplate</h2>
          <p>React v15 boilerplate with Redux, Redux-Thunk, React Router with Bootstrap3 & Font Awesome.</p>
          <p>Testing with Mocha, Chai</p>
          <p><img src={bootstrapIcon} alt="Bootstrap" className="pull-right" /> Webpack configured for:</p>
          <ul>
              <li>SCSS</li>
              <li>Bootstrap 3 SCSS</li>
              <li><i className="fa fa-flag"></i> Font Awesome SCSS</li>
              <li>Base 64 image inclusion in bundle.js for images &lt; 10Kb</li>
              <li>Optimisation & inclusion in dist directory for images &gt; 10Kb</li>
          </ul>
      </div>
    );
  }
}

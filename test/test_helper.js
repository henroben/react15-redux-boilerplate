import jsdom from 'jsdom';
import _$ from 'jquery';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
// import React from 'react';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import configureMockStore from 'redux-mock-store';

global.document = jsdom.jsdom('<!doctype html><html><body><div id="main" class="container" data-host=""></div></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(global.window);

function noop() {
    return null;
}

// Mocha doesn't have access to webpack loaders, so set imported css, png, jpg & svg's to null for testing
require.extensions['.css'] = noop;
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.svg'] = noop;

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export {renderComponent, expect, configureMockStore};

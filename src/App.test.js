import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./config/Api');

describe('when the app is mounted', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

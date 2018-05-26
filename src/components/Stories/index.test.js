import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stories from '../Stories';
import { mount } from 'enzyme';

const stories = [
    {title: "Story title 1", url: "https://story/url/1", score: 10, time: 1527357405},
    {title: "Story title 2", url: "https://story/url/2", score: 20, time: 1527357405},
    {title: "Story title 3", url: "https://story/url/3", score: 30, time: 1527357405}
];

describe('when the Stories component is called with stories data', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Stories stories={stories}/>);
  });

  it('renders the Stories component', () => {
    expect(wrapper.find('.Stories').length).toEqual(1);
  });

  it('creates a separate Story component for each story', () => {
    expect(wrapper.find('.Story').length).toEqual(3);
  });

  it('populates each created story with its own story content', () => {
    expect(wrapper.find('.Story').at(0).find('.Story__title').text()).toEqual('Story title 1')
    expect(wrapper.find('.Story').at(1).find('.Story__title').text()).toEqual('Story title 2')
    expect(wrapper.find('.Story').at(2).find('.Story__title').text()).toEqual('Story title 3')
  });

});

import React, { Component } from 'react';
import Story from '../Story';
import './Stories.css';

class Stories extends Component { 
  render() {
    if (this.props.stories) {
      return (
        <div className="Stories">
        {
          this.props.stories.map((story, i) => (
            <Story key={i} data={story} inc={i} />
          ))
        }
        </div>
      )
    }
    return null;
  }
}

export default Stories;

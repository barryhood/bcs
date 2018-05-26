import React, { Component } from 'react';
import { formatDateTime } from '../../utilities';
import './Story.css';

class Story extends Component {
  render() {
    return (
      <a className="Story" href={this.props.data.url}>
        <div className="Story__score-wrapper">
          <div className="Story__score">
            {this.props.data.score}
          </div>
        </div>
        <h2 className="Story__title">{this.props.data.title}</h2>
        <p className="Story__date">{formatDateTime(this.props.data.time)}</p>
      </a>
    )
  }
}

export default Story;

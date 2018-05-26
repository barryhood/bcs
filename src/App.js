import React, { Component } from "react";
import { Api } from "./config/Api";
import Stories from "./components/Stories";
import Loader from "./components/Loader";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      stories: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.getStories();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async getStories() {
    const stories = await Api();
    if (this._isMounted) {
      this.setState({
        stories,
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader />}
        <Stories stories={this.state.stories} />
      </div>
    );
  }
}

export default App;

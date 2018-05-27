import React, { Component } from "react";
import { Api } from "./config/Api";
import Stories from "./components/Stories";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
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
    let stories = await Api();
    if(this._isMounted && stories.error) {
      this.setState({ error: stories.error, loading: false });
    }
    if(this._isMounted && !stories.error && stories.length) {
      this.setState({ stories, loading: false });
    }
  }

  renderStories() {
    if(this.state.stories.length) return (<Stories stories={this.state.stories} />);
  }

  renderErrorMsg() {
    if(this.state.error) return (<ErrorMsg errorMsg={this.state.error} />);
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader />}
        {this.renderStories()}
        {this.renderErrorMsg()}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { LoadingProgress, CircularIntegration } from "../lib/ui/LoadingProgress";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello React</h1>
        <LoadingProgress />
        <CircularIntegration />
      </React.Fragment>
    );
  }
}

export default App

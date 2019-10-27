import React, { Component } from 'react';
import CircularIntegration from '../lib/ui/CircularIntegration'
import BoxProgress from "../lib/ui/BoxProgress";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello React</h1>
        <CircularIntegration />
        <BoxProgress />
      </React.Fragment>
    );
  }
}

export default App

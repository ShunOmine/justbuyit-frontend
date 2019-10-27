import React, { Component } from 'react';
import LoadingProgress from '../lib/ui/LoadingProgress'
import CircularIntegration from '../lib/ui/CircularIntegration'
import BoxProgress from "../lib/ui/BoxProgress";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello React</h1>
        <LoadingProgress />
        <CircularIntegration />
        <BoxProgress />
      </React.Fragment>
    );
  }
}

export default App
